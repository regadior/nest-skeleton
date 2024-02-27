import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { FindAllUsersUseCase } from '@application/user/find-all-users.usecase';
import { GetUserUseCase } from '@application/user/get-user.usecase';
import { LoginUserUseCase } from '@application/user/login-user.usecase';
import { JwtRepository } from '@domain/jwt/jwt.repository';
import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { AuthService } from '@infrastructure/jwt/auth.service';
import { PrismaUserRepository } from '@infrastructure/user/repository/prisma-user.repository';

import { CreateUserUseCase } from '../../application/user/create-user.usecase';
import { DeleteUserByIdUseCase } from '../../application/user/delete-user-by-id.usecase';
import { UpdateUserByIdUseCase } from '../../application/user/update-user-by-id.usecase';
import { UserRepository } from '../../domain/user/user.repository';
import { UserController } from '../controllers/user/user.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UserController],
  providers: [
    {
      provide: UserRepository,
      useFactory: (prisma: PrismaService) => new PrismaUserRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: JwtRepository,
      useFactory: (jwtService: JwtService) => new AuthService(jwtService),
      inject: [JwtService],
    },
    {
      provide: CreateUserUseCase,
      useFactory: (userRepository: UserRepository) =>
        new CreateUserUseCase(userRepository),
      inject: [UserRepository],
    },
    {
      provide: LoginUserUseCase,
      useFactory: (
        userRepository: UserRepository,
        jwtRepository: JwtRepository,
      ) => new LoginUserUseCase(userRepository, jwtRepository),
      inject: [UserRepository, JwtRepository],
    },
    {
      provide: GetUserUseCase,
      useFactory: (userRepository: UserRepository) =>
        new GetUserUseCase(userRepository),
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
