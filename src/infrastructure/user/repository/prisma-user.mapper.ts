import { User } from '@domain/user/user';

export class PrismaUserMapper {
  public static map(user: any): User {
    return User.fromInputData({ ...user });
  }
}
