import Sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import CarModel from '../../../models/CarsModel';
import CarService from '../../../services/CarsService';

chai.use(chaiHttp);

const { expect } = chai;

const validCar = {
  "_id": '99999999999999',
  "model": 'Uno da Escada',
  "year": 1963,
  "color": 'red',
  "buyValue": 3500,
  "seatsQty": 2,
  "doorsQty": 2
};

const model = new CarModel();
const service = new CarService(model);

describe('test case for car Service', () => {

  describe('case test create car Service', () => {
    describe('valid data', () => {
      before(async () => Sinon.stub(model, 'create').resolves(validCar as any));

      after(() => {
        (model.create as Sinon.SinonStub).restore();
      });

      it('return an object', async () => {
        const result = await service.create(validCar);
        expect(result).to.be.an('object');
      });

      it('verify while data are correct', async () => {
        const result = await service.create(validCar);
        expect(result).to.be.deep.equal(validCar);
      });
    });
  });

  describe('test cases to update a car', () => {
    describe('verify while data are correct', () => {
      before(async () => {
        Sinon.stub(model, 'editCar').resolves(validCar as any);
      });

      after(() => {
        (model.editCar as Sinon.SinonStub).restore();
      });

      it('return a object', async () => {
        const result = await service.editCar(validCar._id, validCar);
        expect(result).to.be.an('object');
      });

      it('verify while data are correct', async () => {
        const result = await service.editCar(validCar._id, validCar);
        expect(result).to.be.deep.equal(validCar);
      });
    });
  });
}); 