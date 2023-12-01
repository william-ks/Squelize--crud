import { User } from "./../entities/User";

export interface IFindByKey {
  key: "id" | "email";
  value: number | string;
}

export interface IUpdateUser {
  id: number;
  data: {
    name?: string;
    email?: string;
    password?: string;
  };
}
export interface ISaveUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  findByKey(props: IFindByKey): Promise<User | null>;
  findAll(): Promise<User[]>;
  findOther({ id, email }: { id: number; email: string }): Promise<User | null>;
  save(props: ISaveUser): Promise<void>;
  update(props: IUpdateUser): Promise<void>;
  delete(id: number): Promise<void>;
}
