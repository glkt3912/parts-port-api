export interface Power {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  type: string;
  capacity: string;
  certification: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
