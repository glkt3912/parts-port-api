export interface MotherBoard {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  chipset: string;
  formfactor: string;
  socket: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
