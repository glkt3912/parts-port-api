export interface Display {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  size: string;
  type: string;
  speed: string;
  area: string;
  resolution: string;
  contrast: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
