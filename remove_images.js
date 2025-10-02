const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/data/products.js', 'utf8');

// Remove all images arrays using regex
// This pattern matches:
// - "    images: [" followed by newline
// - Any content until the closing "],"
// - Including multiple lines with proper indentation
content = content.replace(/    images: \[\s*\n\s*[^\]]+\n\s*\],/g, '');

// Write back to file
fs.writeFileSync('src/data/products.js', content);

console.log('Removed all images arrays from products.js');
