import { IGenerateUuid, ITaskRepository } from "../contracts";
import { Task } from "../entity/task.entity";
import { TaskStatus } from "../enums/task-status.enum";

export class CreateTask {
  constructor(
    private readonly generateUuid: IGenerateUuid,
    private readonly taskRepo: ITaskRepository
  ) {}

  async execute(title: string, description: string): Promise<void> {
    const currentDate = new Date();
    const task: Task = {
      id: this.generateUuid.make(),
      status: TaskStatus.OPEN,
      title,
      description,
      createdAt: currentDate,
      updatedAt: currentDate,
    };
    await this.taskRepo.create(task);
  }
}
