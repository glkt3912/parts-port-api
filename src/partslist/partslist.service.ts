import {
  ConflictException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PartsListDto } from './dto/parts-list.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartsList } from './interfaces/partslist.interfaces';
import { CrudService } from 'src/interfaces/crud.interfaces';

interface UserUpdateService<T> {
  updateWithUser(
    userId: number,
    partslistId: number,
    dto: PartsListDto,
  ): Promise<PartsList>;
}

@Injectable()
export class PartslistService
  implements CrudService<PartsList>, UserUpdateService<PartsList>
{
  constructor(private prisma: PrismaService) {}

  async findAll(keyword?: string): Promise<PartsList[]> {
    const query: Prisma.PartsListFindManyArgs = {
      where: {
        isOpened: true, // 公開のリストのみ
      },
    };
    if (keyword) {
      query.where.AND = [
        {
          OR: [
            // 'insensitive'は大文字・小文字を区別しない設定
            { name: { contains: keyword, mode: 'insensitive' } },
            { description: { contains: keyword, mode: 'insensitive' } },
          ],
        },
      ];
    }
    try {
      return await this.prisma.partsList.findMany(query);
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve PartsLists.');
    }
  }

  async findOne(id: number): Promise<PartsList> {
    try {
      const partsList = await this.prisma.partsList.findUnique({
        where: { id },
      });
      if (!partsList) {
        throw new NotFoundException(`PartsList with ID ${id} not found.`);
      }
      return partsList;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to retrieve PartsList with ID ${id}.`,
      );
    }
  }

  async create(dto: PartsListDto): Promise<PartsList> {
    try {
      const createInput = this.createPartsListInput(dto);
      const partslist = await this.prisma.partsList.create({
        data: createInput,
      });
      return partslist;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A Partslist with the given name already exists.',
          );
        }
      }
      throw error;
    }
  }

  // ユーザーIDを指定して更新
  async updateWithUser(
    userId: number,
    partslistId: number,
    dto: PartsListDto,
  ): Promise<PartsList> {
    const partsList = await this.prisma.partsList.findUnique({
      where: { id: partslistId },
    });
    if (!partsList || partsList.userId !== userId) {
      throw new ForbiddenException(
        'Access to the specified parts list is forbidden.',
      );
    }

    try {
      const partslist = await this.prisma.partsList.update({
        where: {
          id: partslistId,
        },
        data: {
          ...dto,
        },
      });
      return partslist;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            'A partslist with the given details already exists.',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A partslist with ID ${partslistId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async delete(partslistId: number): Promise<void> {
    try {
      await this.prisma.partsList.delete({
        where: { id: partslistId },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `A partslist with ID ${partslistId} does not exist.`,
          );
        }
      }
      throw error;
    }
  }

  async findAllByUserId(userId: number): Promise<PartsList[]> {
    return await this.prisma.partsList.findMany({
      where: {
        OR: [{ userId: userId }, { isOpened: true }],
      },
    });
  }

  /**
   *
   * @param dto
   * @returns
   * DTOからPrismaのCreateInputに変換
   */
  createPartsListInput(dto: PartsListDto): Prisma.PartsListCreateInput {
    if (!dto.userId) {
      throw new ForbiddenException('userId is required');
    }
    const createInput: Prisma.PartsListCreateInput = {
      name: dto.name,
      description: dto.description,
      isOpened: dto.isOpened,
      user: {
        connect: { id: dto.userId },
      },
    };
    // 各パーツIDが存在する場合は、それぞれのパーツとのリレーションを設定
    if (dto.cpuId) {
      createInput.cpu = {
        connect: { id: dto.cpuId },
      };
    }
    if (dto.motherboardId) {
      createInput.motherboard = {
        connect: { id: dto.motherboardId },
      };
    }
    if (dto.memoryId) {
      createInput.memory = {
        connect: { id: dto.memoryId },
      };
    }
    if (dto.hddId) {
      createInput.hdd = {
        connect: { id: dto.hddId },
      };
    }
    if (dto.ssdId) {
      createInput.ssd = {
        connect: { id: dto.ssdId },
      };
    }
    if (dto.gpuId) {
      createInput.gpu = {
        connect: { id: dto.gpuId },
      };
    }
    if (dto.powerId) {
      createInput.power = {
        connect: { id: dto.powerId },
      };
    }
    if (dto.pccaseId) {
      createInput.pccase = {
        connect: { id: dto.pccaseId },
      };
    }
    if (dto.coolerId) {
      createInput.cooler = {
        connect: { id: dto.coolerId },
      };
    }
    if (dto.displayId) {
      createInput.display = {
        connect: { id: dto.displayId },
      };
    }

    return createInput;
  }
}
