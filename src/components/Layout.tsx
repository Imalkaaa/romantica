import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { createGeneralWhatsAppUrl } from '../utils/whatsapp';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Gifts', path: '/gifts' },
    { name: 'Pencil Arts', path: '/pencil-arts' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-200 to-rose-300 p-2 rounded-full">
                <Heart className="h-6 w-6 text-pink-600 fill-current" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Romantica
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-pink-600 ${
                    location.pathname === item.path
                      ? 'text-pink-600 border-b-2 border-pink-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t border-pink-100">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'text-pink-600 bg-pink-50'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-pink-200 to-rose-300 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-pink-600 fill-current" />
                </div>
                <span className="text-xl font-bold text-gray-800">Romantica</span>
              </div>
              <p className="text-gray-600">
                Creating beautiful memories with handcrafted gifts, personalized art, and elegant accessories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p>Email: hello@romantica.lk</p>
                <p>WhatsApp: +94 70 123 4567</p>
                <p>Follow us on social media</p>
              </div>
            </div>
          </div>
          <div className="border-t border-pink-100 pt-8 mt-8 text-center text-gray-600">
            <p>&copy; 2025 Romantica.lk. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={createGeneralWhatsAppUrl("Hi! I'm browsing Romantica.lk and would like to know more about your products.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Layout;