import { ApiProperty } from '@nestjs/swagger';

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

  constructor({ id, name, lastName, username, email }: UserInputData) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
  }
}

interface UserInputData {
  id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
}

export { User };
