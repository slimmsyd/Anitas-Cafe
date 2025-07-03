import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookEventModal from '@/components/BookEventModal';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'Workshop' | 'Exhibition' | 'Cupping' | 'Artist Talk' | 'Community';
  description: string;
  philosophy: string;
  image: string;
  capacity?: number;
  price?: string;
  featured?: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'The Alchemy of Single Origins',
    date: 'February 15, 2024',
    time: '2:00 PM - 4:00 PM',
    type: 'Cupping',
    description: 'An intimate exploration of Brazilian single-origin coffees, guided by our Master Roaster David Kim. Each cup tells the story of its terroir, its journey, and the hands that nurtured it.',
    philosophy: 'Coffee is geography made liquid. In this cupping, we honor the farmers, the soil, and the subtle variations that make each origin a unique expression of place.',
    image: 'https://source.unsplash.com/600x400/?coffee,cupping',
    capacity: 12,
    price: '$35',
    featured: true
  },
  {
    id: '2',
    title: 'Brushstrokes & Beans: Mixed Media Workshop',
    date: 'February 22, 2024',
    time: '6:00 PM - 8:30 PM',
    type: 'Workshop',
    description: 'Artist Elena Rosario guides participants in creating mixed-media pieces inspired by coffee\'s visual poetry. Using coffee grounds, watercolors, and contemplative mark-making.',
    philosophy: 'Art emerges from the marriage of intention and accident. Like coffee roasting, creation requires both precision and surrender to the moment.',
    image: 'https://source.unsplash.com/600x400/?art,workshop,painting',
    capacity: 8,
    price: '$45'
  },
  {
    id: '3',
    title: 'Voices from the Fazenda',
    date: 'March 1, 2024',
    time: '7:00 PM - 8:30 PM',
    type: 'Artist Talk',
    description: 'A conversation with photographer Maria Santos, whose work documents the daily rhythms and quiet dignity of Brazilian coffee farmers. Stories of tradition, change, and hope.',
    philosophy: 'Every photograph is an act of witness. Through Maria\'s lens, we see not just the process of coffee cultivation, but the humanity that infuses every bean.',
    image: 'https://source.unsplash.com/600x400/?photography,brazil,coffee',
    capacity: 25,
    price: 'Free'
  },
  {
    id: '4',
    title: 'Community Canvas: Collaborative Mural',
    date: 'March 8, 2024',
    time: '10:00 AM - 4:00 PM',
    type: 'Community',
    description: 'A day-long collaborative mural project where community members contribute to a large-scale artwork celebrating the diversity of our neighborhood and shared love of coffee culture.',
    philosophy: 'True art emerges from collective vision. Like the perfect espresso blend, beauty arises when individual elements harmonize to create something greater than the sum of its parts.',
    image: 'https://source.unsplash.com/600x400/?mural,community,art',
    capacity: 40,
    price: 'Free'
  },
  {
    id: '5',
    title: 'The Architecture of Flavor',
    date: 'March 15, 2024',
    time: '3:00 PM - 5:00 PM',
    type: 'Exhibition',
    description: 'Opening reception for Marcus Chen\'s latest installation exploring the structural relationships between coffee brewing methods and architectural forms.',
    philosophy: 'Both coffee and architecture are about creating spaces—one for flavor, one for living. Both require understanding of proportion, timing, and the careful orchestration of elements.',
    image: 'https://source.unsplash.com/600x400/?architecture,coffee,art',
    capacity: 50,
    price: 'Free'
  }
];

const Events = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [showBookEventModal, setShowBookEventModal] = useState(false);
  
  const eventTypes = ['All', 'Workshop', 'Exhibition', 'Cupping', 'Artist Talk', 'Community'];
  
  const filteredEvents = selectedType === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedType);

  const featuredEvent = upcomingEvents.find(event => event.featured);

  const handleOpenBookEvent = () => {
    setShowBookEventModal(true);
  };

  const handleCloseBookEvent = () => {
    setShowBookEventModal(false);
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-50">
        <Navigation />
        
        <main className="pt-24">
          {/* Header Section */}
          <section className="py-24 lg:py-32 bg-neutral-50 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/Event_header.png"
                alt="Event Header Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            
            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                              <div className="max-w-4xl">
                  <h1 className="text-4xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-tight mb-8">
                    Events & Gatherings
                  </h1>
                  <div className="text-lg lg:text-xl font-serif text-white/90 leading-relaxed mb-8 max-w-3xl">
                    "In the warmth of our gatherings, we find the heart of community. Each event is an invitation to slow down, to connect, to discover something new about coffee, desserts, or the person sitting beside you."
                  </div>
                  <div className="w-24 h-[1px] bg-white/30 mb-8" />
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button 
                      onClick={handleOpenBookEvent}
                      className="inline-block bg-white text-neutral-900 font-serif text-base lg:text-lg px-8 py-4 hover:bg-neutral-100 transition-colors duration-200 tracking-wide"
                    >
                      Book an Event
                    </button>
                    <span className="text-sm font-serif text-white/80 leading-relaxed">
                      Host your gathering in our contemplative space
                    </span>
                  </div>
              </div>
            </div>
          </section>

          {/* Featured Event */}
          {featuredEvent && (
            <section className="py-16 lg:py-24 bg-white">
              <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <span className="text-sm font-serif text-neutral-500 tracking-wider uppercase mb-4 block">
                      Featured Event
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-6 leading-tight">
                      {featuredEvent.title}
                    </h2>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-4 text-base font-serif text-neutral-600">
                        <span>{featuredEvent.date}</span>
                        <span>•</span>
                        <span>{featuredEvent.time}</span>
                      </div>
                      <div className="inline-block px-3 py-1 text-xs font-serif text-neutral-700 bg-neutral-100 border border-neutral-200" style={{ borderWidth: '0.5px' }}>
                        {featuredEvent.type}
                      </div>
                    </div>
                    <p className="text-lg font-serif text-neutral-700 leading-relaxed mb-6">
                      {featuredEvent.description}
                    </p>
                    <div className="text-base font-serif text-neutral-600 leading-relaxed mb-8 italic">
                      "{featuredEvent.philosophy}"
                    </div>
                    <div className="flex items-center space-x-6">
                      <span className="text-lg font-serif text-neutral-900">
                        {featuredEvent.price}
                      </span>
                      {featuredEvent.capacity && (
                        <span className="text-sm font-serif text-neutral-500">
                          Limited to {featuredEvent.capacity} participants
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="aspect-[4/5] bg-neutral-100 overflow-hidden">
                      <img
                        src={featuredEvent.image}
                        alt={featuredEvent.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Event Filter & List */}
          <section className="py-16 lg:py-24 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-8">
                  Upcoming Gatherings
                </h2>
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 text-sm font-serif border transition-colors duration-200 ${
                        selectedType === type
                          ? 'bg-neutral-900 text-white border-neutral-900'
                          : 'bg-transparent text-neutral-700 border-neutral-300 hover:border-neutral-500'
                      }`}
                      style={{ borderWidth: '0.5px' }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Events Grid */}
              <div className="grid gap-8 lg:gap-12">
                {filteredEvents.map((event, index) => (
                  <div key={event.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                    {/* Image */}
                    <div className="lg:col-span-1">
                      <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm font-serif text-neutral-500 tracking-wider">
                            {event.date}
                          </span>
                          <span className="text-sm font-serif text-neutral-400">•</span>
                          <span className="text-sm font-serif text-neutral-500">
                            {event.time}
                          </span>
                          <div className="inline-block px-2 py-1 text-xs font-serif text-neutral-600 bg-neutral-100 border border-neutral-200" style={{ borderWidth: '0.5px' }}>
                            {event.type}
                          </div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-4 leading-tight">
                          {event.title}
                        </h3>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="font-serif text-base lg:text-lg text-neutral-700 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="font-serif text-base text-neutral-600 leading-relaxed italic">
                          "{event.philosophy}"
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200" style={{ borderWidth: '0.5px' }}>
                        <div className="flex items-center space-x-6">
                          <span className="font-serif text-lg text-neutral-900">
                            {event.price}
                          </span>
                          {event.capacity && (
                            <span className="text-sm font-serif text-neutral-500">
                              {event.capacity} spots available
                            </span>
                          )}
                        </div>
                        <a 
                          href="mailto:hello@anitasfxbg.com"
                          className="font-serif text-base text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 hover:border-neutral-600 pb-1 transition-colors duration-200"
                        >
                          Reserve Your Place
                        </a>
                      </div>
                    </div>
                    
                    {/* Separator line for all but last */}
                    {index < filteredEvents.length - 1 && (
                      <div className="lg:col-span-3 mt-8 lg:mt-12 w-full h-[1px] bg-neutral-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-8">
                    Our Approach to Gathering
                  </h2>
                  <div className="space-y-6 font-serif text-lg text-neutral-600 leading-relaxed">
                    <p>
                      At Anita's FXB Cafe and Dessert Bar, events are not performances to be consumed, but conversations to be joined. Each gathering is designed to foster genuine connection—between participants, between neighbors, between coffee lovers and dessert enthusiasts.
                    </p>
                    <p>
                      We believe in small numbers and deep engagement. In the intimacy of shared experience. In the democracy of the circle, where every voice has value and every perspective enriches the whole.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-8">
                    Private Events & Collaborations
                  </h3>
                  <div className="space-y-6 font-serif text-lg text-neutral-600 leading-relaxed">
                    <p>
                      Our space is available for private gatherings that align with our values of artistic expression and mindful community. Book clubs, artist salons, corporate retreats focused on creativity—we welcome initiatives that honor both coffee culture and collaborative spirit.
                    </p>
                    <div className="mt-8">
                      <button 
                        onClick={handleOpenBookEvent}
                        className="inline-block font-serif text-base lg:text-lg text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 hover:border-neutral-600 pb-1 transition-colors duration-200"
                      >
                        Discuss Your Event Vision
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>

      {/* Book Event Modal */}
      <BookEventModal 
        isOpen={showBookEventModal} 
        onClose={handleCloseBookEvent} 
      />
    </>
  );
};

export default Events; 