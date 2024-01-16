abstract class UserRepository {
  public abstract create(data: CreatedUserData): Promise<any>;
  public abstract update(userId: string, data: UpdatedUserData): Promise<any>;
  public abstract delete(userId: string): Promise<any>;
  public abstract findById(userId: string): Promise<any | null>;
  public abstract findAll(userId: string): Promise<any | null>;
}

interface CreatedUserData {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

interface UpdatedUserData {
  name?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
}

export { CreatedUserData, UpdatedUserData, UserRepository };
