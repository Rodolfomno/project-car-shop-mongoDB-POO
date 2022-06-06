import CarsModel from '../models/CarsModel';

export default class CarsService {
  constructor(private carsModel = new CarsModel()) {}

  public async create(car: object) {
    const newCar = await this.carsModel.create(car);
    return newCar;
  }

  public async getAll() {
    const cars = await this.carsModel.getAll();
    return cars;
  }
}