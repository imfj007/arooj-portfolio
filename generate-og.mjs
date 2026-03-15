import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <rect x="0" y="0" width="16" height="630" fill="#7c3aed"/>
  <text x="100" y="280" font-family="sans-serif" font-weight="900" font-size="90" fill="#ffffff" text-anchor="start">Arooj Jamil</text>
  <text x="100" y="380" font-family="sans-serif" font-weight="600" font-size="38" fill="#7c3aed" text-anchor="start">SEO Executive | Digital Marketing Specialist</text>
  <text x="100" y="440" font-family="sans-serif" font-weight="400" font-size="28" fill="#888888" text-anchor="start">Lahore, Pakistan</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('./public/og.png')
  .then(() => console.log('Successfully generated public/og.png'))
  .catch(err => console.error(err));
