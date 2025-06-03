import { User } from '@domain/user/user.model';
import { UserRepository } from '@domain/user/user.repository';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { PrismaUserMapper } from './prisma-user.mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getByEmail(email: string): Promise<User | null> {
    return this.prisma.user
      .findUnique({
        where: {
          email,
        },
        include: {
          roleOnUser: true,
        },
      })
      .then((user) => (user ? PrismaUserMapper.toDomainModel(user) : null));
  }
}
