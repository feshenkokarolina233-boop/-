export interface Master {
  id: string;
  name: string;
  nameEn: string;
  specialization: string;
  specializationEn: string;
  experience: string;
  photo: string;
  bio: string;
  socials: {
    instagram: string;
    telegram: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'blackwork' | 'realism' | 'neotraditional' | 'minimalism' | 'color';
  image: string;
  masterId: string;
  masterName: string;
}

export interface PriceTier {
  id: string;
  title: string;
  titleEn: string;
  price: string;
  duration: string;
  description: string;
  descriptionEn: string;
  details: string[];
  detailsEn: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  tattooCategory: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  questionEn: string;
  answerEn: string;
  category: 'prepare' | 'care' | 'general';
}

export interface BookingForm {
  name: string;
  phone: string;
  masterId: string;
  tattooSize: 'mini' | 'medium' | 'large' | 'individual';
  sketchIdea: string;
  preferredDate: string;
}
