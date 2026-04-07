import type { TaskPriority, TaskStatus } from '../task.contract';

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  dueDate?: string | null;
  status?: TaskStatus;
  priority?: TaskPriority;
}
