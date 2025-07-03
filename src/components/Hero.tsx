import React, { useState, useEffect } from 'react';
import NewsletterModal from './NewsletterModal';

const Hero = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  useEffect(() => {
    // Check if user has seen the newsletter modal before
    const hasSeenNewsletter = localStorage.getItem('anitas-newsletter-seen');
    
    if (!hasSeenNewsletter) {
      // Show modal after 3 seconds for better UX
      const timer = setTimeout(() => {
        setShowNewsletterModal(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseNewsletter = () => {
    setShowNewsletterModal(false);
    // Mark as seen so it doesn't show again
    localStorage.setItem('anitas-newsletter-seen', 'true');
  };

  return (
    <>
      <section className="relative min-h-screen flex items-end justify-end overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url('/Anita_Home.jpeg')`
          }}
        />
        
        {/* Quote positioned bottom right */}
        <div className="relative z-10 p-12 lg:p-16 max-w-2xl text-right">
          <blockquote className="text-white font-serif text-2xl lg:text-4xl leading-relaxed font-normal">
            "Great coffee and sweet moments make life's perfect blend."
          </blockquote>
          <cite className="block text-white font-serif text-lg lg:text-xl mt-4 not-italic tracking-wider">
            — Anita's FXB Philosophy
          </cite>
        </div>
      </section>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={showNewsletterModal} 
        onClose={handleCloseNewsletter} 
      />
    </>
  );
};

export default Hero;
