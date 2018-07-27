import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const should = chai.should();
chai.use(chaiHttp);

// generic tests
describe('MyDiary Entries', () => {
  describe('GET all entries', () => {
    it('It should get all entries GET /api/v1/entries', (done) => {
      chai.request(app)
        .get('/api/v1/entries')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          done();
        });
    });
  });
  describe('POST an entry', () => {
    it('It should add an entry POST /api/v1/entries', (done) => {
      const entry = {
        name: 'Andela Boot Camp Challenge First',
        content: 'What you should know bout it',
      };
      chai.request(app)
        .post('/api/v1/entries')
        .send(entry)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          done();
        });
    });

    it('It should add an entry POST /api/v1/entries', (done) => {
      const entry = {
        name: 'Andela Boot Camp Challenge Second',
        content: 'What you should know bout it',
      };
      chai.request(app)
        .post('/api/v1/entries/')
        .send(entry)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          done();
        });
    });
  });

  describe('GET an entry', () => {
    it('It should get an entry  GET /api/v1/entries/:entry_id', (done) => {
      chai.request(app)
        .get('/api/v1/entries/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          done();
        });
    });
  });


  describe('PUT modify an entry', () => {
    it('It should modify an entry PUT /api/v1/entries/entry_id', (done) => {
      const entry = {
        name: 'Andela Boot Camp: My Experience ',
        content: 'What you should know about it. It is a pretty exciting experince',
      };
      chai.request(app)
        .put('/api/v1/entries/0')
        .send(entry)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          done();
        });
    });
  });

  describe('DELETE an entry', () => {
    it('It should delete an entry DELETE  /api/v1/entries/entry:id', (done) => {
      chai.request(app)
        .delete('/api/v1/entries/0')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          done();
        });
    });
  });
});

/**
 * reference
 * https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
 */
