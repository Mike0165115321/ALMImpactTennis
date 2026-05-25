import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function CtaSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div>
      {/* High-quality tennis court wide background separating sections */}
      <div 
        className="w-full h-[400px] md:h-[550px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1600&q=80")',
        }}
      >
        {/* Soft overlay gradient mimicking Image 1's transition density */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Vibrant Lime Yellow registration pre-footer template */}
      <section className="bg-[#e1f549] py-24 text-[#101418] relative overflow-hidden text-center">
        {/* Abstract design vector circles mimicking tennis trace paths */}
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full border border-black/5 pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full border border-black/5 pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            เริ่มต้นหาคู่เล่น<br />เทนนิสที่ใช่วันนี้
          </h2>
          
          <p className="mt-6 text-sm md:text-base font-semibold text-black/80 max-w-lg mx-auto leading-relaxed">
            สมัครฟรี — เพียงเชื่อมต่อผ่าน Google Account หรือยืนยันเบอร์โทร ก็เริ่มจองคอร์ทท้าดวลระดับฝีมือได้ลื่นไหล ทันใจ
          </p>

          <div className="mt-10 max-w-md mx-auto">
            {isSubmitted ? (
              <div className="bg-black text-[#e1f549] rounded-2xl p-4 flex items-center justify-center gap-2 animate-scale-up font-bold text-xs">
                <CheckCircle className="w-5 h-5 text-[#e1f549]" />
                <span>สมัครรับข่าวสารสตรีมสำเร็จ! เราจะส่งสิทธิ์ประลองให้ทางคุณ</span>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="bg-white p-2 rounded-full flex shadow-xl border border-black/10 focus-within:ring-2 focus-within:ring-black/20 transition-all"
              >
                <input 
                  type="email" 
                  required
                  placeholder="กรอก Email เพื่อรับคำเชิญดวลฟรี"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 text-xs md:text-sm font-semibold placeholder-gray-400 focus:outline-none text-[#101418]"
                />
                <button 
                  type="submit"
                  className="bg-black hover:bg-neutral-800 text-white font-bold text-xs px-6 py-4 rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>เริ่มเลย</span>
                  <Send className="w-3.5 h-3.5 fill-white text-white" />
                </button>
              </form>
            )}
          </div>
          
          <span className="block text-[11px] font-bold text-black/40 tracking-wider uppercase mt-4">
            ★ NO CREDIT CARD REQUIRED &nbsp;|&nbsp; 24/7 SUPPORT ACTIVE
          </span>
        </div>
      </section>
    </div>
  );
}
