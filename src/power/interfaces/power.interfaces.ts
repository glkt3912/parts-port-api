export interface Power {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  standard: string;
  capacity: string;
  certification: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
