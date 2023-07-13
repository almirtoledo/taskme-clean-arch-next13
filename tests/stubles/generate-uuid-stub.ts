import { IGenerateUuid } from "@/domain/contracts";
import { randomUUID } from "crypto";

export class GenerateUuidStub implements IGenerateUuid {
  make(): string {
    return randomUUID();
  }
}
