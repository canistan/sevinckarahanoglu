const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const tempDir = path.join(__dirname, 'temp_certs');
const outDir = path.join(__dirname, 'processed_certs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function enhanceImages() {
  const files = fs.readdirSync(tempDir).filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
  console.log(`Found ${files.length} images to enhance.`);
  
  for (const file of files) {
    const inputPath = path.join(tempDir, file);
    const outputPath = path.join(outDir, file.replace('.jpeg', '.jpg').replace('.png', '.jpg'));
    
    try {
      console.log(`Enhancing ${file}...`);
      await sharp(inputPath)
        .resize({ width: 1500, withoutEnlargement: false }) // Upscale/resize
        .sharpen({ sigma: 1.5, m1: 1, m2: 2 }) // Stronger unsharp mask for text clarity
        .normalize() // Improve contrast
        .jpeg({ quality: 90 }) // High quality jpeg
        .toFile(outputPath);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
  console.log('Enhancement complete.');
}

enhanceImages().catch(console.error);
