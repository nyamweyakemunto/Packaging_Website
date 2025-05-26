import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container-custom flex justify-between items-center py-4">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/d68fe22e-de0a-450f-8251-a59045cc9c1a.png" 
            alt="Boma Packaging Logo" 
            className="h-10 w-auto"
          />
          <span className="font-heading font-bold text-xl text-primary">Boma Packaging</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="font-medium text-gray-600 hover:text-primary transition-colors">Services</a>
          <a href="#about" className="font-medium text-gray-600 hover:text-primary transition-colors">About Us</a>
          <a href="#contact" className="font-medium text-gray-600 hover:text-primary transition-colors">Contact</a>
          <Button className="bg-primary hover:bg-primary-light">Get a Quote</Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden animate-fade-in">
            <nav className="flex flex-col p-4">
              <a 
                href="#services" 
                className="py-3 px-4 font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="py-3 px-4 font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="py-3 px-4 font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="mt-4 bg-primary hover:bg-primary-light w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
