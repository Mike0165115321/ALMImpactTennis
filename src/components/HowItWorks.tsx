interface Step {
  num: string;
  title: string;
  desc: string;
  offsetClass?: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    {
      num: '1',
      title: 'Sign in with Google',
      desc: 'ล็อกอินเข้าใช้งานผ่านบัญชี Google หรือโซเชียล พร้อมยืนยันเบอร์โทรศัพท์ด้วยรหัส OTP ปลอดภัยภายใน 1 นาที',
      offsetClass: ''
    },
    {
      num: '2',
      title: 'Set NTRP & Preference',
      desc: 'กรอกข้อมูลสถิติหรือประเมินค่าระดับ NTRP ของคุณ พร้อมตั้งระเบียบผู้เล่นที่ชอบเพื่อกรองผู้เล่นที่มีทักษะตรงกัน',
      offsetClass: 'md:translate-y-8'
    },
    {
      num: '3',
      title: 'Book an Arena Court',
      desc: 'ตรวจเช็ควันที่ว่างและประเภทสนามที่พึงใจ ชำระธรรมเนียมอย่างง่ายดายด้วยสแกน QR Code / PromptPay สรุปผลทันใจ',
      offsetClass: ''
    },
    {
      num: '4',
      title: 'Get Matched & Play',
      desc: 'ระบบกระจายคำชวนร่วมแมตช์ไปหาผู้มีเป้าหมายเข้ากันแบบอัตโนมัติ นัดหมายลงแลกเปลี่ยนแร็กเก็ตกลางสนามจริง',
      offsetClass: 'md:translate-y-8'
    },
    {
      num: '5',
      title: 'Post-Match & Progression',
      desc: 'รีวิวมารยาทเพื่อนร่วมสนามหลังเกม สะสมชั่วโมงเล่นจริงเพื่อกระตุ้นกราฟสถิติน NTRP และประเมินฝีมือเพื่อเก็บเลเวลเพิ่มขึ้น',
      offsetClass: 'col-span-1 md:col-span-2 max-w-xl mx-auto md:mt-8'
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#101418] text-white py-28 relative overflow-hidden">
      
      {/* Decorative back-lights resembling dark mode atmosphere */}
      <div className="absolute top-[10%] left-[20%] w-72 h-72 rounded-full bg-teal-500/5 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[#e1f549]/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sticky Left Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="text-[#e1f549] text-xs font-semibold tracking-wider uppercase block mb-4">
              Step-by-step Guide
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              จาก Signup กับเรา<br />
              ถึง Match ใน 5 ขั้นตอน
            </h2>
            <p className="mt-6 text-gray-400 font-light leading-relaxed">
              ไม่มีความยุ่งยากอีกต่อไป ทีมงานได้พัฒนา Flow การมีส่วนร่วมที่มีประสิทธิภาพ ตั้งค่าระดับฝีมือ จองสนาม ดึงคนเล่นเข้าแมตช์ และรีวิวความสนุก ทั้งหมดเสร็จสิ้นได้ในสมาร์ทโฟนเพียงเครื่องเดียว
            </p>
          </div>

          {/* Staggered Right Cards */}
          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white/5 border border-white/10 p-10 rounded-2xl flex flex-col justify-between min-h-[260px] hover:border-[#e1f549]/30 transition-all duration-300 backdrop-blur-md group ${step.offsetClass}`}
                >
                  <div>
                    {/* Step Number Badge */}
                    <div className="text-sm font-semibold text-[#e1f549] mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full border border-[#e1f549]/35 flex items-center justify-center font-mono">
                        0{step.num}
                      </span>
                      <span className="uppercase tracking-wider text-[11px] opacity-75">Phase 0{step.num}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-[#e1f549] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm font-light leading-relaxed mt-6">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
