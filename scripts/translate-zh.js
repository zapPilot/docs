#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const OpenCC = require('opencc-js');

// Initialize OpenCC converter for Traditional to Simplified Chinese
const converter = OpenCC.Converter({ from: 'hk', to: 'cn' });

const sourceDir = path.join(__dirname, '../i18n/zh-Hant');
const targetDir = path.join(__dirname, '../i18n/zh-Hans');

/**
 * Recursively copy directory structure and translate Chinese content
 */
function copyAndTranslateDirectory(srcDir, destDir) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const items = fs.readdirSync(srcDir);

  for (const item of items) {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursively handle directories
      copyAndTranslateDirectory(srcPath, destPath);
    } else if (stat.isFile()) {
      // Handle files
      const ext = path.extname(item).toLowerCase();

      if (ext === '.md' || ext === '.json') {
        // Read, translate, and write translatable files
        const content = fs.readFileSync(srcPath, 'utf8');
        const translatedContent = translateContent(content, ext);
        fs.writeFileSync(destPath, translatedContent, 'utf8');
        console.log(`Translated: ${path.relative(process.cwd(), destPath)}`);
      } else {
        // Copy non-translatable files as-is
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${path.relative(process.cwd(), destPath)}`);
      }
    }
  }
}

/**
 * Translate content while preserving structure
 */
function translateContent(content, fileType) {
  if (fileType === '.json') {
    try {
      const jsonObj = JSON.parse(content);
      const translatedObj = translateJsonObject(jsonObj);
      return JSON.stringify(translatedObj, null, 2);
    } catch (error) {
      console.warn('Failed to parse JSON, copying as-is:', error.message);
      return content;
    }
  } else if (fileType === '.md') {
    return translateMarkdown(content);
  }

  return content;
}

/**
 * Recursively translate JSON object values
 */
function translateJsonObject(obj) {
  if (typeof obj === 'string') {
    return converter(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(item => translateJsonObject(item));
  } else if (typeof obj === 'object' && obj !== null) {
    const translated = {};
    for (const [key, value] of Object.entries(obj)) {
      translated[key] = translateJsonObject(value);
    }
    return translated;
  }

  return obj;
}

/**
 * Translate markdown content while preserving structure
 */
function translateMarkdown(content) {
  // Split into lines for processing
  const lines = content.split('\n');
  const translatedLines = [];

  for (const line of lines) {
    // Skip code blocks and inline code
    if (line.trim().startsWith('```') || line.includes('`')) {
      translatedLines.push(line);
      continue;
    }

    // Skip frontmatter
    if (line.trim() === '---') {
      translatedLines.push(line);
      continue;
    }

    // Skip URLs and links (basic detection)
    if (
      line.includes('http://') ||
      line.includes('https://') ||
      line.includes('](')
    ) {
      // For lines with links, translate only the text parts
      const linkRegex = /(\[.*?\]\(.*?\))|(`.*?`)/g;
      const translatedLine = line
        .replace(linkRegex, match => match)
        .split(linkRegex)
        .map(part => {
          if (
            part &&
            !part.match(linkRegex) &&
            !part.includes('http') &&
            !part.includes('`')
          ) {
            return converter(part);
          }
          return part || '';
        })
        .join('');
      translatedLines.push(translatedLine);
      continue;
    }

    // Translate regular text content
    translatedLines.push(converter(line));
  }

  return translatedLines.join('\n');
}

/**
 * Main execution
 */
function main() {
  console.log(
    'Starting Traditional Chinese to Simplified Chinese translation...'
  );

  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
  }

  // Remove existing target directory to ensure clean translation
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
    console.log(`Removed existing target directory: ${targetDir}`);
  }

  copyAndTranslateDirectory(sourceDir, targetDir);

  console.log('\nTranslation completed successfully!');
  console.log(`Traditional Chinese (zh-Hant) → Simplified Chinese (zh-Hans)`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main };
