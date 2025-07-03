import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface BookEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  eventTitle: string;
  eventType: string;
  description: string;
  expectedAttendees: string;
  preferredDate: string;
  preferredTime: string;
  duration: string;
  additionalRequests: string;
}

const BookEventModal: React.FC<BookEventModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    eventTitle: '',
    eventType: '',
    description: '',
    expectedAttendees: '',
    preferredDate: '',
    preferredTime: '',
    duration: '',
    additionalRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Workshop',
    'Art Exhibition',
    'Corporate Event',
    'Book Club',
    'Coffee Cupping',
    'Artist Talk',
    'Community Gathering',
    'Private Party',
    'Other'
  ];

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body with all form data
    const emailBody = `
Event Booking Request from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Organization: ${formData.organization || 'Individual'}

Event Details:
- Event Title: ${formData.eventTitle}
- Event Type: ${formData.eventType}
- Description: ${formData.description}
- Expected Attendees: ${formData.expectedAttendees}
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime}
- Duration: ${formData.duration}

Additional Requests:
${formData.additionalRequests || 'None'}

Please contact me to discuss this event booking opportunity.

Best regards,
${formData.name}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:hello@anitasfxbg.com?subject=Event Booking Request - ${formData.eventTitle}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        eventTitle: '',
        eventType: '',
        description: '',
        expectedAttendees: '',
        preferredDate: '',
        preferredTime: '',
        duration: '',
        additionalRequests: ''
      });
    }, 2000);
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image Section - Hidden on mobile */}
          <div className="hidden lg:block relative">
            <img
              src="https://source.unsplash.com/600x800/?event,cafe,space"
              alt="Anita's FXB Cafe and Dessert Bar event space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </div>
          
          {/* Content Section */}
          <div className="p-8 lg:p-12 flex flex-col">
            <ModalHeader className="text-left mb-8">
              <ModalTitle className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 leading-tight mb-4">
                Book Your Event
              </ModalTitle>
              <ModalDescription className="text-lg font-serif text-neutral-600 leading-relaxed">
                "Share your vision with us, and we'll help create a gathering that honors both your purpose and our commitment to artistic community."
              </ModalDescription>
            </ModalHeader>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-neutral-900 border-b border-neutral-200 pb-2" style={{ borderWidth: '0.5px' }}>
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your name"
                        required
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Organization
                      </label>
                      <Input
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                        placeholder="Company or group name"
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-neutral-900 border-b border-neutral-200 pb-2" style={{ borderWidth: '0.5px' }}>
                    Event Details
                  </h3>
                  <div>
                    <label className="block text-sm font-serif text-neutral-700 mb-2">
                      Event Title *
                    </label>
                    <Input
                      value={formData.eventTitle}
                      onChange={(e) => handleInputChange('eventTitle', e.target.value)}
                      placeholder="Name of your event"
                      required
                      className="font-serif border-neutral-300 focus:border-neutral-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-serif text-neutral-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => handleInputChange('eventType', e.target.value)}
                      required
                      className="w-full font-serif text-base border border-neutral-300 rounded-md px-3 py-2 focus:border-neutral-900 focus:ring-neutral-900"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-serif text-neutral-700 mb-2">
                      Event Description *
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your event, its purpose, and what you hope to achieve..."
                      required
                      rows={3}
                      className="font-serif border-neutral-300 focus:border-neutral-900 resize-none"
                    />
                  </div>
                </div>

                {/* Logistics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-neutral-900 border-b border-neutral-200 pb-2" style={{ borderWidth: '0.5px' }}>
                    Event Logistics
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Expected Attendees *
                      </label>
                      <Input
                        value={formData.expectedAttendees}
                        onChange={(e) => handleInputChange('expectedAttendees', e.target.value)}
                        placeholder="e.g., 15-20 people"
                        required
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Duration
                      </label>
                      <Input
                        value={formData.duration}
                        onChange={(e) => handleInputChange('duration', e.target.value)}
                        placeholder="e.g., 2 hours"
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Preferred Date
                      </label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif text-neutral-700 mb-2">
                        Preferred Time
                      </label>
                      <Input
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        placeholder="e.g., 6:00 PM - 8:00 PM"
                        className="font-serif border-neutral-300 focus:border-neutral-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Requests */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-serif text-neutral-700 mb-2">
                      Additional Requests or Questions
                    </label>
                    <Textarea
                      value={formData.additionalRequests}
                      onChange={(e) => handleInputChange('additionalRequests', e.target.value)}
                      placeholder="Any special requirements, catering needs, equipment requests, or questions..."
                      rows={2}
                      className="font-serif border-neutral-300 focus:border-neutral-900 resize-none"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-neutral-900 hover:bg-neutral-700 text-white font-serif text-base lg:text-lg py-3 px-6 transition-colors duration-200"
                  >
                    Submit Event Request
                  </Button>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={onClose}
                    className="w-full text-neutral-600 hover:text-neutral-900 font-serif text-base border border-neutral-300 hover:border-neutral-500 py-3 px-6 transition-colors duration-200"
                  >
                    Cancel
                  </Button>
                </div>

                <div className="pt-4 border-t border-neutral-200" style={{ borderWidth: '0.5px' }}>
                  <p className="text-xs font-serif text-neutral-500 leading-relaxed">
                    We'll review your request and respond within 2-3 business days. Our team will work with you to ensure your event aligns with our community values and space capabilities.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-4 flex-1 flex flex-col justify-center">
                <div className="text-2xl lg:text-3xl font-serif text-neutral-900 mb-4">
                  Request Submitted
                </div>
                <p className="text-lg font-serif text-neutral-600 leading-relaxed">
                  Thank you for your interest in hosting an event at Anita's FXB Cafe and Dessert Bar. We'll be in touch soon to discuss your vision.
                </p>
              </div>
            )}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default BookEventModal; 