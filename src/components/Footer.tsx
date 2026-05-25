import { Trophy, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101418] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative footer glow */}
      <div className="absolute bottom-0 right-[15%] w-72 h-72 rounded-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Slogan Frame (2 Columnswide) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5 text-xl font-bold text-white">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[#e1f549] to-[#bfd12f] rounded-lg rotate-3">
                <Trophy className="w-4.5 h-4.5 text-black -rotate-3" />
              </div>
              <span className="font-sans tracking-tight">
                ALM <span className="text-[#e1f549]">Impact Tennis</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed">
              ยกระดับการตีเทนนิสและการเรียนรู้ของคุณไปสู่อีกระดับด้วยนวัตกรรมระบบสุ่มค้นพบคู่แมตช์ที่ขับเคลื่อนด้วยมาตรฐาน NTRP พรึ้มเพรียบความลักชัวรีของคลับ
            </p>
          </div>

          {/* Column 2: explore links */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-6 border-l-2 border-[#e1f549] pl-2.5">
              Explore
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-light">
              <li>
                <a href="#vision" className="hover:text-[#e1f549] transition-colors">
                  Vision / ความมุ่งมั่น
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#e1f549] transition-colors">
                  How it works / 5 ขั้นตอน
                </a>
              </li>
              <li>
                <a href="#matching" className="hover:text-[#e1f549] transition-colors">
                  Smart Matchmaker / ค้นหาพาร์เนอร์
                </a>
              </li>
              <li>
                <a href="#court-gallery" className="hover:text-[#e1f549] transition-colors">
                  Court Arena / ตารางความว่างสนาม
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts / Club locations */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-6 border-l-2 border-[#e1f549] pl-2.5">
              Locations
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-light">
              <li>
                <p className="text-gray-300 font-bold">ALM Arena Central</p>
                <p className="mt-1">ถนนพญาไท เขตราชเทวี กรุงเทพมหานคร</p>
              </li>
              <li>
                <p className="text-gray-300 font-bold">ALM North Wing</p>
                <p className="mt-1">ถนนประดิษฐ์มนูธรรม เขตวังทองหลาง กรุงเทพฯ</p>
              </li>
            </ul>
          </div>

          {/* Column 4: Legals / Supports */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-6 border-l-2 border-[#e1f549] pl-2.5">
              Help &amp; Legal
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-light">
              <li>
                <a href="#" className="hover:text-[#e1f549] transition-colors">
                  Terms of Service / ข้อตกลงการเล่น
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e1f549] transition-colors">
                  Privacy Policy / ปกป้องข้อมูล
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e1f549] transition-colors">
                  Safety Guideline / มารยาทการแข่งขัน
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright metadata with fine alignments */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-10 text-xs text-gray-500 gap-6">
          <p className="font-light">
            © {new Date().getFullYear()} ALM Impact Tennis Arena. All rights reserved. &nbsp;|&nbsp; Designed in matching lifestyle fidelity.
          </p>

          <button
            onClick={handleScrollTop}
            className="group flex items-center gap-2 bg-white/5 border border-white/10 hover:border-[#e1f549] hover:bg-white/10 text-white px-4.5 py-2.5 rounded-full transition-all cursor-pointer font-bold text-[10px] uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#e1f549]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
