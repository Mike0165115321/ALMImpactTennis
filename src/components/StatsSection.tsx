import { useEffect, useState } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
  countdown?: boolean;
  startVal?: number;
}

function CountUp({ end, suffix = '', prefix = '', duration = 2000, decimals = 0, countdown = false, startVal = 0 }: CountUpProps) {
  const [count, setCount] = useState(startVal);

  useEffect(() => {
    let startTime: number | null = null;
    const start = startVal;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      let currentVal = start;
      if (countdown) {
        currentVal = start - progress * (start - end);
      } else {
        currentVal = start + progress * (end - start);
      }

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, decimals, countdown, startVal]);

  return (
    <span>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  // Live simulated match counter to make the page feel alive!
  const [liveMatches, setLiveMatches] = useState(148);

  useEffect(() => {
    // Periodically increment live matches to show active traffic
    const interval = setInterval(() => {
      setLiveMatches(prev => prev + (Math.random() > 0.4 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white border-b border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Stat 1 */}
          <div className="text-center px-4 pt-6 md:pt-0">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101418] tracking-tight">
              <CountUp end={6} suffix="+" duration={1500} />
            </span>
            <span className="block text-xs md:text-sm text-gray-400 font-medium tracking-wide mt-3 uppercase">
              สนามพร้อมใช้งาน
            </span>
          </div>

          {/* Stat 2 */}
          <div className="text-center px-4 pt-6 md:pt-0">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101418] tracking-tight flex items-center justify-center gap-2">
              <span>NTRP</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </span>
            <span className="block text-xs md:text-sm text-gray-400 font-medium tracking-wide mt-3 uppercase">
              <CountUp startVal={1.0} end={1.5} decimals={1} duration={1200} /> – <CountUp startVal={5.0} end={7.0} decimals={1} duration={1500} /> ทุกระดับฝีมือ
            </span>
          </div>

          {/* Stat 3 */}
          <div className="text-center px-4 pt-6 md:pt-0">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101418] tracking-tight">
              <CountUp startVal={60} end={30} suffix="m" duration={1800} countdown={true} />
            </span>
            <span className="block text-xs md:text-sm text-gray-400 font-medium tracking-wide mt-3 uppercase">
              เฉลี่ยเจอคู่เล่นภายใน
            </span>
          </div>

          {/* Stat 4 - Live Dynamic Counter! */}
          <div className="text-center px-4 pt-6 md:pt-0">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101418] tracking-tight text-emerald-600 transition-all duration-500">
              <CountUp end={liveMatches} suffix="+" duration={2000} />
            </span>
            <span className="block text-xs md:text-sm text-gray-400 font-medium tracking-wide mt-3 uppercase flex items-center justify-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              แมตช์สำเร็จแล้ววันนี้ (LIVE)
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
