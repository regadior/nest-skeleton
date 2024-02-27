/* eslint-disable @typescript-eslint/naming-convention */
import { QueryFilter, StringLikeFilter } from '@domain/common/query-filters';

class FindUserQueryFilter extends QueryFilter {
  id?: StringLikeFilter;

  name?: StringLikeFilter;

  lastName?: StringLikeFilter;

  username?: StringLikeFilter;

  email?: StringLikeFilter;

  constructor({ id, name, lastName, username, email }: UserQueryFilterInput) {
    super();
    if (id) this.id = this.mapStringLikeFilter(id);
    if (name) this.name = this.mapStringLikeFilter(name);
    if (lastName) this.lastName = this.mapStringLikeFilter(lastName);
    if (username) this.username = this.mapStringLikeFilter(username);
    if (email) this.email = this.mapStringLikeFilter(email);
  }
}

interface UserQueryFilterInput {
  id?: string;
  name?: string;
  lastName?: string;
  username?: string;
  email?: string;
}

export { FindUserQueryFilter, UserQueryFilterInput };
