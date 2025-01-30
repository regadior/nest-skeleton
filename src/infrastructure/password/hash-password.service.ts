import { HashPasswordRepository } from '@domain/password/hash-password.repository';
import * as bcrypt from 'bcrypt';

export class HashPasswordService implements HashPasswordRepository {
  async hash(pass: string): Promise<string> {
    return await bcrypt.hash(pass, 10);
  }

  async compare(hash: string, pass: string): Promise<boolean> {
    return await bcrypt.compare(pass, hash);
  }
}
