import { ApiProperty } from '@nestjs/swagger';
import { RoleOnUser } from '../role-on-user/role-on-user.model';
export class Role {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: [RoleOnUser] })
  roleOnUser: RoleOnUser[];

  constructor(input: RoleInputData) {
    Object.assign(this, input);
  }
}

export interface RoleInputData {
  id?: number;
  name: string;
}
