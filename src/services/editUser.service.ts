import { IUserCreate, IUser, IEnvUser, IEditUser } from "../interfaces";
import { v4 as uudiv4 } from "uuid";
import * as bcrypt from "bcrypt";
import { AppDataSource } from "../data-source";
import { UserEntity } from "../entities/user.entity";
import { object } from "yup";

export const editUserService = async ({
  id,
  email,
  password,
  name,
  age,
}: IEditUser) => {
  const get = AppDataSource.getRepository(UserEntity);
  const repo = await get.find();

  const user = repo.find((ele) => ele.id === id);

  if (!user) {
    throw new Error("id not found");
}

  const userData: IUserCreate = {
    email: email ? email : user!.email,
    name: name ? name : user!.name,
    age: age ? age : user!.age,
    password: password ? await bcrypt.hash(password, 10) : user!.password,
  };

  const tantoFaz = Object.assign(user!, userData)
  await get.update(user!.id,{...tantoFaz});

  const envUser: IEnvUser = user!;
  delete envUser.password;

  return envUser;
};
