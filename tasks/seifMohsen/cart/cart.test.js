let obj = [
    {   id : 111,
        name : "ball",
        price : 100,
        quantity : 1,
        addedtoFav : true,
        totalPrice : 100
    },
    {   id : 115,
        name : "shoes",
        price : 150,
        quantity : 2,
        addedtoFav : true,
        totalPrice : 300
    },
]
obj.push({
    id : 120,
    name : "shirt",
    price : 200,
    quantity : 3,
    addedtoFav : true,
    totalPrice : 600
})

test("Check the data types of each property",function(){
    expect(obj).toEqual(
        expect.arrayContaining(
            [
                expect.objectContaining({
                    id : expect.any(Number),
                    name : expect.any(String),
                    price : expect.any(Number),
                    quantity : expect.any(Number),
                    addedtoFav :expect.any(Boolean),
                    totalPrice : expect.any(Number)
                })
            ]
    )
    )
})

test('Validate the values for price and quantity', () => {
    obj.map(item => {
        expect(item.id).toBeGreaterThan(0);
        expect(item.price).toBeGreaterThan(0);
        expect(item.totalPrice).toBeGreaterThan(0);
        expect(item.quantity).toBeGreaterThan(0);
    });
});

test('ensures that the total price for object is calculated correctly based on the quantity and price', () => {
    obj.map(item => {
        expect(item.totalPrice).toBe(item.price*item.quantity);
    });
});