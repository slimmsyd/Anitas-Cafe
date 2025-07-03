import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OurMenu from '@/components/OurMenu';
import ServicesOverview from '@/components/ServicesOverview';
import AboutUs from '@/components/AboutUs';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <OurMenu />
      <ServicesOverview />
      <AboutUs />
      <TestimonialsSlider />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
