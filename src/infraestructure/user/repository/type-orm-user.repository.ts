import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserBodyDto } from '../../../application/user/request/dto/create-user-body.dto';
import { UpdateUserBodyDto } from '../../../application/user/request/dto/update-user-body.dto';
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
    const createdUser = await this.typeOrmUser.save(userData);
    return User.toModel(createdUser);
  }

  public async update(
    userId: string,
    userData: UpdateUserBodyDto,
  ): Promise<void> {
    const updatedUser = await this.typeOrmUser.save({
      id: userId,
      userData,
    });

    // const updatedUser = await this.typeOrmUser.update(userId, userData);
    console.log(updatedUser);
    // return User.toModel(updatedUser);
  }

  public async delete(userId: string): Promise<void> {
    await this.typeOrmUser.delete(userId);
  }

  public async findById(userId: string): Promise<User | null> {
    const findedUser = await this.typeOrmUser.findOne({
      where: { id: userId },
    });
    if (findedUser) return null;
    return User.toModel(findedUser);
  }

  public async findAll(userId: string): Promise<any | null> {
    console.log(userId);
  }
}

export { TypeOrmUserRepository };
