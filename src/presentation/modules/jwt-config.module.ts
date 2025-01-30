import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  exports: [JwtModule],
})
export class JwtConfigModule {}
