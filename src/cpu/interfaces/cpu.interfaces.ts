export interface Cpu {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  processor: string;
  socket: string;
  wattage: number;
  core: number;
  baseFrequency: string;
  boostedFrequency: string;
  categoryId: number;
}
