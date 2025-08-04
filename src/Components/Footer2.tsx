
import React from 'react';
import Socials from './Socials';
import { useTheme } from "../Context/ThemeContext"; // Make sure path is correct
import clsx from "clsx";
import { themeStyles } from "../utils/ThemeClasses";

const Footer: React.FC = () => {
    const { theme } = useTheme();
    const current = themeStyles[theme];
  return (
    <footer className={clsx("border-t", current.bg)}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-25 mb-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className={clsx("text-xl font-medium mb-4", current.text)}>iShop</h3>
          <p className={clsx("text-sm", current.text)}>
            Your trusted online shopping destination for quality products at great prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={clsx("text-sm font-semibold uppercase tracking-wide mb-4", current.text)}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>About Us</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Contact</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>FAQ</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Shipping</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className={clsx("text-sm font-semibold uppercase tracking-wide mb-4", current.text)}>
            Customer Service
          </h4>
          <ul className="space-y-2">
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Returns</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Support</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Track Order</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Size Guide</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className={clsx("text-sm font-semibold uppercase tracking-wide mb-4", current.text)}>
            Legal
          </h4>
          <ul className="space-y-2">
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Privacy Policy</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Terms of Service</a></li>
            <li><a href="/" className={clsx("text-sm transition-colors", current.text)}>Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
        <p className={clsx("text-sm", current.text)}>© 2025 iShop. All rights reserved.</p>
        <Socials />
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;