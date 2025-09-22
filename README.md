# CSS Wave 2 Week 2 Fail Lab

## Overview
This lab provides hands-on practice in fixing a broken portfolio website, focusing on essential CSS concepts such as the cascade, selectors, specificity, responsive design, and modern layout techniques.

## What You'll Learn
- **CSS Cascade & Specificity**: Understanding how CSS rules are applied and resolved
- **Responsive Design**: Using media queries to create mobile-friendly layouts
- **Modern Layout Techniques**: Working with Flexbox, CSS Grid, and Bootstrap
- **CSS Debugging**: Identifying and fixing common CSS issues and anti-patterns
- **Clean Code Practices**: Organizing CSS and removing unnecessary overrides

## Lab Structure
```
lab/
├── broken_file/          # The broken version to fix
│   ├── index.html        # Portfolio HTML with messy layout
│   └── style.css         # Broken and poorly organized CSS
├── main_version/         # Reference implementation
│   ├── index.html
│   └── style.css
├── assets/
│   └── CSS_Fail_Lab.png  # Target design to match
├── package.json          # Testing dependencies
├── test-fail-lab.js      # Automated tests
└── README.md             # Detailed lab instructions

```

## Getting Started
1. Navigate to the `lab/` directory
2. Read the detailed instructions in `lab/README.md`
3. Open `broken_file/index.html` in your browser to see the current state
4. Compare with the target design in `assets/CSS_Fail_Lab.png`
5. Fix the CSS in `broken_file/style.css` to match the target

## Key Challenges
- Fix layout and spacing issues
- Improve visual styling and typography
- Implement responsive design for mobile devices
- Clean up CSS cascade and specificity problems
- Remove inline styles and organize code properly

## Testing
Run the automated tests to validate your fixes:
```bash
cd lab
npm test
```

## Goals
Transform a broken, poorly-styled portfolio into a professional-looking responsive website that matches the provided design specification.

For detailed instructions and step-by-step guidance, see `lab/readme.md`.