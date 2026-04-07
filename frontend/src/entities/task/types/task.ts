export type Status = "todo" | "inProgress" | "done";

export type Priority = "high" | "low";

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  status: Status;
  priority: Priority;
  createAt: string;
  updateAt: string;
}

export type Tasks = Task[];
