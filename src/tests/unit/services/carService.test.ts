import Sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import CarModel from '../../../models/CarsModel';
import CarService from '../../../service/CarsService';

chai.use(chaiHttp);

const { expect } = chai;

export const validCar = {
  _id: '99999999999999',
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const invalidCar = {
  _id: '99999999999999',
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 0,
  doorsQty: 2
};


describe('test case for car service', () => {
  const model = new CarModel();
  const service = new CarService(model);

  describe('case test create car', () => {
    describe('valid data', () => {
      before(async () => {
        Sinon.stub(model, 'create').resolves(validCar as any);
      });

      after(() => {
        Sinon.restore();
      });

      it('return an object', async () => {
        const result = await service.create(validCar as any);
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
        Sinon.restore();
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