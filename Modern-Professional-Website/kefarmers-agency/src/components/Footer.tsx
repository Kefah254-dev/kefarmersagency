import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">KEFARMERS AGENCY LTD</h3>
            <p className="text-green-100 mb-4">
              Pioneering a New Era in Agriculture in Kenya
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-green-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-green-100 hover:text-white transition-colors">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-green-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-green-100 hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-green-100">Affordable Input Supply</li>
              <li className="text-green-100">Agricultural Training</li>
              <li className="text-green-100">Market Access & Logistics</li>
              <li className="text-green-100">Technology Integration</li>
              <li className="text-green-100">Financial Empowerment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-green-100">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-green-100">+254 700 000000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-300" />
                <a href="mailto:kefarmersagency@gmail.com" className="text-green-100 hover:text-white transition-colors">
                  kefarmersagency@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-6">
          <p className="text-center text-green-200 text-sm">
            &copy; {new Date().getFullYear()} KEFARMERS AGENCY LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
