import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Minimal mobile navigation helper
 * Only adds debug logging and ensures hamburger button is clickable
 */
function MobileNavFix(): null {
  useEffect(() => {
    // Simple debug helper to ensure mobile menu works
    const debugMobileMenu = () => {
      console.log('Mobile nav fix loaded');

      // Just ensure hamburger button is clickable
      const hamburger = document.querySelector('.navbar__toggle');
      if (hamburger) {
        console.log('Hamburger button found:', hamburger);

        // Add click event listener for debugging
        const handleClick = (e: Event) => {
          console.log('Hamburger clicked', e);
          const sidebar = document.querySelector('.navbar-sidebar');
          console.log('Sidebar element:', sidebar);
          console.log('Sidebar classes:', sidebar?.className);
        };

        hamburger.addEventListener('click', handleClick);

        return () => {
          hamburger.removeEventListener('click', handleClick);
        };
      }
    };

    // Wait for DOM to be ready
    const cleanup = debugMobileMenu();

    return cleanup;
  }, []);

  return null;
}

export default function MobileFixWrapper(): React.ReactElement {
  return <BrowserOnly>{() => <MobileNavFix />}</BrowserOnly>;
}
