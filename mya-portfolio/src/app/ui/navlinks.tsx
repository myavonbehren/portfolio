'use client';

import Link from 'next/link';
import clsx from 'clsx';

interface NavLinksProps {
    label: string;
    href: string;
    isActive: boolean;
}

const NavLinks = ({ label, href, isActive }: NavLinksProps) => {
    return (
      <Link
        href={href}
        className={clsx(
          // Base styles - equal width container
          'relative px-6 py-3 rounded-full transition-all duration-300 ease-in-out',
          'font-medium whitespace-nowrap min-w-[100px] flex items-center justify-center',
          'focus:outline-none focus:ring-2 focus:ring-white/30',
          'hidden md:flex',
          
          // Active state - pill container with glassmorphism
          isActive && [
            'bg-white/20 text-black shadow-lg',
            'backdrop-blur-sm',
            'transform scale-105'
          ],
          
          // Inactive state
          !isActive && [
            'text-black/70 hover:text-white/90',
            'hover:bg-white/10 hover:backdrop-blur-sm',
            'hover:scale-102'
          ]
        )}
      >
        <span className="relative z-10">{label}</span>
        
      </Link>
    );
  };
  
  export default NavLinks;