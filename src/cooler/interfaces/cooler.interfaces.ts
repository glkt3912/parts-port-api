export interface Cooler {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  supportedTdp: number;
  coolingType: string;
  fanCount: number;
  airFlow: string;
  size: string;
  socket: string;
  image?: string;
  url?: string;
  price?: string;
  lighting?: string;
  categoryId: number;
}
