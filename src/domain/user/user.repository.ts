import { FindQueryResult } from '@domain/common/find-query-result';
import { PaginationInput } from '@domain/common/pagination-input';

import { FindUserQueryFilter } from './query/find-user-query.filter';
import { FindUsersQueryFilter } from './query/find-users-query.filter';
import { User } from './user';

abstract class UserRepository {
  public abstract create(data: CreatedUserData): Promise<User>;
  public abstract update(userId: string, data: UpdatedUserData): Promise<User>;
  public abstract delete(userId: string): Promise<User>;
  public abstract getBy(
    queryFilters: FindUserQueryFilter,
  ): Promise<User | null>;
  public abstract findAll(
    pagination: PaginationInput,
    queryFilters: FindUsersQueryFilter,
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
