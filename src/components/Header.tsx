
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-white/95' : 'bg-white/80'} backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-accent">AWH</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-accent">
            Our Approach
          </a>
          <a href="#solution" className="text-sm font-medium text-gray-600 hover:text-accent">
            Benefits
          </a>
          <a href="#why-us" className="text-sm font-medium text-gray-600 hover:text-accent">
            Why Choose Us
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-accent">
            Testimonials
          </a>
          <a href="#faqs" className="text-sm font-medium text-gray-600 hover:text-accent hover:underline">
            FAQs
          </a>
          <Button asChild className="bg-accent hover:bg-accent-dark">
            <a href="#cta">Free Consultation</a>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-3 px-4 animate-slide-up">
          <nav className="flex flex-col space-y-3">
            <a href="#problem" className="text-gray-600 hover:text-accent py-2" onClick={() => setMobileMenuOpen(false)}>
              Our Approach
            </a>
            <a href="#solution" className="text-gray-600 hover:text-accent py-2" onClick={() => setMobileMenuOpen(false)}>
              Benefits
            </a>
            <a href="#why-us" className="text-gray-600 hover:text-accent py-2" onClick={() => setMobileMenuOpen(false)}>
              Why Choose Us
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-accent py-2" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faqs" className="text-gray-600 hover:text-accent py-2" onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </a>
            <Button asChild className="bg-accent hover:bg-accent-dark w-full mt-2">
              <a href="#cta" onClick={() => setMobileMenuOpen(false)}>Free Consultation</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
