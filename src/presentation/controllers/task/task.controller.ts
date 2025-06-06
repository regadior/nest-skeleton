import { CreateTaskUseCase } from '@application/task/create-task.usecase';
import { DeleteTaskUseCase } from '@application/task/delete-task.usecase';
import { CreateTaskDto } from '@application/task/dto/request/create-task.dto';
import { UpdateTaskDto } from '@application/task/dto/request/update-task.dto';
import { FindAllTasksUseCase } from '@application/task/find-all-tasks.usecase';
import { GetTaskUseCase } from '@application/task/get-task.usecase';
import { GetAllTasksQuery } from '@application/task/query/get-all-users.query';
import { UpdateTaskUseCase } from '@application/task/update-task.usecase';
import { RoleEnum } from '@domain/user/role/role.enum';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsOwner } from '@presentation/authz/decorators/is-owner.decorator';
import { Role } from '@presentation/authz/decorators/role.decorator';

@Controller('tasks')
@ApiTags('Task')
@UsePipes(new ValidationPipe({ transform: true }))
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
    private readonly getTaskUseCase: GetTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly findAllTasksUseCase: FindAllTasksUseCase,
  ) {}
  @Post()
  @ApiOperation({ summary: 'Add new Task' })
  @ApiResponse({
    status: 201,
    description: 'Successfully added new Task',
  })
  @Role([RoleEnum.ADMIN, RoleEnum.USER])
  createTask(@Body() data: CreateTaskDto, @Req() req) {
    const user = req.user;
    return this.createTaskUseCase.execute({ data: data, userId: user.id });
  }
  @Patch(':taskId')
  @ApiOperation({ summary: 'Update Task by Id' })
  @ApiResponse({
    status: 200,
    description: 'Successfully',
  })
  @Role([RoleEnum.ADMIN, RoleEnum.USER])
  updateTask(
    @Param('taskId', new ParseIntPipe())
    taskId: number,
    @Body() data: UpdateTaskDto,
  ) {
    return this.updateTaskUseCase.execute({ ...data, id: taskId });
  }
  @Get(':taskId')
  @ApiOperation({ summary: 'Get Task by Id' })
  @ApiResponse({
    status: 200,
    description: 'Successfully',
  })
  @Role([RoleEnum.ADMIN, RoleEnum.USER])
  @IsOwner({
    required: true,
    excludedRoles: [RoleEnum.ADMIN],
    entityId: 'taskId',
  })
  getTask(
    @Param('taskId', new ParseIntPipe())
    taskId: number,
  ) {
    return this.getTaskUseCase.execute({ taskId });
  }

  @Get()
  @ApiOperation({ summary: 'Return tasks that matches input query' })
  @ApiResponse({
    status: 200,
    description: 'Tasks list',
    // type: FindAllTasksUseCase,
  })
  @Role([RoleEnum.ADMIN, RoleEnum.USER])
  findAllTasks(@Query() query: GetAllTasksQuery) {
    return this.findAllTasksUseCase.execute(query);
  }

  @Delete(':taskId')
  @ApiOperation({ summary: 'Delete Task by Id' })
  @ApiResponse({
    status: 204,
    description: 'Successfully',
  })
  @Role([RoleEnum.ADMIN, RoleEnum.USER])
  deleteTask(
    @Param('taskId', new ParseIntPipe())
    taskId: number,
  ) {
    return this.deleteTaskUseCase.execute({ taskId });
  }
}
