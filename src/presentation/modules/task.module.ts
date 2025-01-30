import { CreateTaskUseCase } from '@application/task/create-task.usecase';
import { DeleteTaskUseCase } from '@application/task/delete-task.usecase';
import { FindAllTasksUseCase } from '@application/task/find-all-tasks.usecase';
import { GetTaskUseCase } from '@application/task/get-task.usecase';
import { UpdateTaskUseCase } from '@application/task/update-task.usecase';
import { TaskRepository } from '@domain/task/task.repository';
import { JwtTokenRepository } from '@domain/token/token.repository';
import { UserRepository } from '@domain/user/user.repository';
import { PrismaModule } from '@infrastructure/common/persistence/prisma/prisma.module';
import { PrismaService } from '@infrastructure/common/persistence/prisma/prisma.service';
import { PrismaTaskRepository } from '@infrastructure/task/prisma-task.repository';
import { JwtTokenService } from '@infrastructure/token/jwt-token.service';
import { PrismaUserRepository } from '@infrastructure/user/prisma-user.repository';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TaskController } from '@presentation/controllers/task/task.controller';
import { JwtConfigModule } from './jwt-config.module';

@Module({
  imports: [PrismaModule, JwtConfigModule],
  providers: [
    {
      provide: JwtTokenRepository,
      useFactory: (jwtService: JwtService) => new JwtTokenService(jwtService),
      inject: [JwtService],
    },
    {
      provide: UserRepository,
      useFactory: (prisma: PrismaService) => new PrismaUserRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: TaskRepository,
      useFactory: (prisma: PrismaService) => new PrismaTaskRepository(prisma),
      inject: [PrismaService],
    },
    {
      provide: CreateTaskUseCase,
      useFactory: (taskRepository: TaskRepository) =>
        new CreateTaskUseCase(taskRepository),
      inject: [TaskRepository],
    },
    {
      provide: UpdateTaskUseCase,
      useFactory: (taskRepository: TaskRepository) =>
        new UpdateTaskUseCase(taskRepository),
      inject: [TaskRepository],
    },
    {
      provide: GetTaskUseCase,
      useFactory: (taskRepository: TaskRepository) =>
        new GetTaskUseCase(taskRepository),
      inject: [TaskRepository],
    },
    {
      provide: FindAllTasksUseCase,
      useFactory: (taskRepository: TaskRepository) =>
        new FindAllTasksUseCase(taskRepository),
      inject: [TaskRepository],
    },
    {
      provide: DeleteTaskUseCase,
      useFactory: (taskRepository: TaskRepository) =>
        new DeleteTaskUseCase(taskRepository),
      inject: [TaskRepository],
    },
  ],
  controllers: [TaskController],
})
export class TaskModule {}
