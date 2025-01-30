import {
  generateTokenData,
  JwtTokenRepository,
} from '@domain/token/token.repository';
import { JwtService } from '@nestjs/jwt';

export class JwtTokenService implements JwtTokenRepository {
  constructor(private readonly jwtService: JwtService) {}
  async generateToken(data: generateTokenData): Promise<string> {
    return this.jwtService.signAsync({
      sub: data.id,
      email: data.email,
    });
  }

  async decodeToken(token: string): Promise<any> {
    return await this.jwtService.verifyAsync(token);
  }
}
