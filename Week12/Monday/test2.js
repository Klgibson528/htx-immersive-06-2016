
let myArray = [1,2, 3, 4];

console.log(myArray);

function changingStuff (someArray){

    someArray[1] = 2345;
}

changingStuff(myArray);
console.log(myArray);