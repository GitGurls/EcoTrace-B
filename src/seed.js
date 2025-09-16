

// // src/seed.js
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import Spot from "./models/spot.js";
// import Festival from "./models/Festival.js";

// dotenv.config();

// // ✅ MongoDB connect
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected for seeding..."))
//   .catch((err) => console.error(err));

// const seedSpots = async () => {
//   try {
//     // Purana data hata do
//     await Spot.deleteMany();

//     // New dummy data insert
//     await Spot.insertMany([
//       {
//         name: "Dassam Falls",
//         location: "Ranchi, Jharkhand",
//         description: "A scenic waterfall surrounded by lush forests, a popular eco-tourism spot.",
//         image: "/images/dasam.jpg",
//         category: "Eco",
//       },
//       {
//         name: "Hundru Falls",
//         location: "Ranchi, Jharkhand",
//         description: "One of the highest waterfalls in Jharkhand, famous for natural beauty and adventure.",
//         image: "/images/hundru.jpg",
//         category: "Eco",
//       },
//       {
//         name: "Netarhat",
//         location: "Latehar, Jharkhand",
//         description: "Known as the Queen of Chotanagpur, famous for sunrise and sunset points.",
//         image: "https://curlytales.com/wp-content/uploads/2022/06/6137c12c-d187-4124-af98-6b52afd30bdc-2-1170x658.jpg",
//         category: "Heritage",
//       },
//       {
//         name: "Jonha Falls",
//         location: "Ranchi, Jharkhand",
//         description: "Also called Gautamdhara Falls, surrounded by temples and scenic landscapes.",
//         image: "https://www.adotrip.com/public/images/areas/master_images/5c3dbf9a9f15d-Jonha_Falls_Attractions.jpg",
//         category: "Cultural",
//       },
//       {
//         name: "Baidhyanath Dham",
//         location: "Deoghar, Jharkhand",
//         description: "One of the twelve Jyotirlingas, a major pilgrimage site for Hindus.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Baidyanath_Temple_Deoghar.jpg",
//         category: "Cultural",
//       },
//     ]);


//     // Festivals (real data)
//     await Festival.deleteMany();
//     await Festival.insertMany([
//       {
//         name: "Sarhul",
//         date: new Date("2025-04-10"),
//         description: "Sarhul is a tribal festival of Jharkhand celebrated to mark the beginning of spring.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Sarhul_Festival.jpg",
//         location: "Ranchi, Khunti, Simdega",
//         type: "Tribal"
//       },
//       {
//         name: "Karam Festival",
//         date: new Date("2025-09-18"),
//         description: "Karam or Karma is a harvest festival celebrated by tribal communities in Jharkhand.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Karma_Festival.jpg",
//         location: "Hazaribagh, Dumka, Giridih",
//         type: "Harvest"
//       },
//       {
//         name: "Sohrai",
//         date: new Date("2025-11-15"),
//         description: "Sohrai is a harvest and cattle festival celebrated after Diwali. Houses are decorated with wall paintings.",
//         image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sohrai_Painting.jpg",
//         location: "Hazaribagh",
//         type: "Harvest"
//       }
//     ]);

//     console.log("✅ Dummy spots inserted successfully!");
//     process.exit();
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// };

// seedSpots();


// backend/src/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Spot from "./models/spot.js";
import Festival from "./models/Festival.js";

dotenv.config();

// ✅ MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected for seeding..."))
  .catch((err) => console.error(err));

const runSeed = async () => {
  try {
    // -------------------
    // 🌍 Tourism Spots
    // -------------------
    await Spot.deleteMany();
    await Spot.insertMany([
      {
        name: "Dassam Falls",
        location: "Ranchi, Jharkhand",
        description:
          "A scenic waterfall surrounded by lush forests, a popular eco-tourism spot.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/fc/Dassam_falls_Ranchi.jpg",
        category: "Eco",
      },
      {
        name: "Hundru Falls",
        location: "Ranchi, Jharkhand",
        description:
          "One of the highest waterfalls in Jharkhand, famous for natural beauty and adventure.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Hundru_Falls.jpg",
        category: "Eco",
      },
      {
        name: "Netarhat",
        location: "Latehar, Jharkhand",
        description:
          "Known as the Queen of Chotanagpur, famous for sunrise and sunset points.",
        image:
          "https://curlytales.com/wp-content/uploads/2022/06/6137c12c-d187-4124-af98-6b52afd30bdc-2-1170x658.jpg",
        category: "Heritage",
      },
      {
        name: "Jonha Falls",
        location: "Ranchi, Jharkhand",
        description:
          "Also called Gautamdhara Falls, surrounded by temples and scenic landscapes.",
        image:
          "https://www.adotrip.com/public/images/areas/master_images/5c3dbf9a9f15d-Jonha_Falls_Attractions.jpg",
        category: "Cultural",
      },
      {
        name: "Baidhyanath Dham",
        location: "Deoghar, Jharkhand",
        description:
          "One of the twelve Jyotirlingas, a major pilgrimage site for Hindus.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Baidyanath_Temple_Deoghar.jpg",
        category: "Religious",
      },
    ]);

    // -------------------
    // 🎉 Festivals
    // -------------------
    await Festival.deleteMany();
    await Festival.insertMany([
      {
        name: "Sarhul",
        date: new Date("2025-04-10"),
        description:
          "Sarhul is a tribal festival of Jharkhand celebrated to mark the beginning of spring.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8e/Sarhul_Festival.jpg",
        location: "Ranchi, Khunti, Simdega",
        type: "Tribal",
      },
      {
        name: "Karam Festival",
        date: new Date("2025-09-18"),
        description:
          "Karam or Karma is a harvest festival celebrated by tribal communities in Jharkhand.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/f/f3/Karma_Festival.jpg",
        location: "Hazaribagh, Dumka, Giridih",
        type: "Harvest",
      },
      {
        name: "Sohrai",
        date: new Date("2025-11-15"),
        description:
          "Sohrai is a harvest and cattle festival celebrated after Diwali. Houses are decorated with wall paintings.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6e/Sohrai_Painting.jpg",
        location: "Hazaribagh",
        type: "Harvest",
      },
    ]);

    console.log("🎉 Seeding Successful: Spots + Festivals inserted!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

runSeed();


