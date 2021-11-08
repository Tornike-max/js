var exampleString = 'example'
console.log('string' + ' ' + exampleString);
console.log(exampleString + ' ' + 'string');

var exampleBoolean = 'true';
var exampleBoolean = 'false';

var exampleNumber1 = 5 + 10;
var exampleNumber2 = 20;

var exampleBoolean = exampleNumber1 === exampleNumber2;
console.log(exampleBoolean)
if(!exampleBoolean) {
    console.log(exampleBoolean);
    console.log('print everything is alright');
    console.log('everything')
} else {
    console.log('else')
}

var numBool1 = 20 + 10;
var numBool2 = 30;
var numBool3 = numBool1 === numBool2;
console.log(!numBool3)

var secondBool1 = 20 + 10;
var secondBool2 = 30;
var secondBool3 = secondBool1 === secondBool2;
console.log(secondBool3)

var arrType = ['first', 'second', 'third', 'forth', 'fifth', 'sixth',]

for(var i =0; i< 6; i++){
    console.log(arrType[i])
}

var arrayType = ['coca-cola', 'fanta', 'sprite', 'pepsi',]

for(var drinkList =0; drinkList< 4; drinkList++){
    console.log(arrayType[drinkList])
}