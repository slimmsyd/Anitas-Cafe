import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

interface MenuItem {
  name: string;
  description: string;
  philosophy: string;
  price: string;
  category: 'Coffee' | 'Tea' | 'Food' | 'Pastries' | 'Limited Time';
  origin?: string;
  featured?: boolean;
  availableUntil?: string;
}

const menuItems: MenuItem[] = [
  // Coffee
  {
    name: 'Single Origin Pour-Over',
    description: 'Our rotating selection of Brazilian single-origin coffees, each expressing the unique terroir of its fazenda. Prepared with meditative precision using the V60 method.',
    philosophy: 'Each cup is a conversation with the land, the farmer, and the moment of harvest.',
    price: '6',
    category: 'Coffee',
    origin: 'Cerrado, Minas Gerais',
    featured: true
  },
  {
    name: 'Espresso Contemplation',
    description: 'A concentrated meditation on Brazilian coffee culture. Our house blend combines notes of chocolate, caramel, and subtle fruit undertones.',
    philosophy: 'In the brevity of espresso, we find the essence of time itself.',
    price: '3.50',
    category: 'Coffee'
  },
  {
    name: 'Café com Leite Reimagined',
    description: 'The traditional Brazilian coffee with milk, elevated through careful attention to temperature, texture, and the marriage of flavors.',
    philosophy: 'Tradition honored, not imitated. A bridge between memory and moment.',
    price: '4.50',
    category: 'Coffee'
  },
  {
    name: 'Cold Brew Meditation',
    description: 'Twenty-four hours of patient extraction yields a smooth, complex coffee that speaks to the virtue of unhurried process.',
    philosophy: 'Good things cannot be rushed. This brew teaches us the value of patience.',
    price: '5',
    category: 'Coffee'
  },

  // Tea
  {
    name: 'Chamomile Reverie',
    description: 'Organic chamomile flowers steeped to release their gentle, honeyed essence. A cup of quiet contemplation.',
    philosophy: 'Sometimes the most profound conversations happen in silence.',
    price: '4',
    category: 'Tea'
  },
  {
    name: 'Earl Grey Variations',
    description: 'Classic Earl Grey with our own interpretations: lavender Earl, bergamot supreme, or the traditional blend.',
    philosophy: 'Variation within tradition. The familiar made new through attention.',
    price: '4.50',
    category: 'Tea'
  },

  // Food
  {
    name: 'Artisan Cheese & Bread',
    description: 'Local artisan cheeses paired with fresh-baked sourdough. A simple composition that honors the craft of makers.',
    philosophy: 'In simplicity, we discover abundance. In craft, we find connection.',
    price: '12',
    category: 'Food',
    featured: true
  },
  {
    name: 'Seasonal Soup',
    description: 'A daily creation inspired by what the season offers. Made with intention, served with care.',
    philosophy: 'To eat seasonally is to live in harmony with the rhythm of the earth.',
    price: '8',
    category: 'Food'
  },
  {
    name: 'Gallery Salad',
    description: 'Mixed greens, seasonal vegetables, and house-made vinaigrette. A composition of color, texture, and flavor.',
    philosophy: 'Like a painting, each ingredient plays its role in the greater composition.',
    price: '10',
    category: 'Food'
  },

  // Pastries
  {
    name: 'Brazilian Brigadeiro',
    description: 'Traditional chocolate truffle reimagined as a delicate pastry. Rich, indulgent, and nostalgic.',
    philosophy: 'Some flavors carry the weight of memory, the sweetness of home.',
    price: '3.50',
    category: 'Pastries'
  },
  {
    name: 'Contemplative Croissant',
    description: 'Buttery, flaky pastry made with French technique and Brazilian heart. Available plain or with seasonal preserves.',
    philosophy: 'The marriage of technique and soul creates something greater than either alone.',
    price: '4',
    category: 'Pastries'
  },
  {
    name: 'Meditation Muffin',
    description: 'Daily rotating flavors made with organic ingredients. Today: lemon rosemary with olive oil.',
    philosophy: 'Each day brings new possibilities. Each bite, a small discovery.',
    price: '3.50',
    category: 'Pastries'
  },

  // Limited Time Specials
  {
    name: 'Summer Solstice Cold Brew',
    description: 'A refreshing celebration of summer\'s peak. Brazilian beans from high-altitude fazendas, cold-brewed for 24 hours, served with notes of citrus and floral undertones.',
    philosophy: 'In summer\'s abundance, we find energy not just in caffeine, but in the sun-kissed beans that carry the warmth of Brazilian highlands.',
    price: '7',
    category: 'Limited Time',
    origin: 'Chapada Diamantina, Bahia',
    availableUntil: 'September 22, 2024',
    featured: true
  },
  {
    name: 'Stone Fruit Gallery Plate',
    description: 'Peak summer stone fruits paired with Brazilian queijo minas, honey from local hives, and artisan crackers. A celebration of July\'s bounty.',
    philosophy: 'Summer\'s fleeting sweetness reminds us to savor each moment, each bite, each conversation.',
    price: '18',
    category: 'Limited Time',
    availableUntil: 'August 31, 2024'
  },
  {
    name: 'Iced Hibiscus Meditation',
    description: 'Brazilian hibiscus flowers steeped cold with mint and a touch of agave. A cooling ritual for contemplative summer afternoons.',
    philosophy: 'Flowers teach us about temporary beauty. This drink captures summer\'s essence in each crimson sip.',
    price: '5.50',
    category: 'Limited Time',
    availableUntil: 'August 15, 2024'
  },
  {
    name: 'Midsummer Night\'s Tapas',
    description: 'Evening plates inspired by Brazilian boteco culture. Small bites designed for sharing during our summer evening exhibitions and artist talks.',
    philosophy: 'Long summer evenings call for leisurely conversations. Food should extend, not interrupt, the dialogue.',
    price: '22',
    category: 'Limited Time',
    availableUntil: 'September 1, 2024'
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Limited Time', 'Coffee', 'Tea', 'Food', 'Pastries'];
  
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const featuredItems = menuItems.filter(item => item.featured);

  return (
    <PageTransition>
      <div className="min-h-screen bg-neutral-50">
        <Navigation />
        
        <main className="pt-24">
          {/* Header Section */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl lg:text-6xl font-serif font-normal text-neutral-900 tracking-tight leading-tight mb-8">
                  Our Menu
                </h1>
                <div className="text-lg lg:text-xl font-serif text-neutral-600 leading-relaxed mb-8 max-w-3xl">
                  "A menu is not merely a list of offerings, but a reflection of values. Each item here represents our commitment to quality, sustainability, and the belief that food and drink should nourish both body and spirit."
                </div>
                <div className="w-24 h-[1px] bg-neutral-300 mb-8" />
                
                <div className="text-base font-serif text-neutral-500 leading-relaxed">
                  Updated daily • Seasonal ingredients • Brazilian coffee focus
                </div>
              </div>
            </div>
          </section>

          {/* Limited Time Specials */}
          <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-normal text-white mb-4">
                  Limited Time Offerings
                </h2>
                <p className="text-lg font-serif text-white/80 max-w-2xl mx-auto">
                  Seasonal inspirations and collaborative creations that honor the ephemeral nature of art and flavor.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {menuItems.filter(item => item.category === 'Limited Time').map((item, index) => (
                  <div key={index} className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-serif font-normal text-white mb-2">
                          {item.name}
                        </h3>
                        {item.origin && (
                          <div className="text-sm font-serif text-white/60 mb-2">
                            {item.origin}
                          </div>
                        )}
                        {item.availableUntil && (
                          <div className="inline-block px-3 py-1 text-xs font-serif text-white bg-white/20 border border-white/30 mb-3" style={{ borderWidth: '0.5px' }}>
                            Available until {item.availableUntil}
                          </div>
                        )}
                      </div>
                      <span className="text-xl font-serif text-white ml-6">
                        ${item.price}
                      </span>
                    </div>
                    
                    <p className="font-serif text-base text-white/90 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="font-serif text-sm text-white/70 leading-relaxed italic">
                      "{item.philosophy}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Items */}
          {featuredItems.length > 0 && (
            <section className="py-16 lg:py-24 bg-neutral-50">
              <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-12">
                  Today's Contemplations
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {featuredItems.map((item, index) => (
                    <div key={index} className="space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-2">
                            {item.name}
                          </h3>
                          {item.origin && (
                            <div className="text-sm font-serif text-neutral-500 mb-4">
                              {item.origin}
                            </div>
                          )}
                        </div>
                        <span className="text-2xl font-serif text-neutral-900 ml-6">
                          ${item.price}
                        </span>
                      </div>
                      
                      <p className="font-serif text-base lg:text-lg text-neutral-700 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="font-serif text-base text-neutral-600 leading-relaxed italic">
                        "{item.philosophy}"
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Menu Categories & Items */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-8">
                  Complete Offerings
                </h2>
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-sm font-serif border transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-neutral-900 text-white border-neutral-900'
                          : 'bg-transparent text-neutral-700 border-neutral-300 hover:border-neutral-500'
                      }`}
                      style={{ borderWidth: '0.5px' }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Items */}
              <div className="space-y-12">
                {filteredItems.map((item, index) => (
                  <div key={index} className="space-y-4">
                                         <div className="flex items-start justify-between">
                       <div className="flex-1">
                         <div className="flex items-center space-x-3 mb-2">
                           <h3 className="text-xl lg:text-2xl font-serif font-normal text-neutral-900">
                             {item.name}
                           </h3>
                           <div className="inline-block px-2 py-1 text-xs font-serif text-neutral-600 bg-neutral-100 border border-neutral-200" style={{ borderWidth: '0.5px' }}>
                             {item.category}
                           </div>
                         </div>
                         {item.origin && (
                           <div className="text-sm font-serif text-neutral-500 mb-2">
                             {item.origin}
                           </div>
                         )}
                         {item.availableUntil && (
                           <div className="text-sm font-serif text-red-600 mb-3 font-medium">
                             Available until {item.availableUntil}
                           </div>
                         )}
                       </div>
                      <span className="text-xl font-serif text-neutral-900 ml-6">
                        ${item.price}
                      </span>
                    </div>
                    
                    <p className="font-serif text-base text-neutral-700 leading-relaxed max-w-4xl">
                      {item.description}
                    </p>
                    
                    <div className="font-serif text-sm text-neutral-600 leading-relaxed italic max-w-3xl">
                      "{item.philosophy}"
                    </div>
                    
                    {/* Separator line for all but last */}
                    {index < filteredItems.length - 1 && (
                      <div className="mt-8 w-full h-[1px] bg-neutral-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-24 lg:py-32 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-8">
                    Our Approach to Nourishment
                  </h2>
                  <div className="space-y-6 font-serif text-lg text-neutral-600 leading-relaxed">
                    <p>
                      Every item on our menu represents a choice—not just of flavor, but of values. We source our coffee directly from Brazilian farmers who share our commitment to sustainability and quality.
                    </p>
                    <p>
                      Our kitchen operates on the principle of simplicity: exceptional ingredients, minimal intervention, maximum respect for the natural flavors that emerge when care meets craft.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-8">
                    Seasonal Rhythms
                  </h3>
                  <div className="space-y-6 font-serif text-lg text-neutral-600 leading-relaxed">
                    <p>
                      Our menu evolves with the seasons, reflecting our belief that the best flavors come from ingredients at their peak. Daily specials showcase what is fresh, local, and aligned with the natural calendar.
                    </p>
                    <p>
                      Visit us regularly to discover new expressions of familiar favorites, and seasonal surprises that celebrate the abundance of each moment in the year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Menu; 