import { useState } from 'react';
import { PartnerProfile } from '../types';
import { Users, Search, Play, Check, Speech, Sliders, MapPin, Gauge, Star, Trophy, Sparkles } from 'lucide-react';

export default function MatchingSimulator() {
  const [myNtrp, setMyNtrp] = useState<number>(3.5);
  const [gender, setGender] = useState<'ชาย' | 'หญิง' | 'ไม่ระบุ'>('ชาย');
  const [prefType, setPrefType] = useState<'equal' | 'higher' | 'lower'>('equal');
  const [playStyle, setPlayStyle] = useState<string>('All-Court');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchCompleted, setSearchCompleted] = useState<boolean>(false);
  const [hasSentInviteId, setHasSentInviteId] = useState<string[]>([]);

  // Prepopulated simulated partner database for high-fidelity interactive feedback
  const simulatedPartners: PartnerProfile[] = [
    {
      id: 'p-1',
      name: 'คุณปกรณ์ (Korn)',
      ntrp: 3.5,
      gender: 'ชาย',
      playStyle: 'Baseline Counterpuncher',
      matchesCount: 48,
      avatarColor: 'bg-teal-600',
      preferredTime: 'วันธรรมดา 18:00 - 20:00',
      reputation: 4.9
    },
    {
      id: 'p-2',
      name: 'คุณแพรไหม (Prae)',
      ntrp: 3.5,
      gender: 'หญิง',
      playStyle: 'All-Court Aggressive',
      matchesCount: 32,
      avatarColor: 'bg-rose-500',
      preferredTime: 'เสาร์-อาทิตย์ ตลอดทั้งวัน',
      reputation: 4.8
    },
    {
      id: 'p-3',
      name: 'โค้ชกิตติภูมิ (Coach Kit)',
      ntrp: 4.5,
      gender: 'ชาย',
      playStyle: 'Big Serve & Volley',
      matchesCount: 154,
      avatarColor: 'bg-amber-600',
      preferredTime: 'วันธรรมดาช่วงเช้า / มืด',
      reputation: 5.0
    },
    {
      id: 'p-4',
      name: 'คุณวิชญะ (Vicky)',
      ntrp: 3.0,
      gender: 'ชาย',
      playStyle: 'Spin Master',
      matchesCount: 19,
      avatarColor: 'bg-blue-600',
      preferredTime: 'วันอาทิตย์ 16:00 - 18:00',
      reputation: 4.6
    },
    {
      id: 'p-5',
      name: 'น้องณิชา (Nicha)',
      ntrp: 2.5,
      gender: 'หญิง',
      playStyle: 'Consistent Baseline',
      matchesCount: 15,
      avatarColor: 'bg-pink-500',
      preferredTime: 'วันหยุดช่วงเช้าตรู่',
      reputation: 4.7
    },
    {
      id: 'p-6',
      name: 'คุณนพพล (Nopp)',
      ntrp: 4.0,
      gender: 'ชาย',
      playStyle: 'All-Court tactical',
      matchesCount: 89,
      avatarColor: 'bg-[#101418]',
      preferredTime: 'จันทร์-พุธ หลัง 19:00',
      reputation: 4.9
    }
  ];

  const handleStartSearch = () => {
    setIsSearching(true);
    setSearchCompleted(false);
    setHasSentInviteId([]);
    setTimeout(() => {
      setIsSearching(false);
      setSearchCompleted(true);
      
      // Auto scroll to results nicely
      const resultsSection = document.getElementById('match-results');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 2000);
  };

  const handleSendInvite = (partnerId: string) => {
    setHasSentInviteId(prev => [...prev, partnerId]);
  };

  // Logic to filter matching partners based on preference
  const getFilteredResults = () => {
    return simulatedPartners.filter(partner => {
      // NTRP filter logic
      if (prefType === 'equal') {
        return Math.abs(partner.ntrp - myNtrp) <= 0.5;
      } else if (prefType === 'higher') {
        return partner.ntrp > myNtrp;
      } else {
        return partner.ntrp < myNtrp;
      }
    });
  };

  const results = getFilteredResults();

  return (
    <section id="matching" className="bg-gray-50 py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left instructions panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#101418] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-2">
              <Trophy className="w-3.5 h-3.5 text-[#e1f549]" />
              <span>Smart NTRP matching</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#101418] leading-tight">
              ค้นพบคู่เล่นเทนนิส<br />สไตล์และฝีมือที่เข้ากัน
            </h2>
            
            <p className="text-gray-500 font-light leading-relaxed">
              สุ่มค้นหาพาร์เนอร์ตีเทนนิสทักษะระดับเดียวกันตามมาตรฐาน NTRP ไม่จำกัดรูปแบบสตรีมเดี่ยวและคู่ สามารถเลือกความสูสี ระดับเพื่อการแชร์สติทบสอบแร็กเก็ต หรือการฝึกสอนให้ตรงเป้าประสงค์ส่วนตัวของคุณ
            </p>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-4">
              <h4 className="font-bold text-sm text-[#101418] flex items-center gap-1.5 mb-1">
                <Gauge className="w-4 h-4 text-teal-600" />
                เข้าใจระดับทักษะ NTRP ย่อส่วน
              </h4>
              <ul className="text-xs text-gray-500 space-y-2.5 font-light">
                <li><strong className="text-[#101418]">NTRP 1.5 – 2.0:</strong> มือใหม่เริ่มต้น เข้าใจกติกาทั่วไป เสิร์ฟและอันเดอร์ลูปจำกัด</li>
                <li><strong className="text-[#101418]">NTRP 2.5 – 3.0:</strong> ควบคุมลูกหน้าดี ทิศทางโฟร์แฮนด์มีลูกเล่น มั่นคงเป็นบางสังหวะ</li>
                <li><strong className="text-[#101418]">NTRP 3.5 – 4.0:</strong> ตีโต้สปีดสม่ำเสมอ เริ่มเข้าใจแทคติกเชิงรุกประเภทคู่ ดวลหลังเส้นปลอดภัย</li>
                <li><strong className="text-[#101418]">NTRP 4.5 ขึ้นไป:</strong> ทรงฝีมือชั้นสูง วางลูกแม่นยำ พร้อมลุยแมตช์หรือเป็นสโมรสรเล่นชั้นแนวหน้า</li>
              </ul>
            </div>
          </div>

          {/* Right interactive console block */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
            
            {/* Top decorative bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-[#e1f549]" />

            <h3 className="text-xl font-bold text-[#101418] mb-8 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-teal-600" />
              กำหนดข้อมูลฝีมือตัวตนคุณ
            </h3>

            {/* Input Selection controls */}
            <div className="space-y-6">
              
              {/* Row 1: Gender and NTRP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    ระดับความเหมาะสมทางเพศ
                  </span>
                  <div className="flex gap-2">
                    {['ชาย', 'หญิง', 'ไม่ระบุ'].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGender(g as any)}
                        className={`flex-1 py-2.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                          gender === g 
                            ? 'bg-[#101418] text-white border-[#101418]'
                            : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    คะแนน NTRP ของคุณ ({myNtrp.toFixed(1)})
                  </span>
                  <select 
                    value={myNtrp}
                    onChange={(e) => setMyNtrp(parseFloat(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none"
                  >
                    <option value={1.5}>NTRP 1.5 - มือใหม่เบื้องต้น</option>
                    <option value={2.0}>NTRP 2.0 - มือใหม่พอโต้ได้</option>
                    <option value={2.5}>NTRP 2.5 - เริ่มตีทิศทางคงที่</option>
                    <option value={3.0}>NTRP 3.0 - โต้สม่ำเสมอ แรกลูกดี</option>
                    <option value={3.5}>NTRP 3.5 - ทักษะกลาง แข่งกระชับมิตร</option>
                    <option value={4.0}>NTRP 4.0 - ดีไซน์แมตช์ มีแต้มเด็ดขาด</option>
                    <option value={4.5}>NTRP 4.5 - ระดับกึ่งอาชีพ / ทัวร์นาเมนต์</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Preference types */}
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  คุณต้องการคู่เล่นระดับใด?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setPrefType('equal')}
                    className={`py-3 px-4 rounded-xl text-left border transition-all cursor-pointer ${
                      prefType === 'equal'
                        ? 'bg-teal-50 text-teal-900 border-teal-200 font-bold'
                        : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className="block text-sm">สูสี ฝีมือสมน้ำสมเนื้อ</span>
                    <span className="block text-[10px] text-gray-400 font-normal mt-1">NTRP ±0.5 ช่วงสูสีดีที่สุด</span>
                  </button>

                  <button
                    onClick={() => setPrefType('higher')}
                    className={`py-3 px-4 rounded-xl text-left border transition-all cursor-pointer ${
                      prefType === 'higher'
                        ? 'bg-amber-50 text-amber-900 border-amber-200 font-bold'
                        : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className="block text-sm">ครูฝึกซ้อม / เก่งกว่า</span>
                    <span className="block text-[10px] text-gray-400 font-normal mt-1">NTRP สูงขึ้นเพื่อทักษะที่เพิ่มพูน</span>
                  </button>

                  <button
                    onClick={() => setPrefType('lower')}
                    className={`py-3 px-4 rounded-xl text-left border transition-all cursor-pointer ${
                      prefType === 'lower'
                        ? 'bg-rose-50 text-rose-900 border-rose-200 font-bold'
                        : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200'
                    }`}
                  >
                    <span className="block text-sm">ให้คำแนะนำ / เบากว่า</span>
                    <span className="block text-[10px] text-gray-400 font-normal mt-1">NTRP น้อยกว่า เพื่อความสนุกเบาๆ</span>
                  </button>
                </div>
              </div>

              {/* Row 3: Play style selection */}
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  สไตล์การเล่นของคุณ
                </span>
                <div className="flex flex-wrap gap-2">
                  {['All-Court', 'Aggressive Baseliner', 'Serve & Volley', 'Spin Strategist', 'Defensive Counterpuncher'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setPlayStyle(style)}
                      className={`text-xs px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                        playStyle === style
                          ? 'bg-[#101418] text-white font-bold'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Search Button */}
              <div className="pt-4">
                <button
                  onClick={handleStartSearch}
                  disabled={isSearching}
                  className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold py-4 rounded-xl transition-all cursor-pointer disabled:bg-neutral-200 disabled:text-neutral-500 disabled:cursor-not-allowed flex items-center justify-center gap-3.5 shadow-lg shadow-teal-700/10"
                >
                  {isSearching ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span>กำลังวิเคราะห์สถิติ NTRP ค้นหากลุ่มผู้เล่น...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>ค้นหาพาร์ทเนอร์ฝีมือตรงกัน</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Radar Simulation animation overlay during Search */}
            {isSearching && (
              <div className="absolute inset-0 bg-[#101418]/90 z-20 flex flex-col justify-center items-center text-white p-6 animate-fade-in">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-teal-500/20 rounded-full" />
                  <div className="absolute inset-4 border border-teal-500/30 rounded-full" />
                  <div className="absolute inset-0 border-l-2 border-l-teal-400 rounded-full animate-spin" />
                  <Users className="w-10 h-10 text-teal-400 animate-pulse" />
                </div>
                <h4 className="text-lg font-black tracking-wide mt-6">NTRP Matchmaker Active</h4>
                <p className="text-[11px] text-gray-400 mt-2 text-center max-w-xs font-light">
                  ค้นหาสมาชิกคลับที่กำลังมองหารายการดวลพิกัดเดียวกันในกรุงเทพฯ ประมวลผลตารางและความน่าเชื่อถือมารยาท...
                </p>
              </div>
            )}

            {/* Simulated matching partners listing panel */}
            {searchCompleted && (
              <div id="match-results" className="mt-10 pt-8 border-t border-gray-100 space-y-6 animate-fade-in-down">
                <div className="flex justify-between items-center bg-teal-50/70 p-3.5 rounded-xl border border-teal-100/50">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-bold text-teal-950">พบพาร์ทเนอร์ที่มีทักษะใกล้เคียงในระบบ {results.length} ท่าน!</span>
                  </div>
                  <span className="text-[10px] bg-teal-200/50 text-teal-900 px-2 py-0.5 rounded-full font-bold">NTRP Validated</span>
                </div>

                <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                  {results.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-sm text-gray-400 font-light">ไม่พบผู้เล่นตรงสเปกในช่วงเวลานี้ ลองปรับระดับ NTRP หรือทิศทางความสูสีให้กว้างขึ้น</p>
                    </div>
                  ) : (
                    results.map((partner) => {
                      const hasSent = hasSentInviteId.includes(partner.id);
                      return (
                        <div 
                          key={partner.id} 
                          className="bg-white hover:bg-gray-50 border border-gray-100 rounded-2xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 transition-all"
                        >
                          <div className="flex items-center gap-3.5">
                            {/* Color Avatar */}
                            <div className={`w-12 h-12 rounded-full ${partner.avatarColor} flex items-center justify-center text-white text-sm font-bold shadow-inner shrink-0`}>
                              {partner.name.charAt(4)}
                            </div>
                            
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-[#101418]">{partner.name}</span>
                                <span className="bg-[#e1f549] text-[10px] text-black font-semibold px-2 py-0.5 rounded-full">
                                  NTRP {partner.ntrp.toFixed(1)}
                                </span>
                              </div>

                              <div className="flex flex-wrap items-center mt-1 gap-x-3 gap-y-1 text-xs text-gray-400 font-light">
                                <span className="flex items-center gap-1">
                                  <Sliders className="w-3.5 h-3.5 text-gray-400" />
                                  {partner.playStyle}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                  {partner.preferredTime}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 sm:self-center">
                            <div className="text-right mr-2 hidden sm:block">
                              <div className="flex items-center gap-1 text-xs text-[#101418] justify-end">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                                <span className="font-bold">{partner.reputation.toFixed(1)}</span>
                              </div>
                              <span className="text-[10px] text-gray-400 block font-light mt-0.5">({partner.matchesCount} แมตช์สะสม)</span>
                            </div>

                            {hasSent ? (
                              <span className="bg-emerald-50 text-emerald-800 text-xs px-4 py-2.5 rounded-xl font-bold border border-emerald-100 flex items-center gap-1.5 w-full sm:w-auto justify-center">
                                <Check className="w-4 h-4 text-emerald-600" />
                                ส่งคำชวนสำเร็จ!
                              </span>
                            ) : (
                              <button
                                onClick={() => handleSendInvite(partner.id)}
                                className="bg-[#101418] hover:bg-neutral-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center gap-1.5 active:scale-95"
                              >
                                <Play className="w-3 h-3 fill-[#e1f549] text-[#e1f549]" />
                                ท้าดวลกระชับมิตร
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
