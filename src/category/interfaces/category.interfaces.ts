import { CrudEntity } from "src/interfaces/crud.interfaces";

export interface Category extends CrudEntity {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  name: string,
}