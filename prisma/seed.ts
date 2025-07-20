import { PrismaClient } from '../src/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  await prisma.sunscreen.deleteMany(); 
  await prisma.sunscreen.createMany({
    data: [
      {
        name: "Beauty of Joseon Relief Sun: Rice + Probiotics",
        brand: "Beauty of Joseon",
        spf: 50,
        skinType: ["SENSITIVE", "DRY"],
        tag: ["lightweight", "non-greasy"],
        description: "Light creamy texture, fragrance-free, great under makeup.",
        rating: 4.8,
        finish: "NATURAL",
        isReefSafe: true,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg", // sample image URL
      },
      {
        name: "Round Lab Birch Juice Moisturizing Sun Cream",
        brand: "Round Lab",
        spf: 50,
        skinType: ["DRY", "NORMAL"],
        tag: ["hydrating", "dewy"],
        description: "Soothing, hydrating sun cream with birch sap.",
        rating: 4.6,
        finish: "DEWY",
        isReefSafe: true,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Isntree Hyaluronic Acid Watery Sun Gel",
        brand: "Isntree",
        spf: 50,
        skinType: ["DRY", "SENSITIVE"],
        tag: ["hydrating", "gel-based"],
        description: "Great for dry/sensitive skin, gel-type, no white cast.",
        rating: 4.7,
        finish: "NATURAL",
        isReefSafe: true,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Biore UV Aqua Rich Watery Essence",
        brand: "Biore (Japan)",
        spf: 50,
        skinType: ["OILY", "NORMAL"],
        tag: ["drugstore", "gel", "affordable"],
        description: "Classic Japanese sunscreen with watery texture.",
        rating: 4.5,
        finish: "NATURAL",
        isReefSafe: false,
        isWaterResistant: true,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Missha All Around Safe Block Essence Sun",
        brand: "Missha",
        spf: 45,
        skinType: ["DRY", "NORMAL"],
        tag: ["budget", "everyday"],
        description: "Affordable daily sun essence, dewy finish.",
        rating: 4.3,
        finish: "DEWY",
        isReefSafe: false,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Purito Daily Go-To Sunscreen",
        brand: "Purito",
        spf: 50,
        skinType: ["COMBINATION", "SENSITIVE"],
        tag: ["reef-safe", "minimalist"],
        description: "Reformulated Purito classic with tested SPF protection.",
        rating: 4.6,
        finish: "NATURAL",
        isReefSafe: true,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Thank You Farmer Sun Project Light Sun Essence",
        brand: "Thank You Farmer",
        spf: 50,
        skinType: ["NORMAL", "OILY"],
        tag: ["luxury", "essence"],
        description: "Lightweight and glowy, pleasant citrus scent.",
        rating: 4.4,
        finish: "SATIN",
        isReefSafe: false,
        isWaterResistant: true,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Etude House Sunprise Mild Airy Finish",
        brand: "Etude House",
        spf: 50,
        skinType: ["OILY", "COMBINATION"],
        tag: ["matte", "affordable"],
        description: "Best for oily skin types, matte finish, minimal cast.",
        rating: 4.3,
        finish: "MATTE",
        isReefSafe: true,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Innisfree Daily UV Defense Sunscreen",
        brand: "Innisfree",
        spf: 36,
        skinType: ["SENSITIVE", "NORMAL"],
        tag: ["clean beauty", "everyday"],
        description: "Plant-based ingredients, calming and clean.",
        rating: 4.2,
        finish: "NATURAL",
        isReefSafe: true,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Canmake Mermaid Skin Gel UV",
        brand: "Canmake (Japan)",
        spf: 50,
        skinType: ["SENSITIVE", "NORMAL"],
        tag: ["j-beauty", "primer-like"],
        description: "Works well as makeup base, no stickiness.",
        rating: 4.5,
        finish: "SATIN",
        isReefSafe: true,
        isWaterResistant: false,
        imageUrl: "/Images/Sunscreen.jpg",
      },
      {
        name: "Anessa Perfect UV Sunscreen Skincare Milk",
        brand: "Anessa (Shiseido)",
        spf: 50,
        skinType: ["NORMAL", "OILY"],
        tag: ["premium", "sweatproof"],
        description: "Very water-resistant, silky finish, luxury formula.",
        rating: 4.8,
        finish: "SATIN",
        isReefSafe: false,
        isWaterResistant: true,
        imageUrl: "/Images/Sunscreen.jpg",
      }
    ],
  });

  console.log("🌞 Sunscreen DB seeded!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
