export interface CatBreed {
  id: string;
  name: string;
  origin: string;
  description: string;
  temperament: string;
  life_span: string;
  weight: {
    imperial: string;
    metric: string;
  };
  intelligence: number;
  adaptability: number;
  affection_level: number;
  wikipedia_url: string;
  image?: {
    url: string;
  };
}