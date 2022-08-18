import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { UserEntity } from "../entities/user.entity"

export const verifyIDMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const id:string = req.params.id
    
    const dataRepo = AppDataSource.getRepository(UserEntity)

    const get = await dataRepo.find()

    const verify = get.find((ele) => ele.id === id)

    if (!verify) {
        return res.status(404).json({ message: "this id not found" })
    }
    next()
}