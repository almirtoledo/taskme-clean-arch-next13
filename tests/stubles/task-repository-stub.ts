import { ITaskRepository } from "@/domain/contracts";
import { Task } from "@/domain/entity/task.entity";

export class TaskRepositoryStub implements ITaskRepository {
  async create(input: Task): Promise<void> {}
  async update(id: string, input: Partial<Task>): Promise<void> {}
  async findOne(id: string): Promise<Task> {
    return {} as Task;
  }
  async findAll(): Promise<Task[]> {
    return [] as Array<Task>;
  }
}
