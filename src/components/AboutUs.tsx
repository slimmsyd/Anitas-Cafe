import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-serif font-normal text-left text-neutral-900 tracking-tight leading-tight mb-8">
              Our Story
            </h2>
            <div className="w-24 h-[1px] bg-neutral-300 mb-12" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">
            <div className="lg:col-span-3 space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <p className="font-serif text-lg lg:text-xl text-neutral-900 leading-relaxed">
                  "In the heart of downtown Fredericksburg, where community meets comfort and tradition embraces warmth, 
                  we have created more than a café—we have cultivated a neighborhood gathering place."
                </p>
                
                <p className="font-serif text-base lg:text-lg text-neutral-600 leading-relaxed">
                  Our story begins with a simple yet profound belief: that great coffee and delicious desserts 
                  have the power to bring people together. Here, in our welcoming space that has become a cornerstone 
                  of Caroline Street, every cup is brewed with care and every dessert is crafted with love.
                </p>
              </div>
              
              <div className="border-l border-neutral-300 pl-8 lg:pl-12 space-y-6">
                <p className="font-serif text-base lg:text-lg text-neutral-600 leading-relaxed">
                  We source our coffee beans with the same care that a chef selects ingredients—
                  with reverence for origin, respect for the growers, and understanding that each variety 
                  carries within it the essence of soil, climate, and dedicated cultivation. Our brewing 
                  is not just preparation but a daily ritual of excellence.
                </p>
                
                <p className="font-serif text-base lg:text-lg text-neutral-600 leading-relaxed">
                  From our handcrafted desserts to our perfectly pulled espresso, everything we create 
                  is made with intention. Our dessert bar showcases both classic favorites and seasonal 
                  specialties, each one designed to complement your coffee experience and create moments 
                  worth savoring.
                </p>
              </div>
              
              <div className="pt-8 lg:pt-12">
                <p className="font-serif text-lg lg:text-xl text-neutral-900 leading-relaxed italic">
                  "We are proud to be your neighborhood coffee shop—the place where 
                  friendships are brewed, conversations flow, and every visit feels like coming home."
                </p>
                <div className="mt-6 text-neutral-500 font-serif text-sm tracking-wider">
                  — THE ANITA'S FXB PHILOSOPHY
                </div>
              </div>
              
              <div className="pt-8 lg:pt-12 flex justify-start">
                <a 
                  href="/menu" 
                  className="font-serif text-base lg:text-lg text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 hover:border-neutral-600 transition-all duration-300 pb-1 tracking-wide"
                >
                  Experience Our Menu
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div 
                  className="h-64 lg:h-80 bg-cover bg-center transition-all duration-700 hover:opacity-90"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url('/Anitas_Team_Photo.jpeg')`
                  }}
                />
                
                <div className="space-y-6 pl-6 border-l border-neutral-200">
                  <div>
                    <h3 className="font-serif text-lg text-neutral-900 mb-2">Founded</h3>
                    <p className="font-serif text-neutral-600">With love and dedication in downtown Fredericksburg</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg text-neutral-900 mb-2">Mission</h3>
                    <p className="font-serif text-neutral-600">To serve exceptional coffee and desserts while fostering genuine community connections</p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg text-neutral-900 mb-2">Vision</h3>
                    <p className="font-serif text-neutral-600">To be the neighborhood's favorite gathering place where quality and warmth come together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
