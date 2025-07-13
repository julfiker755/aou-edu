import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-center md:text-left">
          © 2025 Arabic Open University. All Rights Reserved.
        </p>
        <nav className="flex items-center gap-6">
          <Link
            href="#"
            className="underline hover:text-gray-200 transition-colors duration-200"
          >
            Academic Calendar
          </Link>
          <Link
            href="#"
            className="underline hover:text-gray-200 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}
