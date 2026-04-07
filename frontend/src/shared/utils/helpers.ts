import type { Task, Tasks } from "../../entities/task/types/task";

export function filterTaskByStatus(tasks: Tasks, type: Task["status"]): Tasks {
  if (!Array.isArray(tasks)) return [];

  const filteredTasks = tasks.filter((task) => task.status === type);
  return filteredTasks;
}
