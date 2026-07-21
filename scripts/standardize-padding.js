/**
 * Standardize container-level horizontal padding.
 * 
 * Target: padding-inline = min(5vw, 72px) on desktop
 *   → 5vw scales proportionally with viewport (always 5% from edge)
 *   → capped at 72px (5% of 1440px design width)
 *   → on screens > 1440px: container is capped by max-width, content stays identical
 * 
 * Only touches OUTER container padding (mx-auto max-w-[1440px] pattern)
 * Does NOT touch internal card/component padding.
 */

const fs = require('fs');

const DESKTOP_PADDING = 'min(5vw,72px)';
const MOBILE_PADDING  = 'px-5';
const DESKTOP_CLASS   = `md:px-[${DESKTOP_PADDING}]`;

// Patterns that represent the main container horizontal padding (outer level)
// These are patterns that wrap full-width sections and use mx-auto max-w-[1440px]
const outerContainerPatterns = [
  // Current state — various forms
  { from: 'px-5 md:px-16',      to: `${MOBILE_PADDING} ${DESKTOP_CLASS}` },
  { from: 'px-4 md:px-16',      to: `${MOBILE_PADDING} ${DESKTOP_CLASS}` },
  { from: 'px-5 md:px-[5vw]',   to: `${MOBILE_PADDING} ${DESKTOP_CLASS}` },
];

// Files that contain outer container divs needing standardization
const files = [
  'src/components/Navbar.tsx',
  'src/components/ResultImpactInteractive.tsx',
  'src/components/WorkProjectCard.tsx',
  'app/contact/page.tsx',
  'app/who-we-are/page.tsx',
  'app/services/[slug]/page.tsx',
  'app/works/[slug]/page.tsx',
];

let totalFiles = 0;
let totalReplacements = 0;

files.forEach(f => {
  if (!fs.existsSync(f)) { console.log('⚠ Skip (not found):', f); return; }

  let content = fs.readFileSync(f, 'utf8');
  const original = content;
  let fileChanges = 0;

  outerContainerPatterns.forEach(({ from, to }) => {
    if (content.includes(from)) {
      const count = content.split(from).length - 1;
      content = content.split(from).join(to);
      fileChanges += count;
    }
  });

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    totalFiles++;
    totalReplacements += fileChanges;
    console.log(`✓ [${fileChanges}x] ${f}`);
  } else {
    console.log(`  [no change] ${f}`);
  }
});

console.log(`\nDone: ${totalReplacements} replacements across ${totalFiles} files`);
console.log(`Target padding: ${MOBILE_PADDING} ${DESKTOP_CLASS}`);
