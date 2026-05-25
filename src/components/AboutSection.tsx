interface AboutSectionProps {
  onStartClick: () => void;
}

export default function AboutSection({ onStartClick }: AboutSectionProps) {
  return (
    <section id="vision" className="bg-white text-[#101418] py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Left indicator column (25% width) resembling Image 1 */}
          <div className="md:w-1/4 pt-2">
            <span className="text-gray-400 font-semibold tracking-wider text-xs uppercase block border-b border-gray-100 pb-3 md:inline-block">
              About ALM Impact Tennis
            </span>
          </div>

          {/* Right main explanation (75% width) resembling Image 1 */}
          <div className="md:w-3/4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#101418]">
              ALM Impact Tennis คือ community สำหรับนักเทนนิสทุกระดับ ที่ต้องการ{' '}
              <span className="text-gray-300 line-through decoration-3 decoration-[#e1f549] mx-1">
                แค่จองสนาม
              </span>{' '}
              — พัฒนาฝีมือและหาคู่เล่นที่ใช่
            </h2>
            
            <p className="mt-8 text-gray-600 text-lg leading-relaxed font-light">
              เราเชื่อว่าเทนนิสที่ดีเริ่มต้นจากคู่เล่นที่ใช่ ระบบ Matching อัจฉริยะของเราอ้างอิง NTRP และ WTN มาตรฐานสากล เพื่อให้ทุกแมตช์มีความท้าทายที่พอดี ไม่ว่าคุณจะต้องการคู่เล่นระดับเดียวกันเพื่อความสูสี ท้าทายกับคู่เล่นระดับที่สูงกว่า หรือสนับสนุนจังหวะฝึกให้กับสมาชิกใหม่ — ระบบของเราสามารถจัดสรรให้ตรงต้องการได้ทั้งหมดแบบอัตโนมัติ
            </p>

            {/* Premium actionable button */}
            <div className="mt-10">
              <button
                onClick={onStartClick}
                className="inline-lg-button bg-[#e1f549] text-black font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                เริ่มต้นใช้งาน
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
