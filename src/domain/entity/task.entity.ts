import { TaskStatus } from "../enums/task-status.enum";

export interface Task {
  id: string;
  status: TaskStatus;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
