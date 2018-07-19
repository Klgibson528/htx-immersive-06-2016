
// function expression


var heigth = 4;
var width = 5;

var myFunctionName = (function (height, width){
        var results = height + width;
        console.log(results);
})(heigth, width);


// myFunctionName(heigth , width);

// console.log(myFunctionName);



//function declaration

// myFunctionName(3, 4);

// function myFunctionName(height, width){

//     var results = height * width;
//     console.log(results);
// }


// function passByValue(passedArray){

//     var newArray = passedArray;
//     newArray.push(4);
//     newArray.push(1000);
//     // passedArray.push(4);
//     // passedArray.push(4);
//     return newArray;

// }

// var myStringPassed = 1;

// var myArray = [1,2,3,4,5];


// console.log(passByValue(myArray));

// console.log(myArray);


// var a = 5;

// function myFunction(){

//     var a = 4;

//     return a;

// }

// console.log("inside my function call: ", myFunction());

// console.log("after my function call: ", a)

// function myFunc() {

//     var a = 5;

//    if( a == 5){
//        console.log("inside of block")

//        var a = 4;
//        console.log("inside of of block: ", a)
//    }

//    for (let a = 20; a < 25; a++){
//        //console.log(a);
//    }

   
//    console.log("outside of blocK", a);
    
// }

// myFunc();

// const pi = 3.14;

// console.log(pi);

// pi = 3;
// console.log(pi);

// const myDict = {"name": "Matt"};

// console.log(myDict);

// myDict["name"] = "Veronica";

// console.log(myDict);

// myDict["lastName"] = "Fisher";

// console.log(myDict);

// const myArray = [1,2,3,4];

// console.log(myArray);

// myArray.push(4);
// console.log(myArray);

// var add = function(num1, num2){

//     return num1 + num2;

// }

// console.log(add);

// console.log(add(4, 5));

// var subtract = function(num1, num2){
//     return num1 - num2;

// }

// console.log(subtract(1,2));

// console.log(subtract(5, 4));

// function calc(num1, num2, myCalculation){

//     return myCalculation(num1, num2);
// }

// console.log(calc(4, 5, add));

// console.log(calc(4, 5, subtract));

// console.log(add(2, 4));

// console.log(add(4, 6));

// console.log(add(5, 10));

// let clickCount = 0;

// const handleClick = () =>{
//     clickCount = clickCount + 1;
//     console.log(`you have clickecd ${clickCount}  times`);
// }


// handleClick();

// var arr = [1, -4, 3, -7, -9];
// var newArray = [];

// var boole = arr.some(function(elements){
//     // console.log(elements > 2);
    
//     return elements > 20;
// })

// console.log(boole);
// var newArray = arr.filter(function(element){

//     if(element  > 0){
//         return (element);
//     }
// })

// console.log(newArray);

// var newArray = arr.map(function(element){
//     if(element  > 0){
//         return element + 2;
//     }
//     else{
//         return element -2 ;
//     }
// })

// console.log(newArray);

// var newArray = [];

// var arrValue = arr.forEach(function(indexValue){

//     if(indexValue > 0){
//         newArray.push(indexValue + 4);
//         console.log(indexValue + 4);
//     }
// });

// console.log(newArray);
// console.log(arrValue);


// var add = function(num1, num2){

//     return num1 + num2;

// }

// console.log(add);

// var num1 = 4;
// var num2 = 5;

// console.log(add(num1, num2));


//callback functions like the map function need the acutual function not the result of the function

var arr = [1, 2, 4, 5, 3];

// var newArray = arr.map(function(element){
//     return element;
// })

// console.log(newArray)

// var myFunc = function(element){
//     return element;
// }

// var newArray = arr.map(myFunc);
// var myFunc = function myFunc(element){
//     return element;
// }

// var newArray = arr.map(myFunc);

// console.log(newArray);













