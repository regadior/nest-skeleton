import { LoginDto } from '@application/auth/dto/login.dto';
import { UserMapper } from '@application/user/mapper/user.mapper';
import { HashPasswordRepository } from '@domain/password/hash-password.repository';
import { JwtTokenRepository } from '@domain/token/token.repository';
import { UserRepository } from '@domain/user/user.repository';
import { HttpStatus, UnauthorizedException } from '@nestjs/common';
import { LoginResponse } from './response/login.response';

export class LoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenRepository: JwtTokenRepository,
    private readonly hashPasswordRepository: HashPasswordRepository,
  ) {}

  async execute({ email, password }: LoginDto): Promise<LoginResponse> {
    const user = await this.userRepository.getByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isPasswordValid = await this.hashPasswordRepository.compare(
      user.password,
      password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }
    const userDto = UserMapper.toResponse(user);

    const accessToken = await this.tokenRepository.generateToken({
      id: user.id,
      email: user.email,
    });

    return new LoginResponse(HttpStatus.OK, 'Login successfully', {
      userDto,
      accessToken,
    });
  }
}
