import { AppDataSource } from "../data-source";
import { AppError } from "../entities/erros.entity";
import { UserEntity } from "../entities/user.entity";

export default async function deleteUserService (id:string) { 
    
    
    const repo = AppDataSource.getRepository(UserEntity);
    try {
    const usersData = await repo.findOne({where:{id}})

    await repo.delete(usersData!.id)
    
    } catch (error:any) {
    
    if (error.code ===  "22P02" || error instanceof Error) {
        throw new Error("id not found");
    }

}
    
}