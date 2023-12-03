export interface Memory {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  brand: string;
  type: string;
  // setnumber: string;
  frequency: string;
  interface: string;
  image?: string;
  url?: string;
  price?: string;
  categoryId: number;
}
