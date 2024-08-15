import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">NYSee.nyc</Link></li>
        <li>&middot;</li>
        <li><Link href="/ray">Ray Weitzenberg</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;