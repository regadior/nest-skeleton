import * as bcrypt from 'bcrypt';

class HasherService {
  public async hash(plainText: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(plainText, saltRounds);
  }

  public async compare(plainText: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainText, hash);
  }
}

export { HasherService };
