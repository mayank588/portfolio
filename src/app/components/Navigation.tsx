import { Link, useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-8 md:px-32 py-8 flex justify-between items-start">
      <Link to="/" className="font-['Inter'] text-sm tracking-tight hover:opacity-60 transition-opacity">
        Studio Name
      </Link>
      <div className="flex gap-8 font-['Inter'] text-sm">
        <Link
          to="/"
          className={`hover:opacity-60 transition-opacity ${
            isActive('/') ? 'opacity-100' : 'opacity-40'
          }`}
        >
          Work
        </Link>
        <Link
          to="/studio"
          className={`hover:opacity-60 transition-opacity ${
            isActive('/studio') ? 'opacity-100' : 'opacity-40'
          }`}
        >
          Studio
        </Link>
        <Link
          to="/contact"
          className={`hover:opacity-60 transition-opacity ${
            isActive('/contact') ? 'opacity-100' : 'opacity-40'
          }`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
