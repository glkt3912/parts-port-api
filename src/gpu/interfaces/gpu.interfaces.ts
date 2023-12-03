export interface Gpu {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  length: string;
  chip: string;
  core: string;
  memory: string;
  baseFrequency: string;
  memoryFrequency: string;
  wattage: number;
  interface: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
