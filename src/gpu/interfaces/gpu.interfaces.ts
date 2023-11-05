export interface Gpu {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  chip: string;
  core: string;
  memory: string;
  clock: string;
  interface: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
