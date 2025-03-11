import fs from 'fs';
import { format } from 'date-fns';

const baseUrl = 'https://votrehoroscopedujour.fr/sign';
const zodiacSigns = [
  'belier', 'taureau', 'gemeaux', 'cancer', 'lion', 
  'vierge', 'balance', 'scorpion', 'sagittaire', 
  'capricorne', 'verseau', 'poisson'
];

// Template
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${zodiacSigns
    .map((sign) => `
      <url>
        <loc>${baseUrl}/${sign}</loc>
        <lastmod>${format(new Date(), 'yyyy-MM-dd')}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>
    `)
    .join('\n')}
</urlset>`;

// Ecriture sitemap.xml
fs.writeFileSync('./public/sitemap.xml', sitemap);


console.log('Sitemap généré avec succès !');
