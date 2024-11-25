'use client';

import React from 'react';
import { InstagramIcon } from '@/app/components/ui/icons/InstagramIcon';
import { FacebookIcon } from '@/app/components/ui/icons/FacebookIcon';
import { navLinks } from '@/app/data/links';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full bg-gray-900 py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row">
        <ul className="mb-4 flex space-x-4 sm:mb-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-base transition-colors hover:text-customGreen"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <FacebookIcon className="h-6 w-6 fill-white transition-colors hover:fill-customGreen" />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramIcon className="h-6 w-6 fill-white transition-colors hover:fill-customGreen" />
          </a>
        </div>
      </div>
    </footer>
  );
};
