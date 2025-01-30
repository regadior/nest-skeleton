import { ApiProperty } from '@nestjs/swagger';
import { RoleOnUser } from './role-on-user/role-on-user.model';
export class User {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ type: [RoleOnUser] })
  roleOnUser?: RoleOnUser[];

  constructor(input: UserInputData) {
    Object.assign(this, input);
  }
}

export interface UserInputData {
  id?: string;
  email: string;
  password: string;
  roleOnUser?: RoleOnUser[];
}
