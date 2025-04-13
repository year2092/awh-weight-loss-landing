
import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="section-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AWH</h3>
            <p className="text-gray-300 mb-4">
              Doctor-guided weight management solutions that help you achieve lasting results through personalized care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#solution" className="text-gray-300 hover:text-white transition-colors">Our Solutions</a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Why Choose AWH</a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-300 hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#cta" className="text-gray-300 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span className="text-gray-300">contact@awh-health.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} AWH Health. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
