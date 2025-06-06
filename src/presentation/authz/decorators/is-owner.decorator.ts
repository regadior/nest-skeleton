// src/common/decorators/own.decorator.ts
import { RoleEnum } from '@domain/user/role/role.enum';
import { SetMetadata } from '@nestjs/common';

export const IsOwner = (options: OwnMetadata) =>
  SetMetadata('isOwner', options);

export interface OwnMetadata {
  required: boolean;
  excludedRoles?: RoleEnum[];
  entityId?: number | string;
}
