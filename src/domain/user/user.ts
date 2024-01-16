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

  @ApiProperty()
  password?: string;

  constructor(inputData: UserInputData) {
    const { id, name, lastName, username, email, password } = inputData;
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static fromInputData(inputData: UserInputData): User {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { password, ...inputWithoutPassword } = inputData;
    return new User(inputWithoutPassword);
  }
}

interface UserInputData {
  id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
}

export { User };
