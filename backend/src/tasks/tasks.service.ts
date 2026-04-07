import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateTaskDto } from './dto/create-task.dto';
import type { UpdateTaskDto } from './dto/update-task.dto';
import {
  TASK_PRIORITIES,
  TASK_STATUSES,
  type TaskPriority,
  type TaskStatus,
} from './task.contract';
import { toTaskResponse } from './tasks.mapper';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    const data = this.validateCreateTaskDto(createTaskDto);
    const task = await this.prisma.task.create({ data });

    return toTaskResponse(task);
  }

  async findAll() {
    const tasks = await this.prisma.task.findMany({
      orderBy: { createAt: 'desc' },
    });

    return tasks.map(toTaskResponse);
  }

  async findOne(id: number) {
    const task = await this.findTaskOrThrow(id);

    return toTaskResponse(task);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findTaskOrThrow(id);

    const data = this.validateUpdateTaskDto(updateTaskDto);
    const task = await this.prisma.task.update({
      where: { id },
      data,
    });

    return toTaskResponse(task);
  }

  async remove(id: number) {
    await this.findTaskOrThrow(id);

    const task = await this.prisma.task.delete({
      where: { id },
    });

    return toTaskResponse(task);
  }

  private async findTaskOrThrow(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new NotFoundException(`Task with id "${id}" was not found.`);
    }

    return task;
  }

  private validateCreateTaskDto(dto: CreateTaskDto) {
    return {
      title: this.validateTitle(dto.title),
      description: this.validateDescription(dto.description),
      dueDate: this.validateDueDate(dto.dueDate),
      status: this.validateStatus(dto.status),
      priority: this.validatePriority(dto.priority),
    };
  }

  private validateUpdateTaskDto(dto: UpdateTaskDto) {
    const data: {
      title?: string;
      description?: string;
      dueDate?: Date | null;
      status?: TaskStatus;
      priority?: TaskPriority;
    } = {};

    if ('title' in dto) {
      data.title = this.validateTitle(dto.title);
    }

    if ('description' in dto) {
      data.description = this.validateDescription(dto.description);
    }

    if ('dueDate' in dto) {
      data.dueDate = this.validateDueDate(dto.dueDate);
    }

    if ('status' in dto) {
      data.status = this.validateStatus(dto.status);
    }

    if ('priority' in dto) {
      data.priority = this.validatePriority(dto.priority);
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequestException(
        'Request body must contain at least one updatable field.',
      );
    }

    return data;
  }

  private validateTitle(value: unknown) {
    if (typeof value !== 'string') {
      throw new BadRequestException('Field "title" must be a string.');
    }

    const normalizedTitle = value.trim();

    if (!normalizedTitle) {
      throw new BadRequestException('Field "title" cannot be empty.');
    }

    return normalizedTitle;
  }

  private validateDescription(value: unknown) {
    if (value === undefined) {
      return '';
    }

    if (typeof value !== 'string') {
      throw new BadRequestException('Field "description" must be a string.');
    }

    return value.trim();
  }

  private validateDueDate(value: unknown) {
    if (value === undefined || value === null) {
      return null;
    }

    if (typeof value !== 'string') {
      throw new BadRequestException(
        'Field "dueDate" must be an ISO date string or null.',
      );
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      throw new BadRequestException('Field "dueDate" must be a valid date.');
    }

    return date;
  }

  private validateStatus(value: unknown): TaskStatus {
    if (value === undefined) {
      return 'todo';
    }

    if (
      typeof value !== 'string' ||
      !TASK_STATUSES.includes(value as TaskStatus)
    ) {
      throw new BadRequestException(
        `Field "status" must be one of: ${TASK_STATUSES.join(', ')}.`,
      );
    }

    return value as TaskStatus;
  }

  private validatePriority(value: unknown): TaskPriority {
    if (value === undefined) {
      return 'low';
    }

    if (
      typeof value !== 'string' ||
      !TASK_PRIORITIES.includes(value as TaskPriority)
    ) {
      throw new BadRequestException(
        `Field "priority" must be one of: ${TASK_PRIORITIES.join(', ')}.`,
      );
    }

    return value as TaskPriority;
  }
}
