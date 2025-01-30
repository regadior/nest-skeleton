import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FastifyRequest } from 'fastify';

import { JwtTokenRepository } from '@domain/token/token.repository';
import { UserRepository } from '@domain/user/user.repository';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly userRepository: UserRepository,
    private readonly tokenRepository: JwtTokenRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );
    if (isPublic) {
      return true;
    }

    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const decodedToken = await this.tokenRepository.decodeToken(token);
      if (!decodedToken) {
        throw new UnauthorizedException();
      }
      const user = await this.userRepository.getByEmail(decodedToken.email);
      if (!user) throw new UnauthorizedException();
      request.user = user;
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: FastifyRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
