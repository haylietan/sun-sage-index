import { PrismaClient } from '../src/generated/prisma';
const prisma = new PrismaClient();

async function main() {
  await prisma.sunscreen.create({
    data: {
      name: "Supergoop! Unseen Sunscreen",
      brand: "Supergoop!",
      spf: 40,
      skinType: ["OILY", "SENSITIVE"], 
      tag: ["reef-safe", "tinted"],    
      description: "Invisible, weightless SPF that works well under makeup.",
      rating: 4.7,
      finish: "NATURAL",              
      isReefSafe: true,              
      isWaterResistant: false      
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
