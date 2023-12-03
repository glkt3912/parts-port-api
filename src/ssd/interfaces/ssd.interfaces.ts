export interface Ssd {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  capacity: string;
  size: string;
  interface: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
