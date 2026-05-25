export interface Court {
  id: string;
  name: string;
  description: string;
  type: 'indoor' | 'outdoor' | 'vip' | 'training';
  price: number;
  rating: number;
  image: string;
  features: string[];
  slots: string[];
}

export interface PartnerProfile {
  id: string;
  name: string;
  ntrp: number;
  playStyle: string;
  matchesCount: number;
  avatarUrl?: string;
  avatarColor: string;
  gender: 'ชาย' | 'หญิง' | 'ไม่ระบุ';
  preferredTime: string;
  reputation: number;
}

export interface Testimonial {
  id: string;
  name: string;
  ntrp: string;
  membershipDuration: string;
  avatarLetter: string;
  avatarColor: string;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
