var computer = {
    price: 25000,
    storage: '256gb',
    color: 'black',
    processor: 'inter i5'
};
// console.log(computer);
// console.log(computer.processor);

var computerPrice = computer.price;
// console.log(computerPrice);

// set a Object property value 

computer.price = 30000;
// console.log(computer);

// different way to set a value of an Object 

var priceProperty = 'price';

computer.price = 31000;
computer["price"] = 330000;
computer[priceProperty] = 400000;
// console.log(computer);

// another

var storageProperty = 'storage';

computer[storageProperty] = '512tb';
computer['storage'] = '1tb';
computer.storage = '5tb';

console.log(computer);


