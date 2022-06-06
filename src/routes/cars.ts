import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import carValidation from '../middleware/carValidation';

const carsRouter = Router();

const carsController = new CarsController();

carsRouter.post('/', carValidation, carsController.create);
carsRouter.get('/', carsController.getAll);

export default carsRouter;