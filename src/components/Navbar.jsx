import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Scissors, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, login, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Layanan', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'Barberman', path: '/barberman' },
    { name: 'Harga', path: '/pricing' },
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white shadow-lg fixed w-full top-0 z-50 gpu-accelerated"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-gold" />
            <span className="font-barlow font-bold text-2xl text-dark">
              Xo<span className="text-gold">Barber</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-dark hover:text-gold px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 smooth-hover"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth & CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
               <div className="relative user-menu-container">
                 <button
                   onClick={() => setShowUserMenu(!showUserMenu)}
                   className="flex items-center space-x-2 text-dark hover:text-gold transition-all duration-300 smooth-hover"
                 >
                   <User className="w-5 h-5" />
                   <span className="font-medium">{user?.name}</span>
                 </button>
                
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-smooth border border-gray-200 py-2 z-50"
                  >
                    <Link
                      to="/booking"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Booking Sekarang
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Keluar</span>
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="text-dark hover:text-gold font-medium transition-all duration-300 smooth-hover"
                >
                  Masuk
                </button>
                <Link
                  to="/booking"
                  className="bg-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 smooth-hover shadow-smooth"
                >
                  Booking Sekarang
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-gold focus:outline-none focus:text-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-dark hover:text-gold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Auth Section */}
          {isAuthenticated ? (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex items-center space-x-2 px-3 py-2 text-dark">
                <User className="w-5 h-5" />
                <span className="font-medium">{user?.name}</span>
              </div>
              <Link
                to="/booking"
                className="block w-full text-center bg-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Booking Sekarang
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="block w-full text-center text-red-600 hover:text-red-700 px-6 py-3 font-medium transition-colors duration-300 mt-2"
              >
                Keluar
              </button>
            </div>
          ) : (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button
                onClick={() => {
                  setIsAuthModalOpen(true);
                  setIsOpen(false);
                }}
                className="block w-full text-center text-dark hover:text-gold px-6 py-3 font-medium transition-colors duration-300"
              >
                Masuk
              </button>
              <Link
                to="/booking"
                className="block w-full text-center bg-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-2"
                onClick={() => setIsOpen(false)}
              >
                Booking Sekarang
              </Link>
            </div>
          )}
        </div>
      </motion.div>
      </motion.nav>
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={login}
      />
    </>
  );
};

export default Navbar;