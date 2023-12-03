export interface PcCase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  formFactor: string;
  weight: string;
  size: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
