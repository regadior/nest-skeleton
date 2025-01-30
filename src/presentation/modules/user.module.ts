import { UserRepository } from '@domain/user/user.repository';
import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { PrismaUserRepository } from '@infrastructure/user/prisma-user.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: UserRepository,
      useFactory: (prisma: PrismaService) => new PrismaUserRepository(prisma),
      inject: [PrismaService],
    },
  ],
  controllers: [],
})
export class UserModule {}
