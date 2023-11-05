export interface Cooler {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  intel: string;
  amd: string;
  flowtype: string;
  noise: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
