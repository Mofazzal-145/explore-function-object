// var i = 0;
// while (i < 10){
//     console.log(i);
//     if (i == 5){
//         break;
//     }
//     i++;
// }

// for loop

// for (var i = 0; i < 20; i++){
//   console.log(i);
//   if(i == 10){
//     //   console.log('muri kaita hoba');
//       break;
//   }

// }

var numbers = [45, 54, 35, 21, 33, 56, 73, 49, 91, 19, 101, 67, 78];
// for(var i = 0; i < numbers.length; i++){
//     var num = numbers [i];
//     console.log(num);
//     if( num > 100){
//         break;
//     }

// }

// anaother

for(var i = 0; i< numbers.length; i++){
    var num = numbers [i];
    if (num > 90){
        continue;
    }
    console.log(num);
}

