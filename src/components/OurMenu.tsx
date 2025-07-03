import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MenuItem {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  src: string;
  tag?: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    title: 'Van Gogh Latte',
    description: 'Espresso, steamed milk, and a swirl of blue spirulina inspired by Starry Night. Each cup tells a story of color and warmth.',
    mediaType: 'image',
    src: '/Ice_Cream.jpeg',
    tag: 'Artisan',
  },
  {
    id: '2',
    title: 'Seasonal Matcha',
    description: 'Vibrant matcha with a touch of floral art, available this spring. A moment of zen in every sip.',
    mediaType: 'image',
    src: '/Cream_Drink.jpeg',
    tag: 'Seasonal',
  },
  {
    id: '3',
    title: 'Abstract Croissant',
    description: 'A flaky croissant with a colorful glaze, inspired by modern art. Where taste meets imagination.',
    mediaType: 'image',
    src: '/Crossaint_Things.jpeg',
    tag: 'New',
  },
  {
    id: '4',
    title: 'Artisan Gelato',
    description: 'Handcrafted artisan gelato with layers of rich flavor and artistic presentation. A frozen canvas of culinary art.',
    mediaType: 'image',
    src: '/Ice_Cream.jpeg',
    tag: 'Artisan',
  },
];

function getCardsToShow(width: number) {
  if (width < 640) return 1; // mobile
  if (width < 1024) return 2; // tablet
  return 3; // desktop
}

function OurMenu() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [startIdx, setStartIdx] = useState(0);

  // Responsive cards to show
  const CARDS_TO_SHOW = getCardsToShow(windowWidth);
  const canGoBack = startIdx > 0;
  const canGoForward = startIdx + CARDS_TO_SHOW < menuItems.length;

  // Update window width on resize
  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset startIdx if cards to show changes
  React.useEffect(() => {
    if (startIdx + CARDS_TO_SHOW > menuItems.length) {
      setStartIdx(Math.max(0, menuItems.length - CARDS_TO_SHOW));
    }
  }, [CARDS_TO_SHOW, startIdx]);

  const visibleItems = menuItems.slice(startIdx, startIdx + CARDS_TO_SHOW);

  // Calculate progress for slider
  const totalPossiblePositions = menuItems.length - CARDS_TO_SHOW + 1;
  const currentPosition = startIdx + 1;
  const progressPercentage = totalPossiblePositions > 1 ? (startIdx / (totalPossiblePositions - 1)) * 100 : 0;

  return (
    <section className="py-24 lg:py-32 bg-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header with philosophical approach */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-serif font-normal text-left text-neutral-900 tracking-tight leading-tight mb-6">
            Our Menu
          </h2>
          <div className="text-left font-serif text-lg lg:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl">
            "In each creation, we honor both the bean and the sweet craft. Our offerings are born from the marriage of coffee artistry and dessert mastery—where flavor becomes joy, and every bite and sip nourishes the soul."
          </div>
          <div className="w-24 h-[1px] bg-neutral-300" />
        </div>

        <div className="flex items-center justify-center w-full gap-6 lg:gap-8">
          {/* Navigation arrows - more visible */}
          <Button
            variant="ghost"
            className={`flex bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-neutral-900 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-200 ${
              canGoBack ? 'hover:shadow-md' : ''
            }`}
            onClick={() => setStartIdx((idx) => Math.max(0, idx - 1))}
            aria-label="Previous"
            disabled={!canGoBack}
            size="icon"
          >
            <span className="font-serif text-lg">←</span>
          </Button>

          <div className="flex gap-8 lg:gap-12 w-full justify-center overflow-x-visible">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="w-[85vw] max-w-sm min-w-0 flex-shrink-0 flex flex-col items-start group"
              >
                <div className="w-full relative mb-6">
                  {/* Subtle tag */}
                  {item.tag && (
                    <span className="absolute top-4 left-4 bg-white/90 text-neutral-700 text-xs font-serif px-4 py-2 border border-neutral-200/50 backdrop-blur-sm" style={{ borderWidth: '0.5px' }}>
                      {item.tag}
                    </span>
                  )}
                  {item.mediaType === 'image' ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full aspect-[3/4] object-cover transition-all duration-500 group-hover:opacity-90"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full aspect-[3/4] object-cover transition-all duration-500 group-hover:opacity-90"
                      controls
                      preload="none"
                    />
                  )}
                </div>
                <div className="w-full space-y-4">
                  <h3 className="font-serif text-xl lg:text-2xl font-normal text-left text-neutral-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-serif text-base lg:text-lg text-neutral-600 text-left leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            className={`flex bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 hover:text-neutral-900 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed p-3 rounded-full transition-all duration-200 ${
              canGoForward ? 'hover:shadow-md' : ''
            }`}
            onClick={() => setStartIdx((idx) => Math.min(menuItems.length - CARDS_TO_SHOW, idx + 1))}
            aria-label="Next"
            disabled={!canGoForward}
            size="icon"
          >
            <span className="font-serif text-lg">→</span>
          </Button>
        </div>

        {/* Progress Slider */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-32 h-[2px] bg-neutral-200 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-neutral-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="font-serif text-xs text-neutral-500 tracking-wider">
              {currentPosition} of {totalPossiblePositions}
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-16 lg:mt-20">
          <Button asChild className="bg-transparent text-neutral-900 hover:bg-neutral-100 font-serif text-base lg:text-lg px-8 py-4 border border-neutral-300/50 shadow-none tracking-wide" style={{ borderWidth: '0.5px' }}>
            <a href="/menu">View Complete Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default OurMenu; 