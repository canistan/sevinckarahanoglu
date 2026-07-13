const fs = require('fs');

const urls = [
  'https://sevincdent.com/tedaviler/estetik-dis-hekimligi/',
  'https://sevincdent.com/tedaviler/gulus-tasarimi/',
  'https://sevincdent.com/tedaviler/dis-beyazlatma/',
  'https://sevincdent.com/tedaviler/implant-cerrahisi/',
  'https://sevincdent.com/tedaviler/tam-dis-protezi/',
  'https://sevincdent.com/tedaviler/lazer-destekli-dis-hekimligi/',
  'https://sevincdent.com/tedaviler/ortodonti/',
  'https://sevincdent.com/tedaviler/dis-eti-tedavileri/',
  'https://sevincdent.com/tedaviler/zirkonyum-porselen-kronlar/',
  'https://sevincdent.com/tedaviler/hassas-baglantili-protezler/',
  'https://sevincdent.com/tedaviler/dis-dolgusu/',
  'https://sevincdent.com/tedaviler/kok-kanal-tedavisi/',
  'https://sevincdent.com/tedaviler/20lik-dis-cekimi/'
];

async function scrape() {
  let result = '';
  for (const url of urls) {
    try {
      console.log(`Fetching ${url}...`);
      const response = await fetch(url);
      const html = await response.text();
      
      // Extract text from elementor widget container
      const contentMatch = html.match(/<div class="elementor-widget-container">\s*<p>(.*?)<\/div>/s);
      let content = '';
      if (contentMatch) {
         // strip html tags
         content = contentMatch[1].replace(/<[^>]*>?/gm, '').trim();
      } else {
         // fallback
         const mainMatch = html.match(/<main[^>]*>(.*?)<\/main>/s);
         if (mainMatch) {
            content = mainMatch[1].replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
         }
      }
      result += `\n\n--- ${url} ---\n${content}\n`;
    } catch(e) {
      console.error(`Error fetching ${url}:`, e);
    }
  }
  fs.writeFileSync('scraped_treatments.txt', result);
  console.log('Done scraping.');
}

scrape();
