# 🎾 ALM Impact Tennis

ยินดีต้อนรับสู่ **ALM Impact Tennis** — แพลตฟอร์มจับคู่และจองสนามเทนนิสระดับพรีเมียม ขับเคลื่อนด้วยระบบแมตช์เมคเกอร์อัจฉริยะ (Smart Matchmaker) ตามมาตรฐานระดับสากล **NTRP (1.5 – 7.0)** เพื่อสังคมนักเล่นเทนนิสที่ต้องการความคุ้มค่าและมิตรภาพในการเล่นอย่างแท้จริง

---

## ✨ คุณสมบัติเด่น (Core Features)

* **🧠 Smart Matchmaking Simulator**: จำลองการค้นหาคู่ตีอัจฉริยะแบบเรียลไทม์ตามระดับฝีมือมาตรฐานสากล (NTRP) ค้นหาพาร์ตเนอร์ที่ฝีมือสูสีที่สุดภายใน 30 นาที
* **🏟️ Court Spotlight & Gallery**: ระบบพรีวิวสนามเทนนิสระดับลักชัวรี (คอร์ทในร่มแบบติดแอร์, คอร์ทกลางแจ้งมาตรฐานแข่งขัน) พร้อมแสดงตารางเวลาความว่างแบบ Interactive
* **📊 Live Stats & Activity**: แผงสถิติแบบเคลื่อนไหว (Smooth Count-Up Action) ที่มีระบบ LIVE Counter แสดงจำนวนคู่ที่แมตช์สำเร็จแล้วในวันนี้แบบเรียลไทม์
* **💎 Premium Glassmorphism UI**: การออกแบบส่วนติดต่อผู้ใช้งานที่เน้นความหรูหรา ทันสมัย (High-Fidelity) สไตล์ Dark Mode พร้อมแอนิเมชันที่ลื่นไหล
* **🇹🇭 Fully Thai-Optimized Typography**: แสดงผลภาษาไทยด้วยฟอนต์สุดพรีเมียม **IBM Plex Sans Thai** อ่านง่าย สวยงาม คมชัดในทุกมิติ

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

* **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool**: [Vite 6](https://vite.dev/) (พอร์ตการรันเริ่มต้น: `3001`)
* **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animations**: [Motion](https://motion.dev/) (Framer Motion)
* **Fonts**: IBM Plex Sans Thai & Space Grotesk (Google Fonts)

---

## 🚀 เริ่มต้นใช้งานในเครื่องของคุณ (Local Development)

### 📋 สิ่งที่ต้องเตรียม (Prerequisites)
* [Node.js](https://nodejs.org/) (แนะนำเวอร์ชัน 18+ หรือล่าสุด โดยในเครื่องของคุณใช้ `v22.16.0`)
* NPM (โดยในเครื่องของคุณใช้ `10.9.2`)

### ⚙️ ขั้นตอนการรันระบบ

1. **ดาวน์โหลดและติดตั้ง Dependencies**:
   ```bash
   npm install
   ```


2. **รันเซิร์ฟเวอร์สำหรับพัฒนา (Development Server)**:
   ```bash
   npm run dev
   ```
   * *หมายเหตุ: โปรเจกต์นี้ได้รับการตั้งค่าให้รันบนพอร์ต **3001** เพื่อป้องกันการชนกับแอปพลิเคชันเดิมของคุณที่พอร์ต 3000*
   * เปิดเว็บบราวเซอร์และเข้าไปที่: [http://localhost:3001](http://localhost:3001)

---

## 📂 โครงสร้างโฟลเดอร์หลัก (Project Structure)

```text
├── src/
│   ├── components/      # ชิ้นส่วน UI หลัก (Header, Hero, Stats, Simulator, etc.)
│   ├── types.ts         # ไฟล์จำกัดประเภทข้อมูล (Interfaces & Types)
│   ├── App.tsx          # ส่วนประกอบหลักของแอปพลิเคชัน
│   ├── main.tsx         # จุดเริ่มต้นเข้าสู่ React
│   └── index.css        # สไตล์ระบบและการตั้งค่าธีม/ฟอนต์
├── .env.example         # แม่แบบไฟล์ตั้งค่าตัวแปรระบบ
├── vite.config.ts       # การตั้งค่า Vite Compiler
└── package.json         # รายการ dependencies และสคริปต์รันระบบ
```

---

ออกแบบและพัฒนาด้วยใจรักเพื่อยกระดับวงการเทนนิสไทย 🎾✨