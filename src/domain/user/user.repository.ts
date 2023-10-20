abstract class UserRepository {
  public abstract create(user: any): Promise<any>;
  public abstract find(user: any): Promise<any>;
  public abstract update(user: any): Promise<any>;
  public abstract delete(user: any): Promise<any>;
}

export { UserRepository };
