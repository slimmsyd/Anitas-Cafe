import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface TeamMember {
  name: string;
  title: string;
  year: string;
  image: string;
  philosophy: string;
  background: string;
  specialty?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sofia Mendes',
    title: 'Head Barista & Coffee Curator',
    year: '2019',
    image: '/TeamPhotos/Team_Member_1.jpeg',
    philosophy: 'Coffee is not just a beverage; it is a meditation in motion. Each cup tells the story of its origin, and through careful preparation, we honor both the bean and the drinker.',
    background: 'Born in São Paulo, Sofia discovered her passion for coffee during childhood visits to her grandmother\'s fazenda. She studied agricultural science before pursuing her calling as a coffee artisan.',
    specialty: 'Brazilian single-origin brewing techniques'
  },
  {
    name: 'Marcus Chen',
    title: 'Gallery Coordinator & Visual Artist',
    year: '2020',
    image: '/TeamPhotos/Team_Member_2.jpg',
    philosophy: 'Art and coffee share the same essence—they transform raw materials into experiences that touch the soul. In our space, every corner becomes a canvas for community connection.',
    background: 'A graduate of VCU Arts, Marcus brings his background in curation and contemporary art to create rotating exhibitions that complement our coffee culture.',
    specialty: 'Contemporary mixed media and community art installations'
  },
  {
    name: 'Elena Rosario',
    title: 'Pastry Artist & Culinary Designer',
    year: '2021',
    image: 'https://source.unsplash.com/400x500/?portrait,woman,baker',
    philosophy: 'Every pastry is a small sculpture, every flavor a brushstroke. I believe in creating edible art that nourishes both body and spirit, inspired by the seasons and the artists around us.',
    background: 'Trained at the Culinary Institute, Elena specializes in plant-based pastries that mirror artistic movements—from Impressionist tarts to Abstract Expressionist breads.',
    specialty: 'Plant-based pastries and seasonal flavor artistry'
  },
  {
    name: 'James Foster',
    title: 'Community Events Curator',
    year: '2022',
    image: 'https://source.unsplash.com/400x500/?portrait,man,creative',
    philosophy: 'True community forms when strangers become friends over shared experiences. I orchestrate gatherings where coffee, art, and conversation create lasting connections.',
    background: 'With a background in cultural anthropology and event design, James creates intimate gatherings that celebrate both local artists and coffee traditions.',
    specialty: 'Intimate artist talks and coffee cuppings'
  },
  {
    name: 'Amara Okafor',
    title: 'Sustainability Coordinator',
    year: '2023',
    image: 'https://source.unsplash.com/400x500/?portrait,woman,sustainable',
    philosophy: 'Sustainability is an art form—the careful balance of respect for our earth, fair compensation for growers, and mindful consumption. Every choice we make ripples outward.',
    background: 'An environmental science graduate, Amara ensures our coffee sourcing supports farming communities while implementing eco-conscious practices throughout our operations.',
    specialty: 'Direct trade relationships and zero-waste initiatives'
  },
  {
    name: 'David Kim',
    title: 'Master Roaster',
    year: '2024',
    image: 'https://source.unsplash.com/400x500/?portrait,man,coffee',
    philosophy: 'Roasting is alchemy—the transformation of green seeds into aromatic poetry. Each roast profile is a composition, each batch a unique performance.',
    background: 'After fifteen years in specialty coffee, David joined us to develop our signature roast profiles that complement both the artistic atmosphere and Brazilian heritage.',
    specialty: 'Small-batch roasting and flavor profile development'
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="py-24 lg:py-32 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-6xl font-serif font-normal text-neutral-900 tracking-tight leading-tight mb-8">
                Our Team
              </h1>
              <div className="text-lg lg:text-xl font-serif text-neutral-600 leading-relaxed mb-8 max-w-3xl">
                "Behind every cup, every exhibition, every moment of connection, stands an individual dedicated to the philosophy that coffee and art are not mere commodities, but expressions of human creativity and community."
              </div>
              <div className="w-24 h-[1px] bg-neutral-300" />
            </div>
          </div>
        </section>

        {/* Team Timeline */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-normal text-neutral-900 mb-8 leading-tight">
              Team Timeline
            </h2>
            
            <div className="grid gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Year */}
                  <div className="lg:col-span-2">
                    <div className="text-3xl lg:text-4xl font-serif font-light text-neutral-400">
                      {member.year}
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="lg:col-span-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                      {/* Image */}
                      <div className="lg:col-span-1">
                        <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-2">
                            {member.name}
                          </h3>
                          <div className="text-lg font-serif text-neutral-600 mb-4">
                            {member.title}
                          </div>
                          {member.specialty && (
                            <div className="text-sm font-serif text-neutral-500 italic mb-4">
                              Specialty: {member.specialty}
                            </div>
                          )}
                        </div>
                        
                        <div className="space-y-4">
                          <div className="font-serif text-base lg:text-lg text-neutral-700 leading-relaxed">
                            {member.philosophy}
                          </div>
                          
                          <div className="font-serif text-base text-neutral-600 leading-relaxed">
                            {member.background}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Separator line for all but last */}
                    {index < teamMembers.length - 1 && (
                      <div className="mt-12 lg:mt-16 w-full h-[1px] bg-neutral-200" />
                    )}
                  </div>
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
                  Our Approach
                </h2>
                <div className="space-y-6 font-serif text-lg text-neutral-600 leading-relaxed">
                  <p>
                    At Anita's FXB Cafe and Dessert Bar, each team member embodies our belief that hospitality is an art form, coffee is a craft, and community is our greatest creation.
                  </p>
                  <p>
                    We do not simply serve beverages; we curate experiences. We do not merely display art; we cultivate appreciation. In every interaction, we seek to honor the traditions of Brazilian coffee culture while fostering an environment where creativity flourishes.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl lg:text-3xl font-serif font-normal text-neutral-900 mb-8">
                  Join Our Community
                </h3>
                <div className="space-y-6 font-serif text-lg text-neutral-600 leading-relaxed">
                  <p>
                    We are always seeking individuals who share our passion for coffee, art, and authentic human connection.
                  </p>
                  <p>
                    If you believe in the transformative power of thoughtfully prepared coffee and the importance of creating spaces where art and community intersect, we invite you to connect with us.
                  </p>
                </div>
                <div className="mt-8">
                  <a 
                    href="mailto:hello@anitasfxbg.com" 
                    className="inline-block font-serif text-base lg:text-lg text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 hover:border-neutral-600 pb-1 transition-colors duration-200"
                  >
                    Contact Us About Opportunities
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team; 