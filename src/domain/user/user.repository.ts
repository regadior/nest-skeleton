import { CreateUserBodyDto } from '../../application/user/request/dto/create-user-body.dto';
import { UpdateUserBodyDto } from '../../application/user/request/dto/update-user-body.dto';
import { User } from './user';

abstract class UserRepository {
  public abstract create(userData: CreateUserBodyDto): Promise<User>;
  public abstract update(
    userId: string,
    userData: UpdateUserBodyDto,
  ): Promise<void>;
  public abstract delete(userId: string): Promise<void>;
  public abstract findById(userId: string): Promise<User | null>;
  public abstract findAll(userId: string): Promise<any | null>;
}

export { UserRepository };
