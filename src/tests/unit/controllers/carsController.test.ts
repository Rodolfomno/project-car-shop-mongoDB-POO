import chai from 'chai';
import { Response } from 'superagent';
import app from '../../../app';
import chaiHttp = require('chai-http');


chai.use(chaiHttp);

const { expect } = chai;

describe('Test case for /cars get endpoint', () => {
  it('endpoint return http status code 200', () => {
    chai.request(new app()).get('/cars').end((res: Response) => {
        expect(res).to.have.status(200);
    });
  });
 });