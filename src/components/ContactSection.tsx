
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Rua das Flores, 123\nCentro, Curitiba - PR\n80010-010"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+55 (41) 3333-4444"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "hello@curitibaartcafe.com"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday - Friday: 7:00 AM - 10:00 PM\nSaturday - Sunday: 8:00 AM - 11:00 PM"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Visit Us</h2>
          <p className="text-gray-600 text-lg">
            Come experience where art meets coffee in the heart of Curitiba
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-amber-900" />
                  </div>
                  <CardTitle className="text-xl text-amber-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-0">
              <div 
                className="h-64 bg-gray-300 rounded-lg flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Find Us</h3>
                  <p className="text-gray-700">Located in the vibrant centro of Curitiba</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
