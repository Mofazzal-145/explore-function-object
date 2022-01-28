function bringSomething(taka){
    console.log('to buy something' , taka);
    console.log('please give me');
    var foodPrice = 10;
    var foodQuantity = taka / foodPrice;
    return foodQuantity;
}

var money = 500;
var food = bringSomething(money);

console.log('This is your food', food);
// bringSomething(200);
