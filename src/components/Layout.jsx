import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, LinkComponent }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar LinkComponent={LinkComponent} />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}
