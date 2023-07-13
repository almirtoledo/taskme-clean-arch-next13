import { Task } from "@/domain/entity/task.entity";
import { TaskStatus } from "@/domain/enums/task-status.enum";
import { GetTasks } from "@/domain/use-cases/get-tasks";
import { TaskRepositoryStub } from "@/tests/stubles/task-repository-stub";
import { describe, expect, test } from "vitest";

describe("GetTasks", () => {
  test("should return all tasks", async () => {
    const taskRepo = new TaskRepositoryStub();
    const sut = new GetTasks(taskRepo);
    const tasks: Array<Task> = [
      {
        id: "any_id_1",
        status: TaskStatus.OPEN,
        title: "any_title",
        description: "any_description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "any_id_2",
        status: TaskStatus.OPEN,
        title: "any_title",
        description: "any_description",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    taskRepo.findAll = async () => tasks;
    const result = await sut.execute();

    expect(result).toEqual(tasks);
  });
});
