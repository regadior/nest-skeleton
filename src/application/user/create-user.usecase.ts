import { User } from '../../domain/user/user';
import { UserRepository } from '../../domain/user/user.repository';
import { CreateUserBodyDto } from './dto/create-user-body.dto';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(userData: CreateUserBodyDto): Promise<User> {
    const createdUser = await this.userRepository.create(userData);
    console.log(createdUser);
    return createdUser;
  }
}
