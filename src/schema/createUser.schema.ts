import { Request, Response, NextFunction } from "express";
import { IUserCreate } from "../interfaces";
import * as yup from "yup";
import { SchemaOf } from "yup";


export const userCreateSchema: SchemaOf<IUserCreate> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  age:yup.number().required()
});
