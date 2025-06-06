import { RoleEnum } from '@domain/user/role/role.enum';
import { User } from '@domain/user/user.model';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<RoleEnum[]>('role', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const user: User = request.user;
    if (!user) return false;

    return requiredRoles.some((role) =>
      user.roleOnUser?.some((r) => r.role.name === role),
    );
  }
}
