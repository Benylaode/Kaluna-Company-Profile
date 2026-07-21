const fs = require('fs');

const files = [
  'src/components/Navbar.tsx',
  'src/components/ResultImpactInteractive.tsx',
  'src/components/OurServices.tsx',
  'app/contact/page.tsx',
  'app/who-we-are/page.tsx',
  'app/services/[slug]/page.tsx',
  'app/works/[slug]/page.tsx',
];

const targetPadding = 'px-5 md:px-[min(5vw,86px)]';

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  let updated = content;

  // Replace max-width 1440px with 1728px
  updated = updated.split('max-w-[1440px]').join('max-w-[1728px]');

  // Replace old min(5vw,72px) padding with min(5vw,86px)
  updated = updated.split('min(5vw,72px)').join('min(5vw,86px)');

  if (updated !== content) {
    fs.writeFileSync(f, updated, 'utf8');
    console.log('Updated:', f);
  } else {
    console.log('No changes needed:', f);
  }
});
