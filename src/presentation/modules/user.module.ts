import { Module } from '@nestjs/common';

import { CreateUserUseCase } from '@application/user/create-user.usecase';
import { DeleteUserByIdUseCase } from '@application/user/delete-user-by-id.usecase';
import { FindAllUsersUseCase } from '@application/user/find-all-users.usecase';
import { GetUserByIdUseCase } from '@application/user/get-user-by-id.usecase';
import { UpdateUserByIdUseCase } from '@application/user/update-user-by-id.usecase';
import { UserRepository } from '@domain/user/user.repository';
import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { PrismaUserRepository } from '@infrastructure/user/repository/prisma-user.repository';
import { UserController } from '@presentation/controllers/user/user.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useFactory: (prisma: PrismaService) => new PrismaUserRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateUserUseCase,
      useFactory: (userRepository: UserRepository) =>
        new CreateUserUseCase(userRepository),
      inject: [UserRepository],
    },
    {
      provide: GetUserByIdUseCase,
      useFactory: (userRepository: UserRepository) =>
        new GetUserByIdUseCase(userRepository),
      inject: [UserRepository],
    },
    {
      provide: FindAllUsersUseCase,
      useFactory: (userRepository: UserRepository) =>
        new FindAllUsersUseCase(userRepository),
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
