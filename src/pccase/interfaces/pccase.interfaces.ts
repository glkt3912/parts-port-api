export interface PcCase {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  factor: string;
  weight: string;
  size: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
