import { Module } from '@nestjs/common';

import { GetUserByIdUseCase } from '@application/user/get-user-by-id.usecase';
import { HasherService } from '@domain/shared/services/hasher.service';
import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { PrismaUserRepository } from '@infrastructure/user/repository/prisma-user.repository';

import { CreateUserUseCase } from '../../application/user/create-user.usecase';
import { DeleteUserByIdUseCase } from '../../application/user/delete-user-by-id.usecase';
import { UpdateUserByIdUseCase } from '../../application/user/update-user-by-id.usecase';
import { UserRepository } from '../../domain/user/user.repository';
import { UserController } from '../controllers/user/user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    HasherService,
    {
      provide: UserRepository,
      useFactory: (prisma: PrismaService) => new PrismaUserRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateUserUseCase,
      useFactory: (
        userRepository: UserRepository,
        hasherService: HasherService,
      ) => new CreateUserUseCase(userRepository, hasherService),
      inject: [UserRepository, HasherService],
    },
    {
      provide: GetUserByIdUseCase,
      useFactory: (userRepository: UserRepository) =>
        new GetUserByIdUseCase(userRepository),
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
