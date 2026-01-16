import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">🐱 CatShop</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your trusted online shop for healthy, adorable cats. Find your
            perfect feline companion today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-white">
                Items
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm">📧 support@catshop.com</p>
          <p className="text-sm mt-1">📞 +880 1234-567890</p>
          <p className="text-sm mt-1">📍 Bangladesh</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} CatShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
