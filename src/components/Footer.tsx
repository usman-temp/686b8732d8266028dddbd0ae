'use client';

import { FiInstagram, FiYoutube, FiPinterest, FiTrello } from 'react-icons/fi';

export default function Footer() {
  const socialLinks = [
    { icon: <FiInstagram />, url: '#' },
    { icon: <FiYoutube />, url: '#' },
    { icon: <FiPinterest />, url: '#' },
    { icon: <FiTrello />, url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex gap-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-2xl hover:text-orange-500 transition-colors"
                aria-label="Social media link"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <label className="switch">
              <input type="checkbox" className="hidden" />
              <div className="w-12 h-6 bg-gray-700 rounded-full p-1 cursor-pointer">
                <div className="bg-white w-4 h-4 rounded-full toggle-dot"></div>
              </div>
            </label>
            <span className="text-sm">Dark Mode</span>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Culinary Canvas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}