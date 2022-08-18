import { Request, Response } from "express";
import { IEditUser } from "../interfaces";
import { editUserService } from "../services/editUser.service";

export default async function editUserController (
    request: Request,
    response: Response
) {
    const user:IEditUser = {
        id:request.params.id,
        ...request.body
    }
    try {
        const resp = await editUserService(user)

        return response.status(200).json({message: resp})
        
    } catch (error) {

        if (error instanceof Error) {
            const { name, message } = error;
            return response.status(404).send({
              error: name,
              message,
            });
          }
        
        
      }

}