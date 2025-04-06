
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Pill } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <Pill className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">SkinPatchPal</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            How it Works
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Skin Conditions
          </Link>
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Button>Start Free Test</Button>
        </nav>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-1 md:hidden bg-background">
            <nav className="grid grid-flow-row auto-rows-max text-center">
              <Link 
                to="/"
                className="flex items-center justify-center py-4 text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/"
                className="flex items-center justify-center py-4 text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                to="/"
                className="flex items-center justify-center py-4 text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Skin Conditions
              </Link>
              <Link 
                to="/"
                className="flex items-center justify-center py-4 text-lg font-medium transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="flex justify-center pt-6">
                <Button onClick={() => setIsOpen(false)}>Start Free Test</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
