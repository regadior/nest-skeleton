import { User } from '@domain/user/user.model';

export class PrismaUserMapper {
  public static toDomainModel(userDbModel: any): User {
    return new User({
      ...userDbModel,
    });
  }
}
