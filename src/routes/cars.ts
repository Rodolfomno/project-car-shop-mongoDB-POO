import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import carValidation from '../middleware/carValidation';

const carsRouter = Router();

const carsController = new CarsController();

carsRouter.post('/', carValidation, carsController.create);
carsRouter.get('/:id', carsController.getCarById);
carsRouter.get('/', carsController.getAll);
carsRouter.put('/:id', carValidation, carsController.editCar);
carsRouter.delete('/:id', carsController.deleteCar);

export default carsRouter;