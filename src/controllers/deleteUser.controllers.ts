import { Request, Response } from "express";
import { AppError } from "../entities/erros.entity";
import deleteUserService from "../services/deleteUser.service";

export default async function deleteUSerController(
  request: Request,
  response: Response
) {
  try {
    const id = request.params.id;
    await deleteUserService(id);

    return response.status(200).json({ message: "user deleted" });
  } catch (error) {
    console.log("teste");
    if (error instanceof Error) {
      const { name, message } = error;
      return response.status(404).send({
        error: name,
        message,
      });
    }
  }
}
