import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserBodyDto } from '../../../application/user/request/dto/create-user-body.dto';
import { User } from '../../../domain/user/user';
import { UserRepository } from '../../../domain/user/user.repository';
import { UserEntity } from '../../type-orm/entities/user.entity';

@Injectable()
class TypeOrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly typeOrmUser: Repository<UserEntity>,
  ) {}

  public async create(userData: CreateUserBodyDto): Promise<User> {
    const createduser = await this.typeOrmUser.save(userData);
    return User.fromEntity(createduser);
  }

  public async findById(userId: string): Promise<User | null> {
    const findedUser = await this.typeOrmUser.findOne({
      where: { id: userId },
    });
    if (findedUser) return null;
    return User.fromEntity(findedUser);
  }

  public async update(user: any): Promise<any> {
    console.log(user);
  }

  public async delete(user: any): Promise<any> {
    console.log(user);
  }
}

export { TypeOrmUserRepository };
