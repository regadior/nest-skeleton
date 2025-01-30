import { TaskStatusEnum } from '@domain/task/task-status.enum';
import { Task } from '@domain/task/task.model';
import { $Enums, Prisma } from '@prisma/client';
type TaskWithUser = Prisma.TaskGetPayload<{
  include: { user: true };
}>;

export class PrismaTaskMapper {
  public static toDomainModel(task: TaskWithUser): Task {
    return new Task({
      ...task,
      status: this.mapPrismaTaskStatusToDomain(task.status),
    });
  }
  private static mapPrismaTaskStatusToDomain(
    status: $Enums.TaskStatus,
  ): TaskStatusEnum {
    switch (status) {
      case $Enums.TaskStatus.PENDING:
        return TaskStatusEnum.PENDING;
      case $Enums.TaskStatus.IN_PROGRESS:
        return TaskStatusEnum.IN_PROGRESS;
      case $Enums.TaskStatus.COMPLETED:
        return TaskStatusEnum.COMPLETED;
      case $Enums.TaskStatus.CANCELLED:
        return TaskStatusEnum.CANCELLED;
      default:
        throw new Error(`Unknown status: ${status}`);
    }
  }
}
