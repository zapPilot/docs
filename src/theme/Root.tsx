import React from 'react';
import MobileFixWrapper from '@site/src/components/MobileFix';

// Default implementation, that you can customize
export default function Root({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <MobileFixWrapper />
      {children}
    </>
  );
}
