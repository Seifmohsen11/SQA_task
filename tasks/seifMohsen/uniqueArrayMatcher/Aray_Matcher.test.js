expect.extend({
    containingUniqeElements(received){
        if(!Array.isArray(received)) throw new Error('please enter an array');
        const set = new Set(received);
        const pass = (set.size === received.length);
        if(pass){
            return {
                pass:true,
                message:() =>'arrey elements are unique'
            }
        }
        else{
            return{
                pass: false,
                message: () => `array elements are not unique`
            }
        }

    }
})

test('array elements are unique or not ', ()=>{
    expect([1,2,3,4,5,6]).containingUniqeElements();
    expect([1,2,2,3,4]).not.containingUniqeElements();
    expect(()=> expect(78).containingUniqeElements()).toThrow('please enter an array');
    expect(()=> expect({}).containingUniqeElements()).toThrow('please enter an array');
    expect(()=> expect('seif').containingUniqeElements()).toThrow('please enter an array');
})