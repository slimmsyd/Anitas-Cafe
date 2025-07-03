import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Define which routes should have dark text/logo
  const darkTextRoutes = ['/team', '/menu', '/events'];
  
  const navItems = [
    { name: 'MENU', href: '/menu' },
    { name: 'ORDER ONLINE', href: '/events' },
    { name: 'TEAM', href: '/team' },
    { name: 'NEWS', href: '#news' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links for same page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
    // React Router Links will handle page navigation automatically
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  // Determine if current route should use dark text/logo
  const shouldUseDarkText = darkTextRoutes.includes(currentPath);
  
  // Dynamic text color classes
  const textColorClass = shouldUseDarkText ? 'text-neutral-900' : 'text-white';
  const hoverColorClass = shouldUseDarkText ? 'hover:text-neutral-600' : 'hover:opacity-70';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isMobileMenuOpen ? 'bg-black/20 backdrop-blur-none' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Brand Name */}
            <div className="flex-shrink-0">
              <Link 
                to="/"
                className="flex items-center space-x-3 hover:opacity-70 transition-opacity duration-200"
              >
                <img
                  src="/anitas-cafe-logo.png"
                  alt="Anita's FXB Cafe and Dessert Bar"
                  className={`h-7 w-auto transition-all duration-200 ${
                    shouldUseDarkText 
                      ? 'brightness-0' // Makes it black on light backgrounds
                      : 'brightness-0 invert' // Makes it white on dark backgrounds
                  }`}
                />
                <span className={`text-xs font-serif tracking-[0.2em] font-normal transition-colors duration-200 ${textColorClass} hidden sm:block`}>
                  ANITA'S FXB CAFE
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`font-serif text-xs tracking-[0.15em] font-normal transition-colors duration-200 bg-transparent border-none cursor-pointer ${textColorClass} ${hoverColorClass}`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-serif text-xs tracking-[0.15em] font-normal transition-colors duration-200 ${textColorClass} ${hoverColorClass}`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 transition-colors duration-200 ${textColorClass} ${hoverColorClass}`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Background Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-neutral-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left font-serif text-base tracking-[0.15em] font-normal text-neutral-900 hover:text-neutral-600 transition-colors duration-200 py-2 bg-transparent border-none cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-serif text-base tracking-[0.15em] font-normal text-neutral-900 hover:text-neutral-600 transition-colors duration-200 py-2"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                
                {/* Mobile-specific content */}
                <div className="pt-6 border-t border-neutral-200">
                  <p className="font-serif text-sm text-neutral-600 leading-relaxed">
                    Your neighborhood coffee shop and dessert bar in downtown Fredericksburg.
                  </p>
                  <div className="mt-4 space-y-2 text-sm font-serif text-neutral-500">
                    <p>620 Caroline St</p>
                    <p>Fredericksburg, Virginia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
