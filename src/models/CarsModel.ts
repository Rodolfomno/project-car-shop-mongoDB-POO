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

  public async getCarById(id: string) {
    const car = await this.carsModel.findOne({ _id: id });
    return car;
  }

  public async editCar(id: string, editedCar: object) {
    const car = await this.carsModel.findOneAndUpdate(
      { _id: id },
      { ...editedCar },
    );
    return car;
  }

  public async deleteCar(id:string): Promise<ICar | null> {
    const car = await this.carsModel.findOneAndDelete({ _id: id });
    return car;
  }
}
