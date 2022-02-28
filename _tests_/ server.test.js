"use strict";

const server = require("../src/server");

const supertest = require("supertest");

const request = supertest(server.app);


describe("test API server ", () => {
  
  it("testing bad route", async () => {
    const response = await request.get("/badpath");
    expect(response.status).toEqual(404);
  });
  it("testing bad method", async () => {
    const response = await request.post("/person");
    expect(response.status).toEqual(404);
  });

  //anther way to test if the query is empty
  // it("test /person with no query", async () => {
  //   const response = await request.get("/person?name=");
  //   expect(response.status).toEqual(500);
  // });

  it("test /person with name", async () => {
    const response = await request.get("/person?name=salam");
    expect(response.status).toEqual(200);
  });
  it("test /person with name", async () => {
    const response = await request.get("/person?name=salam");
    console.log(response.body);
    expect(response.body).toEqual({name:'salam'});
  });

});
