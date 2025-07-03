import React from 'react';

const ServicesOverview = () => {
  const services = [
    {
      title: "Premium Coffee",
      description: "Every cup is crafted with care using carefully sourced beans. From our signature espresso drinks to pour-overs and cold brews, we serve coffee that brings warmth to your day and community to your cup."
    },
    {
      title: "Handcrafted Desserts",
      description: "Our dessert bar features an array of sweet treats made fresh daily. From classic favorites to seasonal specialties, each dessert is crafted to perfectly complement your coffee experience."
    },
    {
      title: "Neighborhood Gathering Place",
      description: "A warm, welcoming space where neighbors become friends. Whether you're working on your laptop, catching up with friends, or simply enjoying a quiet moment, our café provides the perfect atmosphere for connection and comfort."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-24 max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-serif font-normal text-left text-neutral-900 tracking-tight leading-tight mb-6">
            What We Offer
          </h2>
          <div className="text-left font-serif text-lg lg:text-xl text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            "We believe in the perfect blend of quality and community—where every cup served, every dessert crafted, and every moment shared becomes part of a larger story of neighborhood connection."
          </div>
          <div className="w-24 h-[1px] bg-neutral-300" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 lg:mb-24">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="border-l border-neutral-200 pl-8 lg:pl-10 min-h-[200px] transition-all duration-500 group-hover:border-neutral-400">
                <h3 className="font-serif text-xl lg:text-2xl font-normal text-neutral-900 mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="font-serif text-base lg:text-lg text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <a 
            href="/menu" 
            className="font-serif text-base lg:text-lg text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 hover:border-neutral-600 transition-all duration-300 pb-1 tracking-wide"
          >
            View Our Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
