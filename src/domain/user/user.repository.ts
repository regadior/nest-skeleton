import { FindQueryResult } from '@domain/common/find-query-result';
import { PaginationInput } from '@domain/common/pagination-input';

import { User } from './user';
import { UserQueryFilter } from './user-query-filter';

abstract class UserRepository {
  public abstract create(data: CreatedUserData): Promise<User>;
  public abstract update(userId: string, data: UpdatedUserData): Promise<any>;
  public abstract delete(userId: string): Promise<any>;
  public abstract getById(userId: string): Promise<any | null>;
  public abstract findAll(
    pagination: PaginationInput,
    filters: UserQueryFilter,
  ): Promise<FindQueryResult<User>>;
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
