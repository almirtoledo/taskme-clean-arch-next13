import { TaskStatus } from "@/domain/enums/task-status.enum";
import { CreateTask } from "@/domain/use-cases/create-task";
import { GenerateUuidStub } from "@/tests/stubles/generate-uuid-stub";
import { TaskRepositoryStub } from "@/tests/stubles/task-repository-stub";
import { describe, expect, test } from "vitest";

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
