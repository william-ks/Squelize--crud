import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    await this.createUserUseCase.execute({ name, email, password });

    return res.status(201).end();
  }
}
