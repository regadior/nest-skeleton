export abstract class HashPasswordRepository {
  public abstract hash(pass: string): Promise<string>;

  public abstract compare(hash: string, pass: string): Promise<boolean>;
}
