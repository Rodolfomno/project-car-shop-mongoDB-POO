import { NextFunction, Request, Response } from 'express';
import carSchema from '../schemas/carSchemJoi';

export default async (req:Request, _res:Response, next: NextFunction) => {
  try {
    await carSchema.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};