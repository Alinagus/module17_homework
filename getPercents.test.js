function getPercents(percent, number){
    return number/100*percent;
}

describe('test for getPercents', () =>{
    it('get percent of the number', ()=>{
        expect(getPercents(20, 200)).toBe(40)
    })
})
