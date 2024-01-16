/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';

import {
  CreatedUserData,
  UpdatedUserData,
  UserRepository,
} from '@domain/user/user.repository';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';

import { PrismaUserMapper } from './prisma-user.mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createdUser: CreatedUserData): Promise<any> {
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

  public async delete(userId: string): Promise<any> {
    return this.prisma.user
      .delete({
        where: { id: userId },
      })
      .then((result) => PrismaUserMapper.map(result));
  }

  public async findById(userId: string): Promise<any | null> {
    return this.prisma.user
      .findUnique({
        where: { id: userId },
      })
      .then((result) => PrismaUserMapper.map(result));
  }

  public async findAll(_userId: string): Promise<any | null> {}
}
