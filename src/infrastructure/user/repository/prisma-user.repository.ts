/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';

import { UserRepository } from '@domain/user/user.repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  public async create(userData: any): Promise<any> {
    console.log(userData);
  }

  public async update(_userId: string): Promise<any> {}

  public async delete(_userId: string): Promise<any> {}

  public async findById(_userId: string): Promise<any | null> {}

  public async findAll(_userId: string): Promise<any | null> {}
}
