'use client';

import React, { useEffect, useState } from 'react';
import { navLinks } from '@/app/data/links';
import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsExpanded(prev => !prev);
  };

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  return (
    <header className="w-full bg-gray-100 p-4 text-white">
      <div className="container relative mx-auto flex items-center justify-between md:px-4">
        <Link
          href="/"
          className="text-xl font-bold text-black"
          aria-label="Link to home page"
        >
          DemoLand
        </Link>

        <button
          id="menu-toggle"
          className="block text-gray-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isExpanded}
          onClick={toggleMenu}
          aria-controls="menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav
          id="menu"
          className={`absolute left-1/2 top-8 -translate-x-1/2 rounded-md bg-gray-100 px-4 py-2 drop-shadow-md md:relative md:left-0 md:top-0 md:block md:translate-x-0 md:bg-none md:drop-shadow-none ${
            isExpanded ? 'block' : 'hidden'
          }`}
          aria-label="Primary navigation"
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-black transition-colors hover:text-customGreen"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button onClick={() => alert('Button clicked!')}>Get Started</Button>
      </div>
    </header>
  );
};
