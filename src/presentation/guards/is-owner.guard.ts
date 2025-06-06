// src/common/guards/ownership.guard.ts
import { TaskRepository } from '@domain/task/task.repository';
import { User } from '@domain/user/user.model';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { OwnMetadata } from '@presentation/authz/decorators/is-owner.decorator';

@Injectable()
export class IsOwnerGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly taskRepository: TaskRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const {
      required,
      excludedRoles = [],
      entityId,
    } = this.reflector.get<OwnMetadata>('isOwner', context.getHandler()) || {};

    if (!required) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user as User;
    const resourceId = parseInt(request.params[entityId], 10);
    if (isNaN(resourceId)) {
      throw new ForbiddenException('Invalid resource id');
    }

    const task = await this.taskRepository.getById(resourceId);
    if (!task) throw new ForbiddenException('Task not found');

    const isExcludedByRole = excludedRoles.some((role) =>
      user.roleOnUser?.some((r) => r.role.name === role),
    );

    const isOwner = task.user.id === user.id;

    if (isExcludedByRole || isOwner) return true;

    throw new ForbiddenException('You are not allowed to access this resource');
  }
}
