import chai from 'chai';
import { Response } from 'superagent';
import { app } from '../../../app';
import chaiHttp = require('chai-http');


chai.use(chaiHttp);

const { expect } = chai;

describe('Test case for /cars get endpoint', () => {
  it('endpoint return http status code 200', () => {
    chai.request(app).get('/cars').end((res: Response) => {
        expect(res).to.have.status(200);
    });
  });

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