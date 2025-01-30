import { FindQueryResult } from '@domain/common/find-query-result';
import { PaginationInput } from '@domain/common/pagination-input';
import { TaskQueryFilter } from '@domain/task/task-query-filter';
import { PrismaPagination } from '@infrastructure/common/persistence/prisma-pagination';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Task } from '../../domain/task/task.model';
import {
  CreateTaskData,
  TaskRepository,
  UpdateTaskData,
} from '../../domain/task/task.repository';
import { PrismaTaskMapper } from './prisma-task.mapper';

const include = {
  user: true,
};
const omit = {
  userId: true,
};
@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  public create(data: CreateTaskData): Promise<Task> {
    return this.prisma.task
      .create({
        data,
        include,
        omit,
      })
      .then((result) => PrismaTaskMapper.toDomainModel(result));
  }
  public update(data: UpdateTaskData): Promise<Task> {
    return this.prisma.task
      .update({
        where: {
          id: data.id,
        },
        data,
        include,
        omit,
      })
      .then((result) => PrismaTaskMapper.toDomainModel(result));
  }

  public getById(id: number): Promise<Task | null> {
    return this.prisma.task
      .findUnique({
        where: {
          id,
        },
        include,
        omit,
      })
      .then((result) =>
        result ? PrismaTaskMapper.toDomainModel(result) : null,
      );
  }

  public findAll(
    pagination: PaginationInput,
    query: TaskQueryFilter,
  ): Promise<FindQueryResult<Task>> {
    const { skip, take } = new PrismaPagination(pagination);
    return this.prisma
      .$transaction([
        this.prisma.task.count({ where: query }),
        this.prisma.task.findMany({
          skip,
          take,
          where: query,
          include,
        }),
      ])
      .then(
        ([nElements, results]) =>
          new FindQueryResult(
            results.map((result) => PrismaTaskMapper.toDomainModel(result)),
            nElements,
            pagination,
          ),
      );
  }
  public deleteById(id: number): Promise<Task | null> {
    return this.prisma.task
      .delete({
        where: {
          id,
        },
        include,
      })
      .then((result) =>
        result ? PrismaTaskMapper.toDomainModel(result) : null,
      );
  }
}
