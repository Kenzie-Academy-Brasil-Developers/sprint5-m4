import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { UserEntity } from "../entities/user.entity"

export const existEmailMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const {email} = req.body
    const dataRepo = AppDataSource.getRepository(UserEntity)
    const get = await dataRepo.find()
    const verify = get.find((ele) => ele.email === email)
    if (verify) {
        return res.status(400).json({ message: "this email already registered" })
    }
    next()
}