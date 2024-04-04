import { HttpStatus } from '@nestjs/common';

import { PaginationInput } from '@domain/common/pagination-input';
import { UserRepository } from '@domain/user/user.repository';
import { UserQueryFilter } from '@domain/user/user-query-filter';

import { GetAllUsersQuery } from './query/get-all-users.query';
import { UsersResponse } from './response/users.response';

export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(query: GetAllUsersQuery): Promise<UsersResponse> {
    const { pageSize, pageNumber } = query;
    const candidateQueryFilter = new UserQueryFilter(query);
    const paginationInput = new PaginationInput(pageSize, pageNumber);
    const { result, pagination } = await this.userRepository.findAll(
      paginationInput,
      candidateQueryFilter,
    );

    return new UsersResponse(
      HttpStatus.OK,
      'Users returned by query',
      pagination,
      result,
    );
  }
}
