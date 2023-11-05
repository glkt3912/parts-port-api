export interface Memory {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  capacity: string;
  setnumber: string;
  standard: string;
  interface: string;
  partNumber: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
