'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded bg-customGreen px-2 py-1 text-sm text-white transition-colors hover:bg-green-700 md:px-4 md:py-2 md:text-base ${className}`}
    >
      {children}
    </button>
  );
};
