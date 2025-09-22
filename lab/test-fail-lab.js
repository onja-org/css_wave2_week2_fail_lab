const fs = require('fs');
const cheerio = require('cheerio');

// Load files
const html = fs.readFileSync('./broken_file/index.html', 'utf8');
const css = fs.readFileSync('./broken_file/style.css', 'utf8');
const $ = cheerio.load(html);

// Count failed tests
let failedTests = 0;

// Custom assert
const assert = (condition, message) => {
  if (!condition) {
    console.error(message);
    failedTests++;
  }
};

// ===== HTML TESTS ===== //

// Accessibility / List formatting
assert($('li').length >= 6, '❌ Education or achievements <li> elements may be malformed.');
assert(!$('main main').length, '❌ Nested <main> tag is invalid. Use <section> or <div> inside <main>.');

// Layout & Spacing
assert(/class=["'][^"']*(row|col|container)[^"']*["']/.test(html), '❌ Missing Bootstrap grid classes like row, col, or container.');
assert(/style\s*=\s*".*margin|padding/.test(html) === false, '❌ Inline styles (like margin or padding) found - use class-based styling instead.');

// ===== CSS TESTS ===== //

// === 🧱 1. Layout & Spacing ===

// 1.1 Bootstrap grid or Flexbox properly
assert(/(display\s*:\s*flex|\.row\s*{[^}]*})/i.test(css), '❌ Missing Bootstrap .row or Flexbox layout.');
assert(/(col-\d+|\.col-\w+)/.test(css), '❌ Missing Bootstrap grid columns like .col-md-6 or .col-sm-12.');

// 1.2 Cards aligned and spaced evenly (basic test for spacing utilities)
assert(/(gap|margin|padding)[^;}]+;/.test(css), '❌ Missing spacing (gap, margin, or padding) rules.');
assert(/\.card/.test(css), '❌ No styles defined for .card layout.');

// 1.3 Remove inline styles (check if inline styles still exist)
const inlineStyles = $('*[style]').length;
assert(inlineStyles === 0, `❌ ${inlineStyles} element(s) use inline styles. Use class-based styling instead.`);

// === 🎨 2. Visual Styling ===

// 2.1 Font families and consistent sizes
assert(/font(-family|:)/i.test(css), '❌ Missing font styling.');
assert(/h\d\s*{[^}]*font-size/i.test(css), '❌ Headings are missing consistent font-size styles.');

// === 📱 3. Responsive Design ===

// 3.1 Media queries exist
assert(/@media\s*\(max-width:\s*\d+px\)/.test(css), '❌ Missing media query for responsiveness.');

// 3.2 Bad media query
assert(!/max-width:\s*160px/.test(css), '❌ Found incorrect media query: max-width: 160px.');

// 3.3 Bootstrap navbar collapse
assert($('.navbar-toggler').length > 0, '❌ Missing Bootstrap navbar toggler for mobile nav.');
assert($('.collapse.navbar-collapse').length > 0, '❌ Missing collapsible nav content section.');

// === 🧠 4. Cascade & Specificity ===

// 4.1 Remove unnecessary `!important`
assert(!/!important/.test(css), '❌ Remove unnecessary !important declarations.');

// 4.2 Reorganize selectors for specific sections
assert(/#about\s*{[^}]+}/.test(css), '❌ Missing or incorrect styles for #about section.');
assert(/#experience\s*{[^}]+}/.test(css), '❌ Missing or incorrect styles for #experience section.');
assert(/\.container\s*{[^}]+}/.test(css), '❌ Missing or incorrect styles for .container.');

// === 🐞 Bonus Issues (still useful) ===

assert(!/display\s*:\s*none[^}]*main/.test(css), '❌ Main content might be hidden with display: none.');
assert(!/\.hidden-navbar/.test(css) || !$('.hidden-navbar').length, '❌ .hidden-navbar is present and may cause layout issues.');

// ===== FINAL ===== //

if (failedTests === 0) {
  console.log('\n✅ All checks passed!');
} else {
  console.log(`\n❌ ${failedTests} check(s) failed. Please fix them before submitting.`);
}
