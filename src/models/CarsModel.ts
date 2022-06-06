import { model as createModel } from 'mongoose';
import CarSchema from '../interfaces/CarSchema';
import ICar from '../interfaces/ICar';

export default class CarsModel {
  constructor(private carsModel = createModel<ICar>('cars', CarSchema)) {}

  public async create(car: object) {
    const newCar = await this.carsModel.create(car);
    return newCar;
  }

  public async getAll() {
    const cars = await this.carsModel.find();
    return cars;
  }
}