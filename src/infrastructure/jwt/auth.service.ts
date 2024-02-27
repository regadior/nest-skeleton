import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtRepository } from '@domain/jwt/jwt.repository';
import { User } from '@domain/user/user';

@Injectable()
export class AuthService implements JwtRepository {
  constructor(private readonly jwtService: JwtService) {}

  async encode(user: User): Promise<any> {
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };
    const accessToken = await this.jwtService.signAsync(payload);
    const tokenWithBearer = `Bearer ${accessToken}`;
    return {
      accessToken: tokenWithBearer,
    };
  }
}
