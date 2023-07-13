import { CreateTask } from "@/domain/use-cases/create-task";
import { IReply } from "../contracts/i-reply.interface";
import { badRequest, created } from "../helpers/http";

export class CreateTaskController {
  constructor(private readonly createTask: CreateTask) {}

  async handle(response: any): Promise<IReply> {
    const requiredFields = ["title", "description"];
    for (const field of requiredFields) {
      if (!response[field]) {
        return badRequest(`O campo ${field} é obrigatório!`);
      }
    }
    const { title, description } = response;
    await this.createTask.execute(title, description);
    return created("Task criada!");
  }
}
