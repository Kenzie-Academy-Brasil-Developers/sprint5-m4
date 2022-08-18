import { AppDataSource } from "../data-source";
import { UserEntity } from "../entities/user.entity";

export default async function listAllUserService () { 
    const data = AppDataSource.getRepository(UserEntity);
    const res  = await data.find()
    return res
}