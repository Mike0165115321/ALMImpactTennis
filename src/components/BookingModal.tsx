import { useState } from 'react';
import { Court } from '../types';
import { X, Calendar, Clock, User, Phone, Check, ShieldCheck, QrCode, AlertCircle, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  court: Court | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ court, isOpen, onClose }: BookingModalProps) {
  if (!isOpen || !court) return null;

  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [selectedDate, setSelectedDate] = useState<string>('2026-05-26');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [broadcastInvite, setBroadcastInvite] = useState<boolean>(true);
  
  // Validation errors
  const [error, setError] = useState<string>('');

  const handleNextStep = () => {
    if (!selectedSlot) {
      setError('กรุณาเลือกช่วงเวลาที่คุณต้องการจองก่อน');
      return;
    }
    if (!name.trim()) {
      setError('กรุณากรอกชื่อผู้เข้าจอง');
      return;
    }
    if (!phone.replace(/\D/g, '') || phone.length < 9) {
      setError('กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง');
      return;
    }
    setError('');
    setStep('payment');
  };

  const handlePaymentConfirm = () => {
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('details');
    setSelectedSlot('');
    setName('');
    setPhone('');
    setError('');
    onClose();
  };

  const dates = [
    { label: 'อังคาร 26 พ.ค.', value: '2026-05-26' },
    { label: 'พุธ 27 พ.ค.', value: '2026-05-27' },
    { label: 'พฤหัสบดี 28 พ.ค.', value: '2026-05-28' },
    { label: 'ศุกร์ 29 พ.ค.', value: '2026-05-29' },
    { label: 'เสาร์ 30 พ.ค.', value: '2026-05-30' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark persistent backdrop */}
      <div 
        onClick={resetAndClose}
        className="absolute inset-0 bg-[#101418]/80 backdrop-blur-sm animate-fade-in" 
      />

      {/* Main Modal Container */}
      <div className="relative bg-white text-[#101418] rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 border border-gray-100 animate-scale-up flex flex-col max-h-[90vh]">
        
        {/* Header bar */}
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block">Court Booking</span>
            <h3 className="text-lg font-extrabold text-[#101418] mt-1">{court.name}</h3>
          </div>
          <button 
            onClick={resetAndClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center cursor-pointer text-gray-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Contents */}
        <div className="p-6 overflow-y-auto flex-grow">
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === 'details' ? 'bg-[#101418]' : 'bg-[#e1f549]'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === 'payment' ? 'bg-[#101418]' : step === 'success' ? 'bg-[#e1f549]' : 'bg-gray-200'}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-colors ${step === 'success' ? 'bg-[#101418]' : 'bg-gray-200'}`} />
          </div>

          {error && (
            <div className="bg-rose-50 border border-rose-100 text-rose-800 text-xs p-3.5 rounded-xl mb-6 flex items-start gap-2.5">
              <AlertCircle className="w-4.5 h-4.5 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* STEP 1: Details and Slots Choice */}
          {step === 'details' && (
            <div className="space-y-6">
              
              {/* Date pickers */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#101418]" />
                  1. เลือกวันที่ต้องการเล่น
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {dates.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => setSelectedDate(d.value)}
                      className={`px-4 py-3 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer border ${
                        selectedDate === d.value
                          ? 'bg-[#101418] text-white border-[#101418] shadow-sm'
                          : 'bg-white text-gray-600 border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots selection */}
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#101418]" />
                  2. เลือกช่วงเวลาสองชั่วโมง
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {court.slots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 px-4 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#e1f549] text-black border-[#e1f549] font-bold shadow-sm'
                            : 'bg-white text-gray-600 border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact Register form */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#101418]" />
                  3. ข้อมูลติดต่อผู้เดินทางเข้ามาเล่น
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[11px] font-semibold text-gray-400 block mb-1">ชื่อสตรีมเกอร์/ชื่อเล่น</span>
                    <input 
                      type="text" 
                      placeholder="เช่น คุณนที"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#101418] transition-all"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-gray-400 block mb-1">เบอร์โทรติดต่อผู้จอง</span>
                    <input 
                      type="tel" 
                      placeholder="เช่น 081-234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 px-4 py-3 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#101418] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Matchmaker automated integration toggle */}
              <div className="bg-teal-50/60 border border-teal-100 p-4 rounded-2xl flex items-start gap-3 mt-4">
                <input 
                  type="checkbox" 
                  id="broadcast-toggle"
                  checked={broadcastInvite}
                  onChange={(e) => setBroadcastInvite(e.target.checked)}
                  className="mt-1 accent-teal-600 rounded"
                />
                <label htmlFor="broadcast-toggle" className="text-xs text-teal-950 font-normal cursor-pointer">
                  <span className="font-bold block text-teal-800 mb-0.5">เปิดระบบจับคู่อัตโนมัติ (NTRP Broadcast Request)</span>
                  ระบบจะช่วยสร้างห้องเล่นสาธารณะและเชิญเพื่อนๆ ที่มีระดับความสามารถ NTRP ใกล้เคียงกันให้เข้ามาร่วมเล่นด้วยกันโดยคุณไม่เสียค่าบริการส่วนต้วเพิ่ม!
                </label>
              </div>

            </div>
          )}

          {/* STEP 2: PromptPay Simulated Checkout */}
          {step === 'payment' && (
            <div className="space-y-6 text-center py-2">
              <div className="bg-gray-50 p-5 rounded-2xl text-left border border-gray-100">
                <span className="text-xs text-gray-400 font-bold block">สรุปการจองสนาม</span>
                <div className="mt-3 grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-gray-400">คอร์ท:</span>
                  <span className="text-right font-bold text-black">{court.name}</span>
                  <span className="text-gray-400">วันที่จอง:</span>
                  <span className="text-right font-bold text-black">{selectedDate}</span>
                  <span className="text-gray-400">ช่วงเวลา:</span>
                  <span className="text-right font-bold text-black">{selectedSlot}</span>
                  <span className="text-gray-400">ผู้จอง:</span>
                  <span className="text-right font-bold text-[#101418]">{name} ({phone})</span>
                  <div className="col-span-2 border-t border-dashed border-gray-200 my-2" />
                  <span className="text-sm font-bold text-[#101418]">ยอดชำระสุทธิ:</span>
                  <span className="text-right text-lg font-black text-teal-700">{(court.price * 2).toFixed(2)} บาท</span>
                </div>
              </div>

              {/* Simulated PromptPay QR Graphic Box */}
              <div className="bg-slate-50 border border-gray-200 p-6 rounded-3xl inline-flex flex-col items-center">
                <div className="flex items-center gap-2 mb-3 bg-gradient-to-r from-teal-800 to-cyan-800 text-white px-5 py-2.5 rounded-lg">
                  <span className="font-sans font-black tracking-widest text-xs">Prompt Pay</span>
                </div>
                
                {/* QR block frame */}
                <div className="p-3 bg-white border border-gray-200 rounded-xl relative">
                  <QrCode className="w-48 h-48 text-[#101418]" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 bg-[#e1f549] rounded-xl border-4 border-white flex items-center justify-center font-bold text-[10px]">ALM</div>
                  </div>
                </div>

                <span className="text-[11px] text-gray-500 font-medium tracking-wide mt-3.5 block">
                  สแกนเพื่อจ่ายค่าสนามจำนวน <span className="font-bold text-black">{(court.price * 2).toFixed(2)} ฿</span>
                </span>
              </div>

              <div className="flex items-center gap-2 justify-center text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ชำระผ่านระบบ QR Code ปลอดภัย ยืนยันสถานะเรียลไทม์ทันที</span>
              </div>
            </div>
          )}

          {/* STEP 3: Complete screen */}
          {step === 'success' && (
            <div className="text-center py-6 space-y-6">
              {/* Confirmed check badge */}
              <div className="w-20 h-20 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                <Check className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#101418]">จองสนามเสร็จสิ้น!</h3>
                <p className="mt-2 text-gray-500 text-sm max-w-sm mx-auto font-light leading-relaxed">
                  ระบบได้รับการชำระเงินและออกตั๋วสนามเรียบร้อย ข้อมูลการยืนยันถูกส่งไปยังเบอร์โทรศัพท์ <span className="font-semibold text-black">{phone}</span> เรียบร้อยแล้ว
                </p>
              </div>

              {/* Receipt Visual info */}
              <div className="bg-gray-50 p-5 rounded-2xl max-w-sm mx-auto border border-gray-100 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">เลขที่รายการสั่งซื้อ:</span>
                  <span className="font-mono font-bold text-black">ALM-2026-99381</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">คอร์ท:</span>
                  <span className="font-bold text-black">{court.name}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-gray-400">วันและเวลา:</span>
                  <span className="text-teal-700">{selectedDate} / {selectedSlot}</span>
                </div>
                {broadcastInvite && (
                  <div className="bg-teal-50 border border-teal-100/50 p-2.5 rounded-lg text-[10px] text-teal-800 font-medium tracking-wide leading-relaxed">
                    ★ ระบบจับคู่อัจฉริยะกำลังค้นหาพาร์ทเนอร์ระดับ NTRP ของคุณให้โดยอัตโนมัติ คุณจะได้รับ SMS แจ้งเตือนเมื่อมีเพื่อนได้รับการจับคู่สมบูรณ์
                  </div>
                )}
              </div>

              <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
                หากมีข้อสงสัยเพิ่มเติมร่วมแก้ปัญหาหรือขอเลื่อนสนามผ่านเจ้าหน้าที่ ติดต่อช่องทาง Line OA: <span className="font-bold text-black">@almtennis</span>
              </p>
            </div>
          )}

        </div>

        {/* Footer actions panel */}
        <div className="p-6 border-t border-gray-100 flex items-center justify-end bg-gray-50/50">
          {step === 'details' && (
            <button
              onClick={handleNextStep}
              className="w-full bg-[#101418] hover:bg-[#e1f549] hover:text-black hover:font-bold text-white py-3.5 rounded-full text-xs font-semibold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ขั้นตอนถัดไป: สแกนจ่ายเงิน</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {step === 'payment' && (
            <div className="w-full flex gap-3">
              <button
                onClick={() => setStep('details')}
                className="flex-1 bg-white border border-gray-200 text-gray-600 hover:border-gray-400 text-xs py-3.5 rounded-full font-semibold transition-all cursor-pointer"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={handlePaymentConfirm}
                className="flex-1 bg-teal-700 hover:bg-teal-800 text-white py-3.5 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-lg shadow-teal-700/10"
              >
                ยืนยันการโอนเงิน
              </button>
            </div>
          )}

          {step === 'success' && (
            <button
              onClick={resetAndClose}
              className="w-full bg-[#101418] hover:bg-neutral-800 text-white py-3.5 rounded-full text-xs font-semibold transition-all cursor-pointer"
            >
              ปิดหน้าต่างสรุป
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
