import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquarePlus } from 'lucide-react';
import { FaqItem } from '../types';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'NTRP คืออะไร ต้องรู้ระดับตัวเองก่อนสมัครไหม?',
      answer: 'ไม่ต้องกังวลเลยครับ ระบบของเรามีเครื่องมือคำถามประเมินตนเอง (Self-Assessment) สั้นๆ แนะนำค่าพิกัดเริ่มต้นให้ และคะแนนนี้จะปรับเปลี่ยนตามผลสเกลและฟีดแบ็กความพึงพอใจของคู่เล่นหลังจากแมตช์จริงผ่านไป'
    },
    {
      id: 'faq-2',
      question: 'หากเราสำรองสนามสำเร็จแล้ว แต่หาคู่เล่นไม่ได้ในวันนั้นเลย จะเป็นอย่างไร?',
      answer: 'คุณยังคงสามารถเข้าใช้งานและครอบครองสนามส่วนตัวตามช่วงเวลาปกติที่เช่าได้ 100% โดยสามารถเปิดปุ่มกระจายห้องชวนดนตรี (Broadcast Request) บอร์ดประชาสัมพันธ์เพื่อให้สมาชิกท่านอื่นมาร่วมแจมแชร์สล็อตด้วยกัน'
    },
    {
      id: 'faq-3',
      question: 'ระบบรองรับการจัดหิ้วคู่ประเภททีมคู่ (Doubles Matching) ด้วยหรือเปล่า?',
      answer: 'แน่นอนครับ! ระบบรองรับทั้งแมตช์เดี่ยว (Singles) และแมตช์คู่สี่คน (Doubles) โดยระบบจับคู่จะค้นหาคู่หูและกลุ่มฝั่งตรงข้ามที่ขาดให้ลงตัวครบ 4 ไม้โดยอัตโนมัติเพื่อมิตรภาพที่สูงสุด'
    },
    {
      id: 'faq-4',
      question: 'หากมีเหตุสุดวิสัยฉุกเฉิน สามารถยกเลิกสิทธิ์ในการจองได้ภายหลังไหม?',
      answer: 'ท่านสามารถทำการดึงรายการยกเลิกหรือยื่นเรื่องเลื่อนรอบได้โดยไม่ต้องเสียธรรมเนียมใดๆ โดยต้องกระทำล่วงหน้าก่อนเวลาจอยิงสนามจริง 24 ชั่วโมงเพื่อสิทธิ์ในการแจ้งเตือนสมาชิกอื่น'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left info badge (1/3 width) */}
          <div className="lg:w-1/3">
            <span className="text-[#a1b415] text-xs font-semibold uppercase tracking-wider block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#101418] leading-tight">
              คำถามที่พบบ่อย
            </h2>
            <p className="mt-5 text-gray-500 font-light leading-relaxed">
              หากท่านมีข้อสงสัยเฉพาะเจาะจงเกี่ยวกับสถิติเทนนิส การประจัญบาน หรือปัญหาระหว่างสนาม สามารถส่งแชทคุยกับเจ้าหน้าที่ประจำลู่ได้ตลอดเวลากลางคืน
            </p>

            <a 
              href="https://line.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#101418] hover:bg-[#e1f549] hover:text-black text-white px-6 py-3.5 rounded-full text-xs font-bold transition-all cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>ติดต่อ Line OA: @almtennis</span>
            </a>
          </div>

          {/* Right Accordion grid (2/3 width) */}
          <div className="lg:w-2/3 w-full space-y-4">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? 'border-gray-200 bg-gray-50/50 shadow-sm' 
                      : 'border-gray-100 bg-white hover:border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-extrabold text-sm md:text-base text-[#101418] flex items-center gap-2.5">
                      <HelpCircle className={`w-4.5 h-4.5 shrink-0 ${isOpen ? 'text-teal-600' : 'text-gray-400'}`} />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : ''}`} />
                  </button>

                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-56 border-t border-gray-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-6 text-gray-500 text-sm leading-relaxed font-light bg-white/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
