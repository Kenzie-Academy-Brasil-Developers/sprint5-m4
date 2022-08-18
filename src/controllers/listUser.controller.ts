import { Request, Response } from "express";
import listUserService from "../services/listUser.service";

export default async function listUserController(
  request: Request,
  response: Response
) {
  const data = request.params.id;

  try {
    const servData = await listUserService(data);

    return response.status(200).json(servData);

  } catch (error: any) {
    
    return response.status(400).json({
      message: error.message,
    });
  }
}
