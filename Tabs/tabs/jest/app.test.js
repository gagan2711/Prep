const {add,fetchData}  = require('./app');
const { TestWatcher } = require('jest');
test('sum of 1 and 2 are going to 3',()=>{
    expect(add(1,2)).toBe(3);
})
test('check fractions',()=>{
    expect(0.2+0.1).toBeCloseTo(0.3);
})
test('check String',()=>{
    expect('someName').toMatch(/Name/);
})
test('Testing call back',done=>{
    fetchData((data)=>{
        try{
              expect(data).toBe("someData");
        }catch(error){
           done(error)
        }
    })
})