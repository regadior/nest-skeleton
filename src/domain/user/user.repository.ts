import { User } from './user.model';

export abstract class UserRepository {
  public abstract getByEmail(email: string): Promise<User | null>;
}

export interface CreateUserData {
  email: string;
  name: string;
  picture?: string;
}
