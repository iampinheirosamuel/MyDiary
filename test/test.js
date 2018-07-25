import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

// generic tests
describe('MyDiary Entries', () => {
  it('It should get all entries GET /api/v1/entries');
  it('It should get an entry  GET /api/v1/entries/entry:id');
  it('It should add an entry POST /api/v1/entries');
  it('It should modify an entry PUT /api/v1/entries/entry:id');
  it('It should delete an entry DELETE  /api/v1/entries/entry:id');
  it('It should return 404 NOT FOUND for wrong API endpoints  /api/v1/entries');
});

describe('MyDiary Users', () => {
  it('It should create/sign up a new user  POST /api/v1/user/');
  it('It should login a user  POST /api/v1/user/');
  it('It should logout a user  POST /api/v1/user/');
  it('It should get user profile  GET /api/v1/user/user:id');
  it('It should modify user profile PUT /api/v1/user/user:id');
  it('It should delete an user DELETE  /api/v1/user/user:id');
  it('It should return 404 NOT FOUND for wrong API endpoints  /api/v1/user');
});
