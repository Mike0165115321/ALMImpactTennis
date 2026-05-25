import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import CourtSpotlight from './components/CourtSpotlight';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';
import CourtGallery from './components/CourtGallery';
import BookingModal from './components/BookingModal';
import MatchingSimulator from './components/MatchingSimulator';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import { Court } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);

  // Fallback default court for general "Book a Court" triggers
  const defaultCourt: Court = {
    id: 'court-1',
    name: 'Indoor Court A — Air-conditioned',
    description: 'คอร์ทในร่มติดตั้งเครื่องปรับอากาศ ป้องกันลม แสงแดด และฝน 100% เหมาะสำหรับการเคลื่อนไหวลื่นไหล',
    type: 'indoor',
    price: 200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
    features: ['เครื่องปรับอากาศ', 'ไฟส่องสว่างมาตรฐาน', 'ที่นั่งสำหรับกองเชียร์', 'น้ำดื่มฟรี'],
    slots: ['08:00 - 10:00', '10:00 - 12:00', '13:00 - 15:00', '16:00 - 18:00', '18:00 - 20:00', '20:00 - 22:00']
  };

  const handleOpenGeneralBooking = () => {
    setSelectedCourt(defaultCourt);
    setBookingModalOpen(true);
  };

  const handleBookSpecificCourt = (court: Court) => {
    setSelectedCourt(court);
    setBookingModalOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#101418] font-sans antialiased selection:bg-[#e1f549] selection:text-black">
      
      {/* 1. Header Navigation */}
      <Header 
        onJoinClick={handleOpenGeneralBooking}
        onBookClick={handleOpenGeneralBooking}
      />

      {/* 2. Hero Presentation */}
      <Hero 
        onBookClick={() => handleScrollToSection('court-gallery')}
        onMatchClick={() => handleScrollToSection('matching')}
      />

      {/* 3. About philosophy section */}
      <AboutSection 
        onStartClick={() => handleScrollToSection('matching')}
      />

      {/* 4. Column Metrics Stats */}
      <StatsSection />

      {/* 5. Highlight Environments */}
      <CourtSpotlight />

      {/* 6. Feature List */}
      <FeaturesGrid />

      {/* 7. Timeline Checklist Flow */}
      <HowItWorks />

      {/* 8. Court Filter & Selection Suite */}
      <CourtGallery 
        onBookCourt={handleBookSpecificCourt}
      />

      {/* 9. High-Fidelity Matchmaking Terminal */}
      <MatchingSimulator />

      {/* 10. Stylized Review Grid */}
      <Testimonials />

      {/* 11. FAQ Panel Grid */}
      <FaqSection />

      {/* 12. Prefooter Promotion */}
      <CtaSection />

      {/* 13. High-class Footer Index */}
      <Footer />

      {/* 14. Stateful Checkout Dialog Overlay */}
      <BookingModal 
        court={selectedCourt}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

    </div>
  );
}
