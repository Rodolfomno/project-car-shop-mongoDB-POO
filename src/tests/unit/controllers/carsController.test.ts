import chai from 'chai';
import { Response } from 'superagent';
import { app } from '../../../app';
import chaiHttp = require('chai-http');


chai.use(chaiHttp);

const { expect } = chai;

const validCar = {
    "model": "Uno da Escada",
    "year": 1963,
    "color": "red",
    "buyValue": 3500,
    "seatsQty": 2,
    "doorsQty": 2
}

describe('Test case for /cars get endpoint', () => {
  it('endpoint return http status code 200', () => {
    chai.request(app).get('/cars').end((res: Response) => {
      expect(res).to.have.status(200);
    });
  });

  it('endpoint post /cars return 201 status', () => {
    chai.request(app).post('/cars').send(validCar).end((res: Response) => {
      expect(res).to.have.status(201);
    });

  });

  describe('endpoint to get car id', () => {

    it('endpoint get /cars/id return 201 status', () => {
      let id = '';
      chai.request(app).post('/cars').send(validCar).end((res: Response) => {
        id = res.body._id;
      });
      chai.request(app).get(`/cars/${id}`).end((res: Response) => {
        expect(res).to.have.status(200);
      });
     });

  });


  describe('failt test cases', () => {

    it('endpoint get  return http status code 404', () => {
      chai.request(app).get('/cars/123456789012345678901234').end((res: Response) => {
          console.log(res);
          expect(res).to.have.status(404);
      });
    });
    it('endpoint delete return http status code 404', () => {
       chai.request(app).delete('/cars/123456789012345678901234').end((res: Response) => {
          expect(res).to.have.status(404);
      });
    });
  });



 /* describe('test for delete endpoint /cars/id', () => {
    it('endpoint get /cars/id return 204 status', () => {
      let id = '';
      chai.request(app).post('/cars').send(validCar).end((res: Response) => {
        id = res.body._id;
      });
      chai.request(app).delete(`/cars/${id}`).end((res: Response) => {
        console.log('oASIASAISJ', res);
        expect(res).to.have.status(204);
      });
    });  
  });
  */
 });
