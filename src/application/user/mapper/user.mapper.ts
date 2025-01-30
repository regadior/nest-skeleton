import { UserResponseDto } from '@application/user/dto/user-response.dto';
import { User } from '@domain/user/user.model';

export class UserMapper {
  static toResponse(user: User): UserResponseDto {
    return new UserResponseDto(user);
  }
}
