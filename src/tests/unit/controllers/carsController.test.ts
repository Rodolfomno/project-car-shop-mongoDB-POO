import chai from 'chai';
import { Response } from 'superagent';
import App from '../../../app';
import chaiHttp = require('chai-http');


chai.use(chaiHttp);
const app = new App();

const { expect } = chai;

describe('Test case for /cars get endpoint', () => {
  it('endpoint return http status code 200', () => {
    chai.request(app).get('/cars').end((res: Response) => {
        expect(res).to.have.status(200);
    });
  });
  it('endpoint return http status code 404', () => {
    chai.request(app).get('/cars/id?=999999').end((res: Response) => {
        expect(res).to.have.status(404);
    });
  });

 });