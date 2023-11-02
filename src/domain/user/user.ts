import { ApiProperty } from '@nestjs/swagger';

import { UserEntity } from '../../infraestructure/type-orm/entities/user.entity';

class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  constructor(
    id: string,
    name: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static toModel(userEntity: UserEntity): User {
    return new User(
      userEntity.id,
      userEntity.name,
      userEntity.lastName,
      userEntity.username,
      userEntity.email,
      userEntity.password,
    );
  }
}

export { User };
