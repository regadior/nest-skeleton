import { RoleOnUser } from '@domain/user/role-on-user/role-on-user.model';
import { ApiProperty } from '@nestjs/swagger';
export class UserResponseDto {
  @ApiProperty()
  id?: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: [RoleOnUser] })
  roleOnUser?: RoleOnUser[];

  constructor(input: UserResponseInputData) {
    this.id = input.id;
    this.email = input.email;
    this.roleOnUser = input.roleOnUser;
  }
}

export interface UserResponseInputData {
  id?: string;
  email: string;
  roleOnUser?: RoleOnUser[];
}
