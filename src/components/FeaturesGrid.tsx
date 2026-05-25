import { Award, Users, CalendarDays, ShieldCheck, ThumbsUp, Sliders } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Award,
      title: 'NTRP Matching Algorithm',
      description: 'ระบบจับคู่ตามระดับ NTRP 1.5–7.0 พร้อม Filter สไตล์การเล่น ระยะทาง และช่วงเวลาที่ต้องการได้หลากหลายมิติ'
    },
    {
      icon: Users,
      title: 'Singles & Doubles Support',
      description: 'รองรับการจัดประเภทแข่งขันเดี่ยวและคู่ พร้อมระบบหาผู้เล่นสำรองเพิ่มให้ครบ 4 คนโดยอัตโนมัติสำหรับประเภททัวร์นาเมนต์คู่'
    },
    {
      icon: CalendarDays,
      title: 'Real-time Availability',
      description: 'เช็คสถานะความว่างของสนามแบบวิทยากลสดๆ พร้อมระบบการจองจบรวดเร็วและยืนยันผ่าน QR Code / PromptPay ทันใจ'
    },
    {
      icon: ShieldCheck,
      title: 'Google Login + OTP Verify',
      description: 'สมัครง่ายด้วย Google Account พ่วงรหัส SMS OTP เพื่อรักษาความถูกต้องปลอดภัยของพอร์ตผู้ใช้ในคอมมูนิตี้แบบ 100%'
    },
    {
      icon: ThumbsUp,
      title: 'Post-Match Reviews (UGC)',
      description: 'ระบบรีวิวสติหลังแมตช์ ให้คุณได้ให้ดาวความประทับใจ เพิ่มระบบอัพเดทคะแนนน่าเชื่อถือของกลุ่มสังคม'
    },
    {
      icon: Sliders,
      title: 'Preference Customization',
      description: 'เลือกได้ว่าอยากเจอผู้เล่นระดับฟอร์มแบบใด เท่ากัน เก่งกว่า หรือคู่ซ้อมฝึกฝนทั่วไป เพื่อแมตช์ที่ตอบสไตล์ส่วนตัว'
    }
  ];

  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#101418]">
            ฟีเจอร์ที่ออกแบบมา<br />เพื่อนักเทนนิสโดยเฉพาะ
          </h2>
          <p className="mt-4 text-gray-500 font-light leading-relaxed">
            ครอบคลุมทุกมิติการเล่นเทนนิสตั้งแต่การค้นหาพาร์ทเนอร์ฝีมือระดับเดียวกัน ตารางการจอง คอร์ทยิงลูกซ้อมสไตล์เดี่ยว ไปจนถึงความรู้สึกของสังคมสนาม
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div key={index} className="flex flex-col items-start group">
                {/* Minimalist icon frame as shown in Image 1 */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 group-hover:bg-[#e1f549]/10 group-hover:border-[#e1f549]/30 transition-all duration-300 mb-6">
                  <IconComponent className="w-6 h-6 text-[#101418] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#101418] mb-3">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
