import Sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarModel from '../../../models/CarsModel';

chai.use(chaiHttp);

const { expect } = chai;

export const validCar = {
  _id: '999999999',
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

describe('Test case car Model', () => {
  const model = new CarModel();

  describe('verify when create a car', () => {
    before(async () => {
      Sinon.stub(model, 'create').resolves(validCar as any)
    });
    after(() => {
      Sinon.restore();
    });
    it('verify return', async () => {
      const result = await model.create(validCar);
      expect(result).to.be.an('object')
    });
    it('verify property id', async () => {
      const result = await model.create(validCar);
      expect(result).to.have.property('_id');

    });
    it('return right value', async () => {
      const result = await model.create(validCar);
      expect(result).to.be.deep.equal(validCar);
    });
  });
});