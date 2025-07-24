import { Link } from 'react-router-dom';
import { Scissors, MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-gold" />
              <span className="font-barlow font-bold text-2xl">
                Xo<span className="text-gold">Barber</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Barbershop kekinian yang menghadirkan pengalaman grooming terbaik dengan layanan profesional dan suasana yang nyaman.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/xobarber"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-yellow-600 p-3 rounded-full transition-all duration-300 smooth-hover"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-yellow-600 p-3 rounded-full transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-all duration-300 smooth-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/barberman" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Barberman
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  Harga
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat, 10220
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-gray-300 text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Senin - Sabtu: 09:00 - 21:00</div>
                  <div>Minggu: 10:00 - 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 XoBarber. All rights reserved. Made with ❤️ for modern gentlemen.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;