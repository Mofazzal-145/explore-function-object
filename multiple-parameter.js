//addition two numbers
function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 22;
var secondNumber = 55;
// addTwoNumbers(secondNumber, firstNumber);
var total = addTwoNumbers(firstNumber, secondNumber);
console.log('adding two numbers', total);

// multiplication two numbers

function multiplyTwonumbers(n1,n2) {
    console.log(n1, n2);
    var mul = n1 * n2;
    return mul;
}
var total = multiplyTwonumbers(2, 100);
console.log('multiplication result ', total);

// subtraction
function subTwoNumbers(num1, num2) {
    console.log(num1, num2);
    var sub = num1 - num2;
     return sub;
}
var total = subTwoNumbers(500, 100);
console.log('subtraction result', total);

// division

function divideTwoNumbers(N1, N2) {
    console.log(N1, N2);
    var div = N1 / N2;
    return div;
}
var total = divideTwoNumbers(50, 10);
console.log('division result' , total);




