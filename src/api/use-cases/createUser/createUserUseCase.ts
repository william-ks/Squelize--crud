import { IHandlePassword } from "../../providers/IHandlePassword";
import { IUserRepository } from "./../../repositories/IUserRepository";
import { ICreateUserDTO } from "./createUserDTO";

export interface ICreateUserUseCase {
  handlePassword: IHandlePassword;
  userRepository: IUserRepository;
}

export class CreateUserUseCase {
  constructor(private tools: ICreateUserUseCase) {}

  async execute(props: ICreateUserDTO) {
    const { userRepository, handlePassword } = this.tools;
    const { name, email, password } = props;

    const alreadyExists = await userRepository.findByKey({
      key: "email",
      value: props.email,
    });

    if (alreadyExists) {
      throw new Error("Email address is already in use:400");
    }

    const newPassword = await handlePassword.hash(password);

    await userRepository.save({ name, email, password: newPassword });
  }
}
