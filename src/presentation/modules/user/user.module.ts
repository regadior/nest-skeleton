import { Module } from '@nestjs/common';

import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaUserRepository } from '@infrastructure/user/repository/prisma-user.repository';

import { CreateUserUseCase } from '../../../application/user/create-user.usecase';
import { DeleteUserByIdUseCase } from '../../../application/user/delete-user-by-id.usecase';
import { UpdateUserByIdUseCase } from '../../../application/user/update-user-by-id.usecase';
import { UserRepository } from '../../../domain/user/user.repository';
import { UserController } from '../../controllers/user/user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useFactory: () => new PrismaUserRepository(),
      inject: [],
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
    {
      provide: UpdateUserByIdUseCase,
      useFactory: (userRepository: UserRepository) =>
        new UpdateUserByIdUseCase(userRepository),
      inject: [UserRepository],
    },
  ],
  exports: [],
})
export class UserModule {}
