// function doSomeMath() {
// 	var a = 5;
// 	var b = 4;
// 	var sum = a + b;

// 	return sum;
// }

// var theResult = doSomeMath();

// console.log("The result: ", theResult);

// function doSomeMath(c) {
// 	var a = 5;
// 	var b = 4;
// 	var sum = a + b;

// 	function inner(c){
// 		return a + b + c;
// 	}
// 	return inner();
// }



// var theResult = doSomeMath(8);

// console.log("The result: ", theResult());


function giveMeEms(pixels){
    var baseValue = 16;

    function doTheMath(){
        return pixels/baseValue;
    }

    return doTheMath();
}

var smallSize = giveMeEms(12);
// var mediumSize = giveMeEms(18);
// var largeSize = giveMeEms(24);
// var xLargeSize = giveMeEms(32);

console.log("small size: ", smallSize);
// console.log("medium size: ", mediumSize);
// console.log("large size: ", largeSize);
// console.log("xLarge size: ", xLargeSize);

