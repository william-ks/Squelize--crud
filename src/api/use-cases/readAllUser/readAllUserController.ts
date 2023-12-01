import { Request, Response } from "express";
import { ReadAllUserUseCase } from "./ReadAllUserUseCase";
export class ReadAllUserController {
  constructor(private readAllUserUseCase: ReadAllUserUseCase) {}

  async handle(req: Request, res: Response) {
    const users = await this.readAllUserUseCase.execute();

    return res.status(200).json(users);
  }
}
