const countDown = require('./CountDown.js')
const getPercents = require('./getPercents.js')
const reverseWord = require('./ReverseWord')


describe('test for getPercents', () =>{
    it('get percent of the number', ()=>{
        expect(getPercents(35, 760)).toBe(266)
    })
    it('get percent of the number', ()=>{
        expect(getPercents(20, 200)).toBe(40)
    })
    it('get percent of the number', ()=>{
        expect(getPercents(80, 370)).toBe(296)
    })
})

describe('test for countDown', () =>{
    it('get count of numbers', ()=>{
        expect(countDown(4)).toStrictEqual([4, 3, 2, 1])
    })
}) 

describe('test for reverseWord', () =>{
    it('get revers of word', ()=>{
        expect(reverseWord('строка')).toBe('акортс')
    })
}) 
