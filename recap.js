// 1. variable
var favouriteName = 'mofazzal';

// Array
var bookList = ['bangla','english','mathematics','gk'];
var bookIndex = bookList.indexOf('english');
bookList[1] = 'history';
bookList.push('novel');
bookList.pop();

// conditionals

if(bookList[1] == 'english'){
    console.log('I am a english man');
}
else{
    console.log('you are nothing');
}

// loop
// while loop
var i = 0;
while(i< 15){
    console.log(i);
    console.log('I love my mother');
    i++;
}

// for loop

for(var i=0; i< 15;i++){
    console.log(i);
}