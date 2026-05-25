import { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
  onBookClick: () => void;
}

export default function Header({ onJoinClick, onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
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
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101418]/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 text-xl font-bold text-white cursor-pointer group"
        >
          {/* Custom Relatora-style abstract triangle badge merged with tennis ball accent */}
          <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#e1f549] to-[#bfd12f] rounded-lg rotate-3 group-hover:rotate-12 transition-transform duration-300">
            <Trophy className="w-4.5 h-4.5 text-black -rotate-3 group-hover:-rotate-12 transition-all" />
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
          <span className="font-sans tracking-tight">
            ALM <span className="text-[#e1f549]">Impact Tennis</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-300">
          <li>
            <button
              onClick={() => scrollToSection('vision')}
              className="hover:text-[#e1f549] cursor-pointer transition-colors"
            >
              Vision
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-[#e1f549] cursor-pointer transition-colors"
            >
              How it works
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('matching')}
              className="hover:text-[#e1f549] cursor-pointer transition-colors"
            >
              Matching
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('court-gallery')}
              className="hover:text-[#e1f549] cursor-pointer transition-colors"
            >
              Courts
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#e1f549] cursor-pointer transition-colors"
            >
              FAQ
            </button>
          </li>
        </ul>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={onBookClick}
            id="nav-join-button"
            className="bg-[#101418] border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all px-6 py-2.5 rounded-full font-medium text-[14px]"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          id="mobile-menu-trigger"
          className="md:hidden text-white hover:text-[#e1f549] transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#101418]/95 border-b border-white/10 backdrop-blur-lg transition-all animate-fade-in-down py-6 px-6">
          <ul className="flex flex-col gap-5 text-base font-semibold text-gray-200">
            <li>
              <button
                onClick={() => scrollToSection('vision')}
                className="w-full text-left py-2 hover:text-[#e1f549] transition-colors"
              >
                Vision
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="w-full text-left py-2 hover:text-[#e1f549] transition-colors"
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('matching')}
                className="w-full text-left py-2 hover:text-[#e1f549] transition-colors"
              >
                Matching
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('court-gallery')}
                className="w-full text-left py-2 hover:text-[#e1f549] transition-colors"
              >
                Courts
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('faq')}
                className="w-full text-left py-2 hover:text-[#e1f549] transition-colors"
              >
                FAQ
              </button>
            </li>
            <li className="pt-2 border-t border-white/10 mt-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-[#e1f549] text-black py-3 rounded-full text-center font-bold text-sm hover:bg-[#cde232] transition-colors"
              >
                Book a Court
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
