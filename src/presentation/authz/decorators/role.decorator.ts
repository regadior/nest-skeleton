import { RoleEnum } from '@domain/user/role/role.enum';
import { SetMetadata } from '@nestjs/common';

export const Role = (role: RoleEnum[]) => SetMetadata('role', role);
