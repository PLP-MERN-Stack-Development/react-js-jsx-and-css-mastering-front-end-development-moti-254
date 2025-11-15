import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Card({ title, children, className = '' }) {
  const { theme } = useTheme();

  return (
    <div className={`shadow-md rounded-xl p-4 mb-4 transition-colors duration-200 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    } ${className}`}>
      {title && (
        <h2 className={`text-xl font-semibold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
