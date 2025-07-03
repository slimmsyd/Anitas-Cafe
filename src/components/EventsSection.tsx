import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const events = [
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    title: 'Sculpture, Today',
    cta: 'DISCOVER THE EXHIBITION',
    ctaHref: '#',
  },
  {
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    title: 'Summer 2025 Collections',
    cta: 'EXPLORE THE BEST ART OF THE SEASON',
    ctaHref: '#',
    badge: 'Summer 2025 Collections',
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    title: 'The Other Art Fair Returns Soon',
    cta: 'FIND A FAIR NEAR YOU',
    ctaHref: '#',
    badge: 'Art Reframed',
  },
];

const EventsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Art You Love From the World's Leading Online Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, idx) => (
            <Card key={idx} className="flex flex-col h-full items-center bg-white border-0 shadow-none">
              <CardHeader className="p-0 mb-4 w-full flex flex-col items-center">
                <div className="w-full aspect-square bg-gray-200 rounded-none overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="object-cover w-full h-full" />
                  {event.badge && (
                    <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-semibold">
                      {event.badge}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center w-full">
                <h3 className="text-xl font-medium text-gray-900 mb-2 text-center">{event.title}</h3>
                <a href={event.ctaHref} className="mt-2 text-base font-bold text-gray-900 underline hover:text-amber-900 text-center block">
                  {event.cta}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 