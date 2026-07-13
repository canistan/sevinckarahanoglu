const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// Ensure directories exist
const tempDir = path.join(__dirname, 'temp_certs');
const outDir = path.join(__dirname, 'processed_certs');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const certUrls = [
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/ACEV-Istanbul-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/ALDI-2010-Istanbul-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/Edad-2011-Diyarbakir-683x1024.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/Edad-2011-Istanbul-1024x684.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/IDC-2010-Bursa-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/IDC-2011-Istanbul-1024x682.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/ITI-2016-Antalya-683x1024.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/Quintessence-2006-Istanbul-683x1024.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/Quintessence-2007-Istanbul-1024x684.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/Quintessence-2008-Istanbul-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/TDB-2006-1024x682.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/TDB-2007-Istanbul-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/TDB-2008-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/TDB-2009-Istanbul-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/edad-2016-683x1024.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/ileri-seviye-cerrahi-ve-implantoloji-egitimi-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/kovakerr-1024x683.jpg',
  'https://web.archive.org/web/20200809100406im_/http://www.sevinckarahanoglu.com/dosyalar/turk-oral-implantoloji-dernegi-683x1024.jpg'
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: false }) // upscale to 1200px width
      .sharpen({ sigma: 1, m1: 1, m2: 2 }) // apply unsharp mask for better clarity
      .jpeg({ quality: 95 })
      .toFile(outputPath);
  } catch (err) {
    console.error('Error processing image:', inputPath, err);
  }
}

async function main() {
  console.log('Starting download and processing...');
  
  for (let url of certUrls) {
    const filename = path.basename(url);
    const tempPath = path.join(tempDir, filename);
    const outPath = path.join(outDir, filename);
    
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, tempPath);
      console.log(`Processing ${filename}...`);
      await processImage(tempPath, outPath);
    } catch (e) {
      console.error(`Failed on ${filename}:`, e.message);
    }
  }
  
  console.log('All done. Generating import script for Payload...');
  
  // Generate a script to upload these to payload
  const files = fs.readdirSync(outDir);
  const payloadScript = `
import { getPayload } from 'payload';
import configPromise from './payload.config';
import fs from 'fs';
import path from 'path';

async function importToPayload() {
  const payload = await getPayload({ config: configPromise });
  const certsDir = path.join(process.cwd(), 'processed_certs');
  const files = fs.readdirSync(certsDir);
  
  let certificateData = [];

  for (const file of files) {
    const filePath = path.join(certsDir, file);
    const fileData = fs.readFileSync(filePath);
    const size = fs.statSync(filePath).size;
    
    const title = file.replace('.jpg', '').replace(/-/g, ' ');
    
    console.log('Uploading ' + file);
    const media = await payload.create({
      collection: 'media',
      data: {
        alt: title,
      },
      file: {
        data: fileData,
        mimetype: 'image/jpeg',
        name: file,
        size: size,
      }
    });
    
    certificateData.push({
      title: title,
      image: media.id
    });
  }
  
  console.log('Updating AboutPage Global with ' + certificateData.length + ' certificates...');
  
  await payload.updateGlobal({
    slug: 'about-page',
    data: {
      certificates: certificateData
    }
  });
  
  console.log('Done!');
  process.exit(0);
}

importToPayload().catch(console.error);
  `;
  fs.writeFileSync(path.join(__dirname, 'upload_certs.ts'), payloadScript);
  console.log('upload_certs.ts created. You can run it with tsx.');
}

main();
