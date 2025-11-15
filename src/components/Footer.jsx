// src/components/Footer.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-6 transition-colors duration-200 ${
      theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-2">&copy; 2024 PLP Task Manager. All rights reserved.</p>
        <p className="text-sm">
          Built with React, Tailwind CSS, and ❤️
        </p>
      </div>
    </footer>
  );
}
