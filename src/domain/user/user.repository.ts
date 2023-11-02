import { CreateUserBodyDto } from '../../application/user/request/dto/create-user-body.dto';
import { User } from './user';

abstract class UserRepository {
  public abstract create(createUserBody: CreateUserBodyDto): Promise<User>;
  public abstract update(user: any): Promise<any>;
  public abstract findById(userId: string): Promise<User | null>;
  public abstract delete(user: any): Promise<any>;
}

export { UserRepository };
