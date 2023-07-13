import { IGenerateUuid, ITaskRepository } from "@/domain/contracts";
import { Task } from "@/domain/entity/task.entity";
import { TaskStatus } from "@/domain/enums/task-status.enum";
import { CreateTask } from "@/domain/use-cases/create-task";
import { randomUUID } from "crypto";
import { describe, expect, test } from "vitest";

class GenerateUuidStub implements IGenerateUuid {
  make(): string {
    return randomUUID();
  }
}

class TaskRepositoryStub implements ITaskRepository {
  async create(input: Task): Promise<void> {}
  async update(id: string, input: Partial<Task>): Promise<void> {}
  async findOne(id: string): Promise<Task> {
    return {} as Task;
  }
  async findAll(): Promise<Task[]> {
    return [] as Array<Task>;
  }
}

describe("CreateTask", () => {
  test("should create a new task with the povided data", async () => {
    const generateUuid = new GenerateUuidStub();
    const taskRepo = new TaskRepositoryStub();
    const sut = new CreateTask(generateUuid, taskRepo);
    let createArgs;
    taskRepo.create = async (input) => {
      createArgs = input;
    };
    const title = "Test Title";
    const description = "Test Description";
    await sut.execute(title, description);

    expect(createArgs).toEqual({
      id: expect.any(String),
      status: TaskStatus.OPEN,
      title,
      description,
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });
});
