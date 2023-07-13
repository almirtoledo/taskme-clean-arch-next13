import { ITaskRepository } from "@/domain/contracts";
import { Task } from "@/domain/entity/task.entity";

export class TaskRepository implements ITaskRepository {
  private tasks: Array<Task> = [];

  async create(input: Task): Promise<void> {
    this.tasks.push(input);
  }

  update(id: string, input: Partial<Task>): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findOne(id: string): Promise<Task> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }
}
