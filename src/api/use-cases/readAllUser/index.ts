import { ReadAllUserUseCase } from "./ReadAllUserUseCase";
import { ReadAllUserController } from "./readAllUserController";
import { UserRepository } from "./../../repositories/implementations/UserRepository";

const userRepository = new UserRepository();
const readAllUserUseCase = new ReadAllUserUseCase(userRepository);
const readAllUserController = new ReadAllUserController(readAllUserUseCase);

export { readAllUserUseCase, readAllUserController };
