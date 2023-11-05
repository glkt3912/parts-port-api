export interface Hdd {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  series: string;
  capacity: string;
  speed: string;
  interface: string;
  cache: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
