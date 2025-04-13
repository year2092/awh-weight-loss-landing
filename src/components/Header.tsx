
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-accent">AWH</h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-accent hidden sm:inline-block">
            Contact Us
          </a>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href="#faqs">FAQs</a>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent-dark">
            <a href="#cta">Free Consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
