'use client';

import { usePathname } from 'next/navigation';
import NavLinks from './navlinks';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">

 {/* Desktop Navbar */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-2 py-2 shadow-lg hidden md:flex">
        <ul className="flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLinks
              key={item.label}
              label={item.label}
              href={item.href}
              isActive={pathname === item.href}
            />
          ))}
      </ul>
      </div>


    </nav>
  );
};

export default Navbar;