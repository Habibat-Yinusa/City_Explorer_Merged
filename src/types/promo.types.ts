export type Promo = {
  name: string;
  description: string;
  timeValid: string;
  _id: string;
};

export interface PromosData {
  name: string;
  description: string;
  timeValid: string;
  _id: string;
}

export type Promos = Promo[];
