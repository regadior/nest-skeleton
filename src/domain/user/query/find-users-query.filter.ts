/* eslint-disable @typescript-eslint/naming-convention */
import { QueryFilter, StringLikeFilter } from '@domain/common/query-filters';

class FindUsersQueryFilter extends QueryFilter {
  name?: StringLikeFilter;

  lastName?: StringLikeFilter;

  username?: StringLikeFilter;

  email?: StringLikeFilter;

  constructor({ name, lastName, username, email }: UserQueryFilterInput) {
    super();
    if (name) this.name = this.mapStringLikeFilter(name);
    if (lastName) this.lastName = this.mapStringLikeFilter(lastName);
    if (username) this.username = this.mapStringLikeFilter(username);
    if (email) this.email = this.mapStringLikeFilter(email);
  }
}

interface UserQueryFilterInput {
  name?: string;
  lastName?: string;
  username?: string;
  email?: string;
}

export { FindUsersQueryFilter, UserQueryFilterInput };
