#!/usr/bin/env node

const path = require('path');
const OpenCC = require('opencc-js');
const { runTranslation } = require('./lib/translator');

// Initialize OpenCC converter for Traditional (Hong Kong) to Simplified Chinese (China)
const converter = OpenCC.Converter({ from: 'hk', to: 'cn' });

const sourceDir = path.join(__dirname, '../i18n/zh-Hant');
const targetDir = path.join(__dirname, '../i18n/zh-Hans');

function main() {
  runTranslation({
    sourceDir,
    targetDir,
    converter,
    label: 'Traditional Chinese (zh-Hant) → Simplified Chinese (zh-Hans)',
  });
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main };
