import { User } from '@domain/user/user';

export abstract class JwtRepository {
  public abstract encode(user: User): Promise<string>;
}
