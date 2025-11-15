// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`p-4 flex justify-between items-center shadow-md transition-colors duration-200 ${
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
    }`}>
      <div className="space-x-4">
        <Link 
          to="/" 
          className="hover:underline font-medium"
        >
          Home
        </Link>
        <Link 
          to="/tasks" 
          className="hover:underline font-medium"
        >
          Tasks
        </Link>
        <Link 
          to="/posts" 
          className="hover:underline font-medium"
        >
          Posts
        </Link>
      </div>
      
      <button 
        onClick={toggleTheme} 
        className={`px-4 py-2 rounded transition-colors duration-200 font-medium ${
          theme === 'dark' 
            ? 'bg-gray-700 hover:bg-gray-600 text-white' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        }`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
      </button>
    </nav>
  );
}
