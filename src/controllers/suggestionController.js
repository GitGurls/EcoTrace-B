import Spot from "../models/Spot.js";

/**
 GET /api/suggestions?city=Ranchi&availableHours=4&interest=Eco
 Response: { suggestions: [...], remainingMinutes: X, note?: "..." }
*/
export const getSuggestions = async (req, res) => {
  try {
    const { city, availableHours, interest } = req.query;
    if (!city || !availableHours) {
      return res.status(400).json({ message: "Required: city and availableHours" });
    }
    const availableMinutes = Number(availableHours) * 60;

    // 1) First try local matches (nearestCity or district)
    let candidates = await Spot.find({
      $or: [
        { nearestCity: new RegExp(`^${city}$`, "i") },
        { district: new RegExp(`^${city}$`, "i") }
      ],
      ...(interest ? { category: new RegExp(`^${interest}$`, "i") } : {})
    }).lean();

    // 2) If none, broaden to whole state (optional)
    if (!candidates.length) {
      candidates = await Spot.find(interest ? { category: new RegExp(`^${interest}$`, "i") } : {}).lean();
    }

    // 3) Compute total time for each spot (travel + visit)
    const withTotal = candidates.map(s => ({
      ...s,
      travelMins: s.travelTimeFromCity || 0,
      visitMins: Math.round((s.recommendedDuration || 1) * 60),
      totalMinutes: (s.travelTimeFromCity || 0) + Math.round((s.recommendedDuration || 1) * 60)
    }));

    // 4) Greedy pick: sort by smallest totalMinutes and pack until time exhausted
    withTotal.sort((a, b) => a.totalMinutes - b.totalMinutes);
    const suggestions = [];
    let remaining = availableMinutes;
    for (const s of withTotal) {
      if (s.totalMinutes <= remaining) {
        suggestions.push(s);
        remaining -= s.totalMinutes;
      }
    }

    if (!suggestions.length && withTotal.length) {
      // return the single best-fit smallest item as fallback
      return res.json({
        suggestions: [withTotal[0]],
        remainingMinutes: availableMinutes - withTotal[0].totalMinutes,
        note: "No multi-spot itinerary fits. Showing best single option."
      });
    }

    return res.json({ suggestions, remainingMinutes: remaining });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
