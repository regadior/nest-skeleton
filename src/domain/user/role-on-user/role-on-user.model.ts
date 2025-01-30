import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user.model';
import { Role } from '../role/role.model';
export class RoleOnUser {
  @ApiProperty()
  id?: string;

  @ApiProperty({ type: User })
  user: User;

  @ApiProperty({ type: Role })
  role: Role;

  constructor(input: RoleOnUserInputData) {
    Object.assign(this, input);
  }
}

export interface RoleOnUserInputData {
  id?: string;
  user: User;
  role: Role;
}
