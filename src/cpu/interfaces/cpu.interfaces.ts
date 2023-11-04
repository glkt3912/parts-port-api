export interface Cpu {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  processor: string;
  socket: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
