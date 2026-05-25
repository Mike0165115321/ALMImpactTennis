import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-white py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left testimonial author overview (1/3 width) as shown in Image 1 */}
          <div className="md:w-1/3 space-y-8">
            <div>
              <span className="text-[#a1b415] text-xs font-semibold uppercase tracking-wider block mb-2">
                Player Testimonial
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#101418] leading-[1.15]">
                ผู้เล่นพูดถึง<br />
                ALM Impact Tennis
              </h2>
              <p className="mt-4 text-gray-400 font-light text-sm max-w-sm leading-relaxed">
                ระบบสากลที่ออกแบบมาเพื่อคนรักการออกกำลังกายที่ใส่ใจในมิตรสัมพันธ์และความคุ้มค่าของแมตช์ห่วยๆ
              </p>
            </div>

            {/* Author Profile Frame exactly like Image 1 layout style */}
            <div className="flex items-center gap-4.5 pt-6 border-t border-gray-100">
              {/* Profile Image with Ring structure */}
              <div className="relative w-14 h-14 rounded-full bg-[#e1f549]/20 border border-[#e1f549]/65 flex items-center justify-center text-black font-extrabold text-[15px] shadow-sm">
                นท
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 fill-white text-white" />
                </div>
              </div>

              <div>
                <p className="font-extrabold text-sm text-[#101418]">นทีธร วงษ์เจริญ</p>
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide mt-1">NTRP 3.5 &nbsp;|&nbsp; สมาชิกมา 6 เดือน</p>
              </div>
            </div>
          </div>

          {/* Right giant textual quote review (2/3 width) as shown in Image 1 */}
          <div className="md:w-2/3 flex items-start gap-4">
            <Quote className="w-16 h-16 text-[#e1f549]/60 shrink-0 rotate-180 -mt-2 hidden sm:block" />
            <div className="space-y-6">
              <blockquote className="text-2xl md:text-4xl lg:text-5xl font-medium md:font-semibold text-gray-800 leading-[1.3] tracking-tight">
                "ก่อนหน้านี้หาคู่เล่นเทนนิสที่ฝีมือสูสีกันได้ยากมาก บางครั้งจองคอร์ทไว้ยั้งว่างเปล่า แต่พอหันมาเล่นระบบ <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-teal-500 font-extrabold">NTRP Matching of ALM</span> ผมเจอคู่ตีระดับคงเส้นคงวาใกล้พิกัดเดียวกันได้ภายใน 30 นาที และทำให้เล่นสนุกกระตุ้นกราฟออกกำลังขึ้นมากจริงๆ"
              </blockquote>
              
              {/* Star Rating row block */}
              <div className="flex items-center gap-1.5 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#e1f549] text-[#e1f549]" />
                ))}
                <span className="text-xs text-gray-400 font-semibold tracking-wide ml-2 uppercase">Verified Member Platform Review</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
