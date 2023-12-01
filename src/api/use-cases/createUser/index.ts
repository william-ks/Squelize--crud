import { HandlePassword } from "./../../providers/implementations/HandlePasswords";
import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";
import { UserRepository } from "../../repositories/implementations/UserRepository";

const handlePassword = new HandlePassword();
const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase({
  handlePassword,
  userRepository,
});
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
