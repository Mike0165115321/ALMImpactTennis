import { useState } from 'react';
import { Court } from '../types';
import { Search, MapPin, CheckCircle, Flame, Star } from 'lucide-react';

interface CourtGalleryProps {
  onBookCourt: (court: Court) => void;
}

export default function CourtGallery({ onBookCourt }: CourtGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'indoor' | 'outdoor' | 'vip' | 'training'>('all');

  const courtsData: Court[] = [
    {
      id: 'court-1',
      name: 'Indoor Court A — Air-conditioned',
      description: 'คอร์ทในร่มติดตั้งเครื่องปรับอากาศ ป้องกันลม แสงแดด และฝน 100% เหมาะสำหรับการเคลื่อนไหวลื่นไหล',
      type: 'indoor',
      price: 200,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80',
      features: ['เครื่องปรับอากาศ', 'ไฟส่องสว่างมาตรฐาน', 'ที่นั่งสำหรับกองเชียร์', 'น้ำดื่มฟรี'],
      slots: ['08:00 - 10:00', '10:00 - 12:00', '13:00 - 15:00', '16:00 - 18:00', '18:00 - 20:00', '20:00 - 22:00']
    },
    {
      id: 'court-2',
      name: 'Outdoor Hard Court — Open Air',
      description: 'คอร์ทกลางแจ้งแบบฮาร์ดคอร์ท พื้นสีฟ้าสะท้อนชัดเจน ซับแรงกระแทกได้ดียอดเยี่ยม ท้าทายสปีดบอลด่วน',
      type: 'outdoor',
      price: 150,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=800&q=80',
      features: ['สปอตไลท์ LED พลังงานสูง', 'ระเบียงชมวิวพาโนรามา', 'เช่าแร็กเก็ตและลูก', 'ที่ปัดน้ำฝนพื้น'],
      slots: ['16:00 - 18:00', '18:00 - 20:00', '20:00 - 22:00']
    },
    {
      id: 'court-3',
      name: 'VIP Court — Premium Experience',
      description: 'สนามส่วนตัวดีไซน์พิเศษ สำหรับการเล่นที่เป็นส่วนตัวพรีเมียม เลานจ์โซฟาพักผ่อน และห้องอาบน้ำในตัว',
      type: 'vip',
      price: 400,
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=800&q=80',
      features: ['ห้อง VIP ส่วนตัว', 'ผ้าขนหนูเย็นและสุขภัณฑ์', 'เลานจ์โซนแอร์', 'เครื่องดื่มพรีเมียม'],
      slots: ['08:00 - 10:00', '12:00 - 14:00', '15:00 - 17:00', '18:00 - 20:00', '20:00 - 22:00']
    },
    {
      id: 'court-4',
      name: 'Training Court — Solo Practice',
      description: 'สนามฝึกซ้อมส่วนตัวพร้อมเครื่องยิงลูกอัตโนมัติความแม่นยำสูง สามารถปรับความแรงและทิศทางได้',
      type: 'training',
      price: 120,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80',
      features: ['เครื่องยิงลูกล้อหมุน', 'ลูกเทนนิส 100 ลูก', 'กรวยและระยะมาร์เกอร์', 'กระจกฝึกสวิงด้านข้าง'],
      slots: ['08:00 - 10:00', '10:00 - 12:00', '14:00 - 16:00', '16:00 - 18:00']
    }
  ];

  const filteredCourts = activeFilter === 'all' 
    ? courtsData 
    : courtsData.filter(court => court.type === activeFilter);

  return (
    <section id="court-gallery" className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-[#a1b415] text-xs font-semibold uppercase tracking-wider block mb-2">
              Instant Booking Arena
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#101418]">
              จองสนามที่คุณต้องการได้ทันที
            </h2>
            <p className="mt-4 text-gray-500 font-light max-w-xl">
              เลือกคอร์ทในร่ม ปรับอากาศ คอร์ทเปิดโล่ง ทลายพิกัด หรือเครื่องยิงลูกซ้อมสไตล์เดี่ยว ค้นหาตารางว่างจองเล่นได้รวดเร็วแบบเรียลไทม์
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 mt-8 md:mt-0 bg-gray-50 p-1.5 rounded-full border border-gray-100 self-start">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#101418] text-white shadow-md'
                  : 'text-gray-400 hover:text-[#101418]'
              }`}
            >
              ทั้งหมด
            </button>
            <button
              onClick={() => setActiveFilter('indoor')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeFilter === 'indoor'
                  ? 'bg-[#101418] text-white shadow-md'
                  : 'text-gray-400 hover:text-[#101418]'
              }`}
            >
              ในร่ม (Indoor)
            </button>
            <button
              onClick={() => setActiveFilter('outdoor')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeFilter === 'outdoor'
                  ? 'bg-[#101418] text-white shadow-md'
                  : 'text-gray-400 hover:text-[#101418]'
              }`}
            >
              กลางแจ้ง (Outdoor)
            </button>
            <button
              onClick={() => {
                // filter vip and training
                setActiveFilter('vip');
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeFilter === 'vip' || activeFilter === 'training'
                  ? 'bg-[#101418] text-white shadow-md'
                  : 'text-gray-400 hover:text-[#101418]'
              }`}
            >
              VIP / ฝึกเดี่ยว
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCourts.map((court) => (
            <div 
              key={court.id} 
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative overflow-hidden h-80">
                <img 
                  src={court.image} 
                  alt={court.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Rating overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-[#101418] shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>{court.rating.toFixed(1)}</span>
                </div>

                {/* Court Category Label overlay */}
                <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm text-[#e1f549] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  <span>{court.type === 'indoor' ? 'Indoor' : court.type === 'outdoor' ? 'Outdoor' : court.type === 'vip' ? 'VIP' : 'Training'}</span>
                </div>
              </div>

              {/* Informative Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#101418] group-hover:text-teal-600 transition-colors duration-300">
                      {court.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="block text-2xl font-black text-black">
                        {court.price} ฿
                      </span>
                      <span className="block text-xs text-gray-400 font-medium tracking-wide">
                        ชั่วโมงละ
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-500 text-sm leading-relaxed font-light">
                    {court.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {court.features.map((feat, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-50 border border-gray-100 text-gray-600 text-xs px-3 py-1 rounded-md flex items-center gap-1.5 font-sans"
                      >
                        <CheckCircle className="w-3 h-3 text-teal-600 shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Instant Book CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-light">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>ALM Arena Center, Phayathai</span>
                  </div>

                  <button
                    onClick={() => onBookCourt(court)}
                    className="bg-[#101418] text-white hover:bg-[#e1f549] hover:text-black hover:font-bold transition-all px-6 py-3 rounded-full text-xs font-semibold tracking-wider cursor-pointer active:scale-95 flex items-center gap-2 "
                  >
                    <span>จองสนามนี้</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
