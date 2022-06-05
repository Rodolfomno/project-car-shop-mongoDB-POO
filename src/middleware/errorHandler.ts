import { NextFunction, Request, Response } from 'express';

class HttpException extends Error {
  status: number;
  
  message: string;
  
  details?: [err: { type: string, message: string } ];
  
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default function errorHandler(
  error:HttpException, 
  _req: Request, 
  res: Response, 
  next: NextFunction,
) {
  console.log(next);
  if (error.details) {
    const [e] = error.details;
    return res.status(400).json({ message: e.message });
  }
  return res.status(500).json(error.message);
} 