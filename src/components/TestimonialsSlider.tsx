import React, { useState } from 'react';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Painter",
      content: "Here, among the gentle murmur of conversation and the rich aroma of perfectly roasted beans, I have found my muse. This café doesn't just serve coffee—it cultivates the conditions for creativity to flourish. Every morning, I arrive with blank canvases in my mind, and leave with visions painted in possibility.",
      essence: "A sanctuary for the creative spirit"
    },
    {
      name: "João Santos",
      role: "Philosopher of Coffee",
      content: "In each cup served here, I taste not just the bean, but the story—the hands that harvested, the earth that nurtured, the craft that transformed. The baristas are not merely service providers; they are custodians of ritual, guardians of a sacred daily ceremony that connects us to something larger than ourselves.",
      essence: "Where ritual meets reverence"
    },
    {
      name: "Ana Rodriguez",
      role: "Student of Life",
      content: "The workshops held in this space are more than classes—they are gatherings of souls seeking expression. Under these ceilings, I learned that art is not about perfection, but about the courage to make visible what was once hidden in the heart. Here, we don't just learn techniques; we discover ourselves.",
      essence: "A place of becoming"
    },
    {
      name: "Carlos Mendoza",
      role: "Keeper of Stories",
      content: "Every corner of this café whispers with the memories of conversations held, ideas born, and connections forged. I come not just for the exceptional coffee, but for the feeling of belonging to something timeless—a community that understands that the most important ingredients in any gathering are intention and presence.",
      essence: "Where community finds its voice"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 lg:py-32 bg-white text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-24 max-w-4xl">
          <h2 className="text-3xl lg:text-5xl font-serif font-normal text-left text-neutral-900 tracking-tight leading-tight mb-6">
            Voices from Our Community
          </h2>
          <div className="text-left font-serif text-lg lg:text-xl text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            "A café becomes sacred not through its walls or its wares, but through the stories of those who find meaning within its embrace."
          </div>
          <div className="w-24 h-[1px] bg-neutral-300" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <div className="space-y-8 lg:space-y-12">
              <blockquote className="font-serif text-xl lg:text-2xl text-neutral-900 leading-relaxed italic">
                "{current.content}"
              </blockquote>
              
              <div className="border-l border-neutral-300 pl-8 lg:pl-12 space-y-4">
                <div className="font-serif text-base lg:text-lg text-neutral-600 italic">
                  {current.essence}
                </div>
                <div className="space-y-1">
                  <div className="font-serif text-lg text-neutral-900">
                    {current.name}
                  </div>
                  <div className="font-serif text-base text-neutral-500 tracking-wide">
                    {current.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="flex flex-col space-y-6">
              <button
                onClick={prevTestimonial}
                className="font-serif text-neutral-600 hover:text-neutral-900 transition-colors duration-300 text-left group"
                aria-label="Previous testimonial"
              >
                <span className="text-lg group-hover:tracking-wider transition-all duration-300">← Previous</span>
              </button>
              
              <div className="space-y-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-full h-[2px] transition-all duration-300 ${
                      index === currentIndex ? 'bg-neutral-900' : 'bg-neutral-200 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="font-serif text-neutral-600 hover:text-neutral-900 transition-colors duration-300 text-left group"
                aria-label="Next testimonial"
              >
                <span className="text-lg group-hover:tracking-wider transition-all duration-300">Next →</span>
              </button>
            </div>
            
            <div className="pt-8 border-t border-neutral-200">
              <div className="font-serif text-sm text-neutral-500 tracking-wide">
                {currentIndex + 1} of {testimonials.length}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 flex justify-start">
          <a 
            href="/stories" 
            className="font-serif text-base lg:text-lg text-neutral-900 hover:text-neutral-600 border-b border-neutral-300 hover:border-neutral-600 transition-all duration-300 pb-1 tracking-wide"
          >
            Read More Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
