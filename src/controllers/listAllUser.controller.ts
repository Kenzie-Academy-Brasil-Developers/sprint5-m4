import { Request, Response } from "express";
import { createUserservice } from "../services/createUser.service";
import listAllUserService from "../services/listAllUsers.service";

export default async function listAllUserController(
  request: Request,
  response: Response
) {
  try {
    const servData = await listAllUserService();
    
    return response.status(200).json(servData);

  } catch (error: any) {
    
    return response.status(400).json({
      message: error.message,
    });
    
  }
}
