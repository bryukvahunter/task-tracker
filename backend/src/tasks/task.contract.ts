export const TASK_STATUSES = ['todo', 'inProgress', 'done'] as const;
export const TASK_PRIORITIES = ['low', 'high'] as const;

export type TaskStatus = (typeof TASK_STATUSES)[number];
export type TaskPriority = (typeof TASK_PRIORITIES)[number];

export interface TaskResponse {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  createAt: string;
  updateAt: string;
}
