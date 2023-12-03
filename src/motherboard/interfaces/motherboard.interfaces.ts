export interface MotherBoard {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  chip: string;
  formFactor: string;
  memoryType: string;
  memorySlots: number;
  maxMemory: number;
  socket: string;
  pciSlots: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
