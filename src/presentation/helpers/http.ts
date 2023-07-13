import { IReply } from "../contracts/i-reply.interface";

export const badRequest = (message: string): IReply => ({
  statusCode: 400,
  payload: { message },
});

export const created = (message: string): IReply => ({
  statusCode: 201,
  payload: { message },
});

export const ok = (message: string): IReply => ({
  statusCode: 200,
  payload: { message },
});
