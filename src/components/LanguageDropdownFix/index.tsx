import React, { useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

/**
 * Fix for language dropdown to work with single-click instead of double-click
 */
function LanguageDropdownFix(): null {
  useEffect(() => {
    const setupDropdownFix = () => {
      // Find all language dropdown elements
      const languageDropdowns = document.querySelectorAll(
        '.navbar__item.dropdown--hoverable'
      );

      languageDropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.navbar__link');
        const menu = dropdown.querySelector('.dropdown__menu');

        if (trigger && menu) {
          let isOpen = false;

          // Remove any existing event listeners to prevent conflicts
          const newTrigger = trigger.cloneNode(true) as HTMLElement;
          trigger.parentNode?.replaceChild(newTrigger, trigger);

          // Add single-click functionality
          newTrigger.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();

            // Close other dropdowns
            languageDropdowns.forEach(otherDropdown => {
              if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('dropdown--show');
              }
            });

            // Toggle current dropdown
            isOpen = !isOpen;
            if (isOpen) {
              dropdown.classList.add('dropdown--show');
            } else {
              dropdown.classList.remove('dropdown--show');
            }
          });

          // Close dropdown when clicking outside
          document.addEventListener('click', e => {
            if (!dropdown.contains(e.target as Node)) {
              dropdown.classList.remove('dropdown--show');
              isOpen = false;
            }
          });

          // Close dropdown when pressing escape
          document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
              dropdown.classList.remove('dropdown--show');
              isOpen = false;
            }
          });

          // Handle dropdown item clicks
          const dropdownLinks = menu.querySelectorAll('.dropdown__link');
          dropdownLinks.forEach(link => {
            link.addEventListener('click', e => {
              // Allow normal navigation
              dropdown.classList.remove('dropdown--show');
              isOpen = false;
            });
          });
        }
      });
    };

    // Setup the fix after a short delay to ensure DOM is ready
    const timer = setTimeout(setupDropdownFix, 100);

    // Also setup on route changes
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          setTimeout(setupDropdownFix, 100);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}

export default function LanguageDropdownFixWrapper(): React.ReactElement {
  return <BrowserOnly>{() => <LanguageDropdownFix />}</BrowserOnly>;
}
