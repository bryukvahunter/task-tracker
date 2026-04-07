import type { Task } from '@prisma/client';
import type { TaskResponse } from './task.contract';

export const toTaskResponse = (task: Task): TaskResponse => ({
  id: String(task.id),
  title: task.title,
  description: task.description,
  dueDate: task.dueDate ? task.dueDate.toISOString() : null,
  status: task.status,
  priority: task.priority,
  createAt: task.createAt.toISOString(),
  updateAt: task.updateAt.toISOString(),
});
