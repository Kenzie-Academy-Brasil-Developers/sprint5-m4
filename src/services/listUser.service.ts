import { AppDataSource } from "../data-source";
import { UserEntity } from "../entities/user.entity";

export default async function listUserService (id:string) { 
    const repo = AppDataSource.getRepository(UserEntity);
    
    const usersData = await repo.find()

    const res = usersData.find(ele => ele.id === id)
    
    if (!res) {
        throw new Error("id not found");
    }

    return res
}