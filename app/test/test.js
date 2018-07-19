const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
    api = supertest('http://localhost:8080/api/v1');


// this test checks wrong API endpoints from MyDiary
describe('Checks wrong API endpoints', () => {
    it('it should return a 404 response', (done) => {
        api.get('/entrieser')
            .expect(404, done);
    });
    it('it should return a 404 response', (done) => {
        api.get('/entries/entry/6')
            .expect(404, done);
    });
});

// this test should post a new entry into MyDiary
describe('POST new entries', () => {

    it('It should POST first entry', (done) => {
        api.post('/entries')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                name: "First Note",
                content: "Building a Nodejs API"
               
            })
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                done(err);
                
            });

    }); 
    
    it(' It should POST second entry', (done) => {
        api.post('/entries')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                name: "Second Note",
                content: "This is actually fun "

            })
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err, res) => {
                done(err);

            });

    }); 

    it('It should not POST an entry without content or name of the entry', (done) => {
        api.post('/entries')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                
                content: "Getting ready for a full ride at Andela "

            })
            .expect('Content-Type', /json/)
            .expect(400)
            .end((err, res) => {
                done(err);

            });

    }); 
});

// this test should et all entries fromm MyDiary
describe('GET all entries', () => {

    it('it should GET all entries in MyDiary', (done) => {
        api.get('/entries')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                
                done(err);

            });

    });

    it('it should be objects', (done) => {
        api.get('/entries')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function (err, res) {
                expect(typeof res.body).to.equal("object");
        
                done();
            });
    });

});

// this test should get a new entry from MyDiary
describe('GET an entry', () => {

    it('it should return a 200 response', (done) => {
        api.get('/entries/1')
            .expect(200, done);
    });

    it('it should return a 404 response', (done) => {
        api.get('/entries/3')
            .expect(404, done);
    });

    it('should be an object with properties not null', (done) => {
        api.get('/entries/1')
            .expect(200)
            .end(function (err, res) {
                expect(res.body.name).to.not.equal(null);
                expect(res.body.content).to.not.equal(null);
                expect(res.body.created_at).to.not.equal(null);
                done();
            });
    });

});

//this test should update an entry from MyDiary
describe('UPDATE an entry', () => {

    it('it should return a 200 response', (done) => {
        api.put('/entries/1')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                name: "Second Note Updated",
                content: "Andela is EPIC "
            })
            .expect(200)
            .end(function (err, res) {
            expect(res.body.name).to.not.equal(null);
            expect(res.body.content).to.not.equal(null);
            expect(res.body.created_at).to.not.equal(null);
            done();
        });
    });

});

