const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

async function processLogo() {
  const inputPath = path.resolve(
    "C:/Users/admin/.gemini/antigravity-ide/brain/964b9898-96f5-4c93-b0c5-6896717e9ce0/selvaraj_logo_1787633047598.jpg"
  );
  const outPngPath = path.resolve("public/selvaraj-logo.png");
  const outWebpPath = path.resolve("public/selvaraj-logo.webp");
  const outIconPath = path.resolve("public/selvaraj-icon.png");

  console.log("Reading input from:", inputPath);

  // Load raw RGBA
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image info: ${width}x${height} with ${channels} channels`);

  // Flood fill / background transparency removal
  // Check from edges
  const isWhite = (r, g, b) => r > 242 && g > 242 && b > 242;

  // Mask array
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed with border pixels
  for (let x = 0; x < width; x++) {
    // top border
    let idxTop = (0 * width + x) * 4;
    if (isWhite(data[idxTop], data[idxTop + 1], data[idxTop + 2])) {
      visited[0 * width + x] = 1;
      queue.push([x, 0]);
    }
    // bottom border
    let idxBottom = ((height - 1) * width + x) * 4;
    if (isWhite(data[idxBottom], data[idxBottom + 1], data[idxBottom + 2])) {
      visited[(height - 1) * width + x] = 1;
      queue.push([x, height - 1]);
    }
  }

  for (let y = 0; y < height; y++) {
    // left border
    let idxLeft = (y * width + 0) * 4;
    if (isWhite(data[idxLeft], data[idxLeft + 1], data[idxLeft + 2]) && !visited[y * width + 0]) {
      visited[y * width + 0] = 1;
      queue.push([0, y]);
    }
    // right border
    let idxRight = (y * width + (width - 1)) * 4;
    if (isWhite(data[idxRight], data[idxRight + 1], data[idxRight + 2]) && !visited[y * width + (width - 1)]) {
      visited[y * width + (width - 1)] = 1;
      queue.push([width - 1, y]);
    }
  }

  // BFS to remove connected white background
  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (!visited[nIndex]) {
          const pIdx = nIndex * 4;
          const r = data[pIdx];
          const g = data[pIdx + 1];
          const b = data[pIdx + 2];
          if (isWhite(r, g, b)) {
            visited[nIndex] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Apply transparency to connected background pixels & smooth edges
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const pos = y * width + x;

      if (visited[pos]) {
        data[idx + 3] = 0; // completely transparent
      } else if (r > 248 && g > 248 && b > 248) {
        // Any residual pure white background
        data[idx + 3] = 0;
      }
    }
  }

  // Save trimmed transparent PNG and WebP
  await sharp(data, {
    raw: { width, height, channels: 4 },
  })
    .trim()
    .png({ compressionLevel: 9, quality: 100 })
    .toFile(outPngPath);

  await sharp(data, {
    raw: { width, height, channels: 4 },
  })
    .trim()
    .webp({ quality: 95, alphaQuality: 100 })
    .toFile(outWebpPath);

  // Also create a dedicated square emblem icon for avatar/brand
  await sharp(data, {
    raw: { width, height, channels: 4 },
  })
    .trim()
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(outIconPath);

  console.log("Successfully generated transparent logos:");
  console.log("PNG:", outPngPath);
  console.log("WebP:", outWebpPath);
  console.log("Icon:", outIconPath);
}

processLogo().catch(console.error);
