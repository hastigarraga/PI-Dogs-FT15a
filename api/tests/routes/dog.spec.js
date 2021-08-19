/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, Temperament,conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  id: "c27ef91-0e8b-4fda-a041-0c8e20104587",
  name: 'Pug',
  height: "1-50",
  weight: "1-50",
  life_span: "135"
};

describe('Dog routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

describe('/dogs', function() {
  it('GET respond with a status 200', function(){
    return agent
      .get('/dogs')
      .expect(function(res){
        expect(res.status).equal(200)})
  });
})
describe('/dogs?name=', function() {
  it('GET responds with a status 200 if it finds a dog', function() {
    return agent 
      .get('/dogs?name=Pug') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  });
})
describe('/dogs/:id', function() {
  it('GET responds with a status 200 if it finds a dog for id',  function() {
    return agent 
      .get('/dogs/1') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  })
})
describe('/temperaments', function() {
  it('GET respond with a status 200 if you find temperaments', function() {
    return agent 
      .get('/temperament') 
      .expect(function(res){
        expect(res.status).equal(200)}); 
  })
})

});
