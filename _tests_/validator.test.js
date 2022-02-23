'use strict';

const { expect } = require('@jest/globals');
const server = require("../src/server");
const validator = require('../src/middleware/validator');
const supertest = require("supertest");
const request = supertest(server.app);

describe('test validator middleware', ()=>{

    it('test validator', async ()=>{
        const response = await request.get('/person?name=salam')
        expect(typeof response.body).toEqual('object');
    })
})