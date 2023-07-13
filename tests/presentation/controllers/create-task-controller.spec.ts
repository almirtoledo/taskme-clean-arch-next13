import { CreateTask } from "@/domain/use-cases/create-task";
import { CreateTaskController } from "@/presentation/controllers/create-task-controller";
import { GenerateUuidStub } from "@/tests/stubles/generate-uuid-stub";
import { TaskRepositoryStub } from "@/tests/stubles/task-repository-stub";
import { describe, expect, test } from "vitest";

describe("CreateTaskController", () => {
  const generateUuid = new GenerateUuidStub();
  const taskRepo = new TaskRepositoryStub();
  const createTask = new CreateTask(generateUuid, taskRepo);
  const createTaskController = new CreateTaskController(createTask);

  test("should return 400 if required field is not provided", async () => {
    const response = {};
    const result = await createTaskController.handle(response);

    expect(result.statusCode).toBe(400);
  });

  test("should call CreateTask with correct values", async () => {
    let executeArgs;
    createTask.execute = async (title, description) => {
      executeArgs = { title, description };
    };
    const response = {
      title: "any_title",
      description: "any_description",
    };
    await createTaskController.handle(response);

    expect(executeArgs).toEqual(response);
  });

  test("should return 201 if task is created successfully", async () => {
    const response = {
      title: "any_title",
      description: "any_description",
    };
    const result = await createTaskController.handle(response);

    expect(result.statusCode).toBe(201);
  });
});
