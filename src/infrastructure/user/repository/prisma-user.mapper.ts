import { User } from '@domain/user/user';

export class PrismaUserMapper {
  public static map(user: any): User {
    console.log('en el mapper', user);
    return User.fromInputData({ ...user });
  }
}
