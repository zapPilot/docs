import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 主要文档侧边栏
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'How It Works',
      items: ['how-it-works/index', 'how-it-works/cross-chain-operations'],
    },
    {
      type: 'category',
      label: 'Investment Strategies',
      items: ['strategies/index', 'strategies/kelly-criterion'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/index'],
    },
    {
      type: 'category',
      label: 'Safety & Security',
      items: ['security/index', 'security/incidents'],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      items: ['tokenomics/tokenomics', 'tokenomics/compensation_plan'],
    },
    'about',
    'fees',
    'roadmap',
    'investment-potential',
  ],
};

export default sidebars;
