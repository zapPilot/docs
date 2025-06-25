import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

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
    'intro',
    'quick-start',
    'overview',
    'architecture',
    'vaults',
    'development',
    {
      type: 'category',
      label: 'API 参考',
      items: [
        'api/introduction'
      ],
    },
    {
      type: 'category',
      label: '指南',
      items: [
        'guides/best-practices'
      ],
    }
  ],
};

export default sidebars;
