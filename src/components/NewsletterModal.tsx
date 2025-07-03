import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your newsletter service
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-4xl p-0 overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Image Section - Hidden on mobile */}
          <div className="hidden lg:block relative bg-neutral-50 flex items-center justify-center">
            <div className="p-12 flex flex-col items-center justify-center h-full">
              <img
                src="/anitas-cafe-logo.png"
                alt="Anita's FXB Cafe and Dessert Bar"
                className="h-8 w-auto mx-auto mb-4"
              />
              <h2 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-4 text-center">
                Anita's FXB Cafe and Dessert Bar
              </h2>
              <div className="text-center space-y-4">
                <p className="text-base font-serif text-neutral-600 leading-relaxed max-w-xs">
                  Your neighborhood coffee shop and dessert bar in downtown Fredericksburg.
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <ModalHeader className="text-left mb-8">
              <ModalTitle className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 leading-tight mb-4">
                Join Our Community
              </ModalTitle>
              <ModalDescription className="text-lg font-serif text-neutral-600 leading-relaxed">
                "Stay connected with updates on new menu items, seasonal desserts, special offers, and community events at your neighborhood café."
              </ModalDescription>
            </ModalHeader>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-serif text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full font-serif text-base border-neutral-300 focus:border-neutral-900 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-700 text-white font-serif text-base lg:text-lg py-3 px-6 transition-colors duration-200"
                  >
                    Stay Connected
                  </Button>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={onClose}
                    className="w-full text-neutral-600 hover:text-neutral-900 font-serif text-base border border-neutral-300 hover:border-neutral-500 py-3 px-6 transition-colors duration-200"
                  >
                    Maybe Later
                  </Button>
                </div>

                <div className="pt-4 border-t border-neutral-200" style={{ borderWidth: '0.5px' }}>
                  <p className="text-xs font-serif text-neutral-500 leading-relaxed">
                    We'll share updates about new menu items, seasonal desserts, special offers, and community events. 
                    Unsubscribe anytime. We respect your inbox.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="text-2xl lg:text-3xl font-serif text-neutral-900 mb-4">
                  Welcome to Our Community
                </div>
                <p className="text-lg font-serif text-neutral-600 leading-relaxed">
                  Thank you for joining us. We look forward to sharing delicious updates and community news with you.
                </p>
              </div>
            )}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default NewsletterModal; 