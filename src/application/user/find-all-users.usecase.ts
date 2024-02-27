import { HttpStatus, Injectable } from '@nestjs/common';

import { PaginationInput } from '@domain/common/pagination-input';
import { FindUsersQueryFilter } from '@domain/user/query/find-users-query.filter';

import { UserRepository } from '../../domain/user/user.repository';
import { GetAllUsersQuery } from './query/get-all-users.query';
import { UsersResponse } from './response/users.response';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async execute(query: GetAllUsersQuery): Promise<UsersResponse> {
    const { pageSize, pageNumber } = query;
    const candidateQueryFilter = new FindUsersQueryFilter(query);
    const paginationInput = new PaginationInput(pageSize, pageNumber);
    const { result, pagination } = await this.userRepository.findAll(
      paginationInput,
      candidateQueryFilter,
    );

    return new UsersResponse(
      HttpStatus.OK.toString(),
      'Users returned by query',
      pagination,
      result,
    );
  }
}
