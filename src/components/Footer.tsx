import React, { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import NewsletterModal from './NewsletterModal';
import BookEventModal from './BookEventModal';

const Footer = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const [showBookEventModal, setShowBookEventModal] = useState(false);

  const handleOpenNewsletter = () => {
    setShowNewsletterModal(true);
  };

  const handleCloseNewsletter = () => {
    setShowNewsletterModal(false);
  };

  const handleOpenBookEvent = () => {
    setShowBookEventModal(true);
  };

  const handleCloseBookEvent = () => {
    setShowBookEventModal(false);
  };

  return (
    <>
      <footer className="bg-neutral-900 text-neutral-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Philosophy & Brand */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl font-normal text-neutral-100 mb-6 tracking-tight">
                  Anita's FXB Cafe and Dessert Bar
                </h3>
                <div className="w-16 h-[1px] bg-neutral-600 mb-6" />
                <p className="font-serif text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  "A downtown coffee shop and dessert bar where quality meets community. 
                  We believe in exceptional coffee, delicious desserts, and creating a welcoming space 
                  where neighbors become friends and every visit feels like coming home."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-neutral-100 tracking-wide">Visit Us</h4>
                  <div className="space-y-2 text-neutral-300 font-serif">
                    <p>620 Caroline St</p>
                    <p>Fredericksburg, VA 22401</p>
                    <p className="pt-2">hello@anitasfxbg.com</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-serif text-lg text-neutral-100 tracking-wide">Hours of Operation</h4>
                  <div className="space-y-2 text-neutral-300 font-serif text-sm">
                    <div>
                      <p>Monday – Thursday</p>
                      <p>7:00 AM — 9:00 PM</p>
                    </div>
                    <div className="pt-2">
                      <p>Friday – Saturday</p>
                      <p>7:00 AM — 10:00 PM</p>
                    </div>
                    <div className="pt-2">
                      <p>Sunday</p>
                      <p>8:00 AM — 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connection & Community */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h4 className="font-serif text-lg text-neutral-100 tracking-wide">Join Our Community</h4>
                <p className="font-serif text-neutral-300 leading-relaxed text-sm">
                  Your neighborhood coffee shop and dessert bar offering freshly brewed coffee, 
                  handcrafted desserts, and a warm community atmosphere in the heart of downtown Fredericksburg.
                </p>
                
                {/* Newsletter Signup Button */}
                <div className="pt-2">
                  <button
                    onClick={handleOpenNewsletter}
                    className="w-full bg-neutral-700 hover:bg-neutral-600 text-neutral-100 font-serif text-sm px-6 py-3 border border-neutral-600 hover:border-neutral-500 transition-all duration-300 tracking-wide"
                  >
                    Get Updates from Anita's
                  </button>
                  <p className="text-xs font-serif text-neutral-400 mt-2 leading-relaxed">
                    Get updates on new menu items, events, and special offers
                  </p>
                </div>
                
                <div className="space-y-4 pt-4">
                  <a 
                    href="/menu" 
                    className="block font-serif text-neutral-100 hover:text-neutral-300 border-b border-neutral-600 hover:border-neutral-400 transition-all duration-300 pb-1 tracking-wide"
                  >
                    View Our Menu
                  </a>
                  <a 
                    href="/events" 
                    className="block font-serif text-neutral-100 hover:text-neutral-300 border-b border-neutral-600 hover:border-neutral-400 transition-all duration-300 pb-1 tracking-wide"
                  >
                    Current Events
                  </a>
                  <a 
                    href="/team" 
                    className="block font-serif text-neutral-100 hover:text-neutral-300 border-b border-neutral-600 hover:border-neutral-400 transition-all duration-300 pb-1 tracking-wide"
                  >
                    Our Team
                  </a>
                </div>
              </div>
              
              <div className="pt-8 border-t border-neutral-700">
                <div className="space-y-4">
                  <h5 className="font-serif text-neutral-300 text-sm tracking-wider">CONNECT</h5>
                  
                  {/* Social Media Icons */}
                  <div className="flex space-x-4 mb-4">
                    <a 
                      href="#" 
                      className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={handleOpenBookEvent}
                      className="block font-serif text-neutral-400 hover:text-neutral-100 transition-colors duration-300 text-sm text-left border-b border-neutral-600 hover:border-neutral-400 pb-1"
                    >
                      Event Inquiries
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-neutral-700 mt-12 lg:mt-16 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <p className="font-serif text-neutral-400 text-sm">
                © 2024 Anita's FXB Cafe and Dessert Bar — Proudly serving Fredericksburg, Virginia
              </p>
              <div className="flex space-x-8">
                <a href="/privacy" className="font-serif text-neutral-400 hover:text-neutral-100 text-sm transition-colors duration-300">
                  Privacy
                </a>
                <a href="/terms" className="font-serif text-neutral-400 hover:text-neutral-100 text-sm transition-colors duration-300">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={handleCloseNewsletter} 
      />

      {/* Book Event Modal */}
      <BookEventModal 
        isOpen={showBookEventModal} 
        onClose={handleCloseBookEvent} 
      />
    </>
  );
};

export default Footer;
