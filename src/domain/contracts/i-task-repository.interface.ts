import { Task } from "../entity/task.entity";

export interface ITaskRepository {
  create(input: Task): Promise<void>;
  update(id: string, input: Partial<Task>): Promise<void>;
  findOne(id: string): Promise<Task>;
  findAll(): Promise<Array<Task>>;
}
