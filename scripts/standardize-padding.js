const fs = require('fs');

const files = [
  'src/components/Navbar.tsx',
  'src/components/ResultImpactInteractive.tsx',
  'src/components/WorkProjectCard.tsx',
  'src/components/OurServices.tsx',
  'app/contact/page.tsx',
  'app/who-we-are/page.tsx',
  'app/services/[slug]/page.tsx',
  'app/works/[slug]/page.tsx',
];

const target = 'px-5 md:px-[min(5vw,72px)]';

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  let updated = content;

  updated = updated.split('px-5 md:px-[min(5.5vw,79px)]').join(target);
  updated = updated.split('px-5 md:px-[5vw]').join(target);
  updated = updated.split('px-4 md:px-[5vw]').join(target);
  updated = updated.split('md:px-[40px] lg:px-[68px]').join('md:px-[min(5vw,72px)]');

  if (f === 'src/components/Navbar.tsx') {
    updated = updated.replace(/nav className="[^"]*"/, 'nav className="mx-auto max-w-[1440px] px-5 md:px-[min(5vw,72px)] py-4 relative"');
  }

  if (updated !== content) {
    fs.writeFileSync(f, updated, 'utf8');
    console.log('Updated:', f);
  } else {
    console.log('No changes needed:', f);
  }
});
