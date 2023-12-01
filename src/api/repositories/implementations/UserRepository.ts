import { Op } from "sequelize";
import { User } from "../../entities/User";
import {
  IFindByKey,
  ISaveUser,
  IUpdateUser,
  IUserRepository,
} from "../IUserRepository";

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const users = await User.findAll();

    return users;
  }

  async findByKey({ key, value }: IFindByKey): Promise<User | null> {
    const user = await User.findOne({
      where: {
        [key]: value,
      },
    });

    return user;
  }

  async findOther({
    id,
    email,
  }: {
    id: number;
    email: string;
  }): Promise<null | User> {
    const user: User | null = await User.findOne({
      where: {
        email: email,
        id: {
          [Op.notLike]: id,
        },
      },
    });

    return user;
  }

  async save(props: ISaveUser): Promise<void> {
    await User.create({
      ...props,
    });
  }

  async update({ id, data }: IUpdateUser): Promise<void> {
    await User.update(
      { ...data },
      {
        where: {
          id,
        },
      },
    );
  }

  async delete(id: number): Promise<void> {
    await User.destroy({
      where: {
        id,
      },
    });
  }
}
