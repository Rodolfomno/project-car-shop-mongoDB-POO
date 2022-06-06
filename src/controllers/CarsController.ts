import { NextFunction, Request, Response } from 'express';
import CarsService from '../service/CarsService';

export default class CarsController {
  constructor(private carService = new CarsService()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      const newCar = await this.carService.create(body);
      if (!newCar) {
        const message = 'Can not be possible to create a car';
        return res.status(400).json({ message });
      }
      return res.status(201).json(newCar);
    } catch (error) {
      return next(error);
    }
  };

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this.carService.getAll();
      return res.status(200).json(cars);
    } catch (error) {
      return next(error);
    }
  };
}
