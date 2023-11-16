import { CreateUserBodyDto } from '../../application/user/request/dto/create-user-body.dto';
import { UpdateUserBodyDto } from '../../application/user/request/dto/update-user-body.dto';

abstract class UserRepository {
  public abstract create(userData: CreateUserBodyDto): Promise<any>;
  public abstract update(
    userId: string,
    userData: UpdateUserBodyDto,
  ): Promise<any>;
  public abstract delete(userId: string): Promise<any>;
  public abstract findById(userId: string): Promise<any | null>;
  public abstract findAll(userId: string): Promise<any | null>;
}

export { UserRepository };
