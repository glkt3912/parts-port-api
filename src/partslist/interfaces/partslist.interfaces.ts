import { CrudEntity } from 'src/interfaces/crud.interfaces';

export interface PartsList extends CrudEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  isOpened: boolean;
  userId: number;
  cpuId?: number | null;
  motherboardId?: number | null;
  memoryId?: number | null;
  hddId?: number | null;
  ssdId?: number | null;
  gpuId?: number | null;
  powerId?: number | null;
  pccaseId?: number | null;
  cpucoolerId?: number | null;
  displayId?: number | null;
}
