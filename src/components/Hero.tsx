import { MapPin, Calendar, Users, Sparkles } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onMatchClick: () => void;
}

export default function Hero({ onBookClick, onMatchClick }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[850px] flex flex-col justify-center items-stretch text-white pt-32 pb-20 overflow-hidden"
    >
      {/* Background Graphic & Premium Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10000ms] hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1600&q=80")',
        }}
      />
      {/* Dark Teal/Emerald Gradient overlay resembling Image 1 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101418]/60 via-[#101e1f]/85 to-[#101418] z-0" />

      {/* Decorative ambient glowing tennis orb representing the premium feel */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-[#e1f549]/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-teal-500/15 rounded-full blur-[100px] mix-blend-screen pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center flex-grow pt-12">
        <div className="max-w-4xl">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 bg-[#e1f549]/10 border border-[#e1f549]/30 text-[#e1f549] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NTRP 1.5 – 7.0 &nbsp;|&nbsp; ทุกระดับฝีมือ</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white">
            Find Your Perfect<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#e1f549]">
              Tennis Partner
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            สัมผัสประสบการณ์ Matching ด้วยสถิติ NTRP ระบบจับคู่อัจฉริยะที่ช่วยคุณหาคู่เล่นที่สมน้ำสมเนื้อ คลับคุณภาพพรีเมียม สนุกกับเกมที่ท้าทายทุกครั้งที่ลงสนาม
          </p>

          {/* Location and action footer layout matching Image 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-14 pt-8 border-t border-white/10 max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-gray-300 font-medium font-sans">
              <MapPin className="w-5 h-5 text-[#e1f549]" />
              <span>ALM Arena Bangkok, Thailand</span>
            </div>

            <div className="flex flex-wrap gap-4 sm:ml-auto">
              <button
                onClick={onBookClick}
                className="bg-[#e1f549] text-black hover:bg-[#cde232] active:scale-95 transition-all px-8 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-lg shadow-[#e1f549]/20 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                Book a Court
              </button>
              
              <button
                onClick={onMatchClick}
                className="bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/30 backdrop-blur-md transition-all px-8 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#e1f549]" />
                Find a Match
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
