import { UserRepository } from '@domain/user/user.repository';
import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { PrismaUserRepository } from '@infrastructure/user/prisma-user.repository';
import { Module } from '@nestjs/common';
import { AuthController } from '@presentation/controllers/auth/auth.controller';
// import { AuthService } from '@presentation/auth/auth.service';
import { LoginUseCase } from '@application/auth/login.usecase';
import { HashPasswordRepository } from '@domain/password/hash-password.repository';
import { JwtTokenRepository } from '@domain/token/token.repository';
import { HashPasswordService } from '@infrastructure/password/hash-password.service';
import { JwtTokenService } from '@infrastructure/token/jwt-token.service';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@presentation/guards/auth.guard';
import { JwtConfigModule } from './jwt-config.module';
// import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, JwtConfigModule],
  providers: [
    HashPasswordService,
    JwtTokenService,
    {
      provide: UserRepository,
      useFactory: (prisma: PrismaService) => new PrismaUserRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: HashPasswordRepository,
      useFactory: () => new HashPasswordService(),
      inject: [],
    },
    {
      provide: JwtTokenRepository,
      useFactory: (jwtService: JwtService) => new JwtTokenService(jwtService),
      inject: [JwtService],
    },
    {
      provide: LoginUseCase,
      useFactory: (
        userRepository: UserRepository,
        tokenRepository: JwtTokenRepository,
        hashPasswordRepository: HashPasswordRepository,
      ) =>
        new LoginUseCase(
          userRepository,
          tokenRepository,
          hashPasswordRepository,
        ),
      inject: [UserRepository, JwtTokenRepository, HashPasswordRepository],
    },
    {
      provide: APP_GUARD,
      useFactory: (
        reflector: Reflector,
        userRepository: UserRepository,
        tokenRepository: JwtTokenRepository,
      ) => new AuthGuard(reflector, userRepository, tokenRepository),
      inject: [Reflector, UserRepository, JwtTokenRepository],
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
