import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
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

  // Animation variants for nav links
  const linkVariants = {
    hover: {
      scale: 1.1,
      color: '#db2777',
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    active: {
      scale: 1.05,
      color: '#db2777',
      borderBottomWidth: '2px',
      borderBottomColor: '#db2777'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div 
                className="bg-gradient-to-r from-pink-200 to-rose-300 p-3 rounded-full shadow-md group-hover:shadow-xl group-hover:shadow-pink-300/50 transition-all duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Heart className="h-7 w-7 text-pink-600 fill-current" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
                Romantica
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 items-center">
              {navigation.map((item) => (
                <motion.div
                  key={item.path}
                  variants={linkVariants}
                  whileHover="hover"
                  animate={location.pathname === item.path ? 'active' : ''}
                >
                  <Link
                    to={item.path}
                    className="font-medium text-gray-800 text-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {/* Cart Icon */}
              <Link
                to="/cart"
                className="relative group"
                aria-label="View Cart"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ShoppingCart className="h-6 w-6 text-pink-600" />
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </motion.div>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-pink-100/30 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t border-pink-100/50 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-medium px-4 py-3 rounded-lg transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-pink-600 bg-pink-50/50'
                        : 'text-gray-800 hover:text-pink-600 hover:bg-pink-50/30'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/cart"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-gray-800 hover:text-pink-600 hover:bg-pink-50/30 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Cart
                </Link>
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