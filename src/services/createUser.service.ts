import { IUserCreate, IUser, IEnvUser } from "../interfaces";
import { v4 as uudiv4 } from "uuid";
import * as bcrypt from "bcrypt";
import { AppDataSource } from "../data-source";
import { UserEntity } from "../entities/user.entity";

export const createUserservice = async ({
  email,
  password,
  name,
  age,
}: IUserCreate) => {
  const get = AppDataSource.getRepository(UserEntity);
  await get.find();

  const hashPassword = await bcrypt.hash(password, 10);

  const userData: IUserCreate = {
    email,
    name,
    password: hashPassword,
    age,
  };

  get.create(userData);
  await get.save(userData);

  const envUser: IEnvUser = userData;
  delete envUser.password;

  return envUser;
};
