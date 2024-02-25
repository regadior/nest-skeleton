import { Injectable } from '@nestjs/common';

import { FindQueryResult } from '@domain/common/find-query-result';
import { PaginationInput } from '@domain/common/pagination-input';
import { User } from '@domain/user/user';
import {
  CreatedUserData,
  UpdatedUserData,
  UserRepository,
} from '@domain/user/user.repository';
import { UserQueryFilter } from '@domain/user/user-query-filter';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { PrismaPagination } from '@infrastructure/common/prisma-pagination';

import { PrismaUserMapper } from './prisma-user.mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createdUser: CreatedUserData): Promise<User> {
    return this.prisma.user
      .create({
        data: createdUser,
      })
      .then((result) => PrismaUserMapper.map(result));
  }

  public async update(
    userId: string,
    updatedUser: UpdatedUserData,
  ): Promise<any> {
    return this.prisma.user
      .update({
        where: { id: userId },
        data: updatedUser,
      })
      .then((result) => PrismaUserMapper.map(result));
  }

  public async delete(userId: string): Promise<User> {
    return this.prisma.user
      .delete({
        where: { id: userId },
      })
      .then((result) => PrismaUserMapper.map(result));
  }

  public async getById(userId: string): Promise<User | null> {
    return this.prisma.user
      .findUnique({
        where: { id: userId },
      })
      .then((result) => (result ? PrismaUserMapper.map(result) : null));
  }

  public async findAll(
    pagination: PaginationInput,
    query: UserQueryFilter,
  ): Promise<FindQueryResult<User>> {
    const { skip, take } = new PrismaPagination(pagination);
    return this.prisma
      .$transaction([
        this.prisma.user.count({ where: query }),
        this.prisma.user.findMany({
          skip,
          take,
          where: query,
        }),
      ])
      .then(
        ([nElements, users]) =>
          new FindQueryResult(
            users.map((user) => PrismaUserMapper.map(user)),
            nElements,
            pagination,
          ),
      );
  }
}
