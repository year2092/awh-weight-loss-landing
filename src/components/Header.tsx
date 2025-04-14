
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md' : 'bg-white/80 shadow-sm'}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-accent">AWH</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-accent transition-colors">
            Contact Us
          </a>
          <Button asChild variant="outline" className="hover:bg-accent/10">
            <a href="#faqs">FAQs</a>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent-dark transition-all duration-200">
            <a href="#cta">Free Consultation</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-gray-600 hover:text-accent focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden bg-white absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100 py-3' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-3 px-4">
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-accent py-2 transition-colors">
            Contact Us
          </a>
          <a href="#faqs" className="text-sm font-medium text-gray-600 hover:text-accent py-2 transition-colors">
            FAQs
          </a>
          <Button asChild className="bg-accent hover:bg-accent-dark w-full mt-2 transition-all duration-200">
            <a href="#cta">Free Consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
