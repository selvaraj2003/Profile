const sharp = require("sharp");
const path = require("path");

async function processHeroImage() {
  const inputPath = path.resolve(
    "C:/Users/admin/.gemini/antigravity-ide/brain/964b9898-96f5-4c93-b0c5-6896717e9ce0/hero_tools_visual_1787635267880.jpg"
  );
  const outPngPath = path.resolve("public/hero-tools.png");
  const outWebpPath = path.resolve("public/hero-tools.webp");

  console.log("Optimizing hero image from:", inputPath);

  // Resize and optimize to WebP & PNG
  await sharp(inputPath)
    .trim()
    .webp({ quality: 90 })
    .toFile(outWebpPath);

  await sharp(inputPath)
    .trim()
    .png({ compressionLevel: 8 })
    .toFile(outPngPath);

  console.log("Saved optimized hero visual to:", outWebpPath, "and", outPngPath);
}

processHeroImage().catch(console.error);
