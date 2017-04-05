const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('Get all goals', () => {
  it('It should return all the goals', (done) => {
    chai.request(server)
        .get('/api/getAllGoal')
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.not.be.empty;
          done();
        });
  });
});
