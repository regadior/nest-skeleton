import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateUserUseCase } from '../../../application/user/create-user.usecase';
import { DeleteUserByIdUseCase } from '../../../application/user/delete-user-by-id.usecase';
import { UserRepository } from '../../../domain/user/user.repository';
import { UserEntity } from '../../../infraestructure/type-orm/entities/user.entity';
import { TypeOrmUserRepository } from '../../../infraestructure/user/repository/type-orm-user.repository';
import { UserController } from '../../controllers/user/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
    {
      provide: CreateUserUseCase,
      useFactory: (userRepository: UserRepository) =>
        new CreateUserUseCase(userRepository),
      inject: [UserRepository],
    },
    {
      provide: DeleteUserByIdUseCase,
      useFactory: (userRepository: UserRepository) =>
        new DeleteUserByIdUseCase(userRepository),
      inject: [UserRepository],
    },
  ],
})
export class UserModule {}
