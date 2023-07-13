import { TaskStatus } from "@/domain/enums/task-status.enum";
import { TaskRepository } from "@/infra/repository/task-repository";
import { describe, expect, test } from "vitest";

describe("TaskRepository", () => {
  const sut = new TaskRepository();
  const task = {
    id: "1",
    status: TaskStatus.OPEN,
    title: "Test Title",
    description: "Test Description",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  test("create: should add a new task to the repository", async () => {
    await sut.create(task);

    const tasks = await sut.findAll();
    expect(tasks).toEqual([task]);
  });

  test("findAll: should return all tasks in the repository", async () => {
    await sut.create(task);

    const tasks = await sut.findAll();
    expect(tasks).toEqual([task, task]);
  });
});
