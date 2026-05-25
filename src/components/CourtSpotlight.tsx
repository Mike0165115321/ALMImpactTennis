interface SpotlightItem {
  title: string;
  description: string;
  image: string;
  priceTag: string;
}

export default function CourtSpotlight() {
  const courts: SpotlightItem[] = [
    {
      title: 'Indoor Court A & B',
      description: 'สนามในร่ม ปรับอากาศ มาตรฐานการแข่งขันระดับโปรแกรม',
      image: 'https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=600&q=80',
      priceTag: 'ราคาเริ่มต้น 200 บาท/ชม.'
    },
    {
      title: 'Outdoor Hard Court',
      description: 'สนามกลางแจ้ง พื้น Hard Court มาตรฐานเพื่อความท้าทายกลางสปอตไลท์',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&q=80',
      priceTag: 'ราคาเริ่มต้น 150 บาท/ชม.'
    },
    {
      title: 'VIP Premium Court',
      description: 'สัมผัสความเอ็กซ์คลูซีฟ พร้อมสิ่งอำนวยความสะดวกและห้องเลานจ์ผู้เล่น',
      image: 'https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=600&q=80',
      priceTag: 'ราคาเริ่มต้น 400 บาท/ชม.'
    }
  ];

  return (
    <section className="bg-gray-50 py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title and Intro Subtitle (similar to Image 1 layout) */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#101418]">
            สนามและบรรยากาศ<br />ที่ออกแบบมาเพื่อนักเทนนิส
          </h2>
          <p className="mt-5 text-gray-500 font-light leading-relaxed">
            สัมผัสสนามคุณภาพพรีเมียมร่วมสองสไตล์พร้อมระบบแสงสว่างมาตรฐานสากล ที่ถูกสร้างขึ้นมาเพื่อรองรับการกระแทกและจังหวะเคลื่อนไหวทั้งสำหรับโปรทัวร์เนอร์และการพัฒนาฝีมือ
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courts.map((court, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={court.image} 
                  alt={court.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-transform duration-700" 
                />
                
                {/* Visual pricing badge overlaid */}
                <div className="absolute bottom-4 left-4 bg-[#101418]/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-md tracking-wider">
                  {court.priceTag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#101418] group-hover:text-teal-600 transition-colors duration-300">
                  {court.title}
                </h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed font-light">
                  {court.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
