// src/pages/Home.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome to PLP App</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className={`p-6 rounded-lg shadow-lg transition-colors duration-200 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className="text-2xl font-semibold mb-3">📝 Tasks</h2>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Manage your daily tasks with our intuitive task manager. Add, complete, and track your progress.
            </p>
          </div>

          <div className={`p-6 rounded-lg shadow-lg transition-colors duration-200 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className="text-2xl font-semibold mb-3">📰 Posts</h2>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore posts from JSONPlaceholder API with search, pagination, and dark mode support.
            </p>
          </div>

          <div className={`p-6 rounded-lg shadow-lg transition-colors duration-200 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h2 className="text-2xl font-semibold mb-3">🎨 Themes</h2>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Switch between light and dark modes with our theme switcher for comfortable viewing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
