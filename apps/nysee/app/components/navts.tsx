import Link from 'next/link';
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="project__nav">
      <ul>
        <li><Link href="/">NYSee.nyc</Link></li>
        <li>&middot;</li>
        <li><Link href="/ray">Ray Weitzenberg</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;