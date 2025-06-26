module.exports = {
  // Basic formatting
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  quoteProps: 'as-needed',

  // Indentation
  tabWidth: 2,
  useTabs: false,

  // Line formatting
  printWidth: 80,
  endOfLine: 'lf',

  // JSX formatting
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',

  // Markdown formatting
  proseWrap: 'preserve',

  // File-specific overrides
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 100,
        proseWrap: 'always',
        tabWidth: 2,
      },
    },
    {
      files: '*.mdx',
      options: {
        printWidth: 100,
        proseWrap: 'preserve',
        tabWidth: 2,
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 120,
        tabWidth: 2,
      },
    },
    {
      files: '*.css',
      options: {
        printWidth: 120,
        tabWidth: 2,
      },
    },
  ],
};
