export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  rating?: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
