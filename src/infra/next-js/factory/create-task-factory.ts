import { CreateTask } from "@/domain/use-cases/create-task";
import { TaskRepository } from "@/infra/repository/task-repository";
import { GenerateUuid } from "@/infra/utils/generate-uuid";
import { CreateTaskController } from "@/presentation/controllers/create-task-controller";
import { NextRequest, NextResponse } from "next/server";

export abstract class CreateTaskFactory {
  async handle(req: NextRequest): Promise<NextResponse> {
    const generateUuid = new GenerateUuid();
    const taskRepo = new TaskRepository();
    const createTask = new CreateTask(generateUuid, taskRepo);
    const controller = new CreateTaskController(createTask);
    const { statusCode, payload } = await controller.handle(req.body);

    return NextResponse.json(payload, { status: statusCode });
  }
}
