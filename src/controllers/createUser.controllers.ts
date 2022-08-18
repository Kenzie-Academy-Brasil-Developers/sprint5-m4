import { Request, Response } from "express";
import { createUserservice } from "../services/createUser.service";


export default async function createUSerController (request:Request, response:Response) {
        const data = request.body
        try {
            const servData = await createUserservice(data)
            return response.status(201).json(servData)
        }
        catch (error:any) {
            return response.status(400).json({
                message: error.message,
              });
        }
}