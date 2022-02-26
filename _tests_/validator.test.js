'use strict';

const { expect } = require('@jest/globals');

const validator = require('../src/middleware/validator');

describe('test validator middleware', ()=>{

    it('test query without name', ()=>{
        let req = {query:{}};
        let res = {};
        let next = jest.fn();
        validator(req,res,next);
        expect(next).toHaveBeenCalledWith('Name required');
    })
    
    it('test query with name', ()=>{
        let req = {query:{name:'salam'}};
        let res = {};
        let next = jest.fn();
        validator(req,res,next);
        expect(next).toHaveBeenCalledWith();
    })
})