describe('SUM Functionality', ()=>{
    beforeEach(()=>{
        console.log('Before each test case...');
    })
    afterEach(()=>{
        console.log('After each test case...');
    })
    test('add 1+2 equal to 3', ()=>{
        const num = 1+2;
        expect(num).toBe(3);
    })
})