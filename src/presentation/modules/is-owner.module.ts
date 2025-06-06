import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { Module } from '@nestjs/common';
// import { AuthService } from '@presentation/auth/auth.service';
import { TaskRepository } from '@domain/task/task.repository';
import { PrismaTaskRepository } from '@infrastructure/task/prisma-task.repository';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { IsOwnerGuard } from '@presentation/guards/is-owner.guard';
// import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: TaskRepository,
      useFactory: (prisma: PrismaService) => new PrismaTaskRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: APP_GUARD,
      useFactory: (reflector: Reflector, taskRepository: TaskRepository) =>
        new IsOwnerGuard(reflector, taskRepository),
      inject: [Reflector, TaskRepository],
    },
  ],
})
export class IsOwnerModule {}
