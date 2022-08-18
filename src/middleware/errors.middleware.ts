import { NextFunction, Request, response, Response } from "express"
import { AppDataSource } from "../data-source"
import { AppError } from "../entities/erros.entity";
import { UserEntity } from "../entities/user.entity"

export default async function errosMiddleware (error:AppError, req:Request, res:Response, _:NextFunction) {
       

        return response.status(error.status_code).send({
          message: error.message
        });

}