export abstract class JwtTokenRepository {
  public abstract generateToken(data: generateTokenData): Promise<string>;
  public abstract decodeToken(token: string): Promise<any | null>;
}

export interface generateTokenData {
  id: string;
  email: string;
}
