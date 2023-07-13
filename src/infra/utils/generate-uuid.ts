import { IGenerateUuid } from "@/domain/contracts";
import { randomUUID } from "crypto";

export class GenerateUuid implements IGenerateUuid {
  make(): string {
    return randomUUID();
  }
}
