import { NextFunction, Request, Response } from 'express';
import CarsService from '../service/CarsService';

export default class CarsController {
  constructor(private carService = new CarsService()) {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      const newCar = await this.carService.create(body);
      if (!newCar) {
        const message = 'it wanst possible to create a car';
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

  // r lint ok

  public getCarById = async (r: Request, res: Response, next: NextFunction) => {
    const { id } = r.params;    
    const message = 'Id must have 24 hexadecimal characters';

    try {
      if (id.length !== 24) return res.status(400).json({ error: message });

      const car = await this.carService.getCarById(id);

      if (!car) return res.status(404).json({ error: 'Object not found' });

      return res.status(200).json(car);
    } catch (error) {
      return next(error);
    }
  };

  public editCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const message = 'Id must have 24 hexadecimal characters';
  
      if (id.length !== 24) return res.status(400).json({ error: message });

      const editedCa = await this.carService.editCar(id, req.body);
  
      if (!editedCa) return res.status(404).json({ error: 'Object not found' });

      return res.status(200).json({ _id: id, ...req.body });
    } catch (error) {
      return next(error);
    }
  };
}
