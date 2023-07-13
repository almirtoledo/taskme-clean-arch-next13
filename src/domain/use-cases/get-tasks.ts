import { ITaskRepository } from "../contracts";
import { Task } from "../entity/task.entity";

export class GetTasks {
  constructor(private readonly taskRepo: ITaskRepository) {}

  async execute(): Promise<Array<Task>> {
    return this.taskRepo.findAll();
  }
}
