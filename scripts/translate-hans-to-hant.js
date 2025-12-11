#!/usr/bin/env node

const path = require('path');
const OpenCC = require('opencc-js');
const { runTranslation } = require('./lib/translator');

// Initialize OpenCC converter for Simplified Chinese (China) to Traditional Chinese (Hong Kong)
const converter = OpenCC.Converter({ from: 'cn', to: 'hk' });

const sourceDir = path.join(__dirname, '../i18n/zh-Hans');
const targetDir = path.join(__dirname, '../i18n/zh-Hant');

function main() {
  runTranslation({
    sourceDir,
    targetDir,
    converter,
    label: 'Simplified Chinese (zh-Hans) → Traditional Chinese (zh-Hant)',
  });
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main };
