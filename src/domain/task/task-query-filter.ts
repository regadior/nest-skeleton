import { QueryFilter } from '@domain/common/query-filters';
import { TaskStatusEnum } from '@domain/task/task-status.enum';

export class TaskQueryFilter extends QueryFilter {
  status?: TaskStatusEnum;

  constructor({ status }: TaskQueryFilterInput) {
    super();
    if (status) this.status = status;
  }
}

export interface TaskQueryFilterInput {
  status?: TaskStatusEnum;
}
