
function add (x, y, callback){
    var result = x + y;
    callback(result);
}

function multiply (x, y, callback){
    var result = x * y;

    callback(result);
}

function print(result){

    multiply(result, 3, function(final_result){
        console.log(final_result);
    } )
    
}

add(1, 2, function (result) {
    multiply(result, 3, function (final_result) {
    console.log(final_result);
    });
});

// add(1, 2, function (result) {
//     multiply(result, 3, function (final_result) {
//     console.log(final_result);
//     });
// });


// function add (x, y, callback){

//     setTimeout(function(){

//         var result = x + y;
//         callback(result);
//     }, 3000)
// }


// function myPrint(print){
//     console.log(print);
// }

// add(4, 5, myPrint);


// function add (x, y, callback) {

//     setTimeout(function () {
//     var result = x + y;
//     callback(result);


//     });

// }
// add(1, 2, function (result) { console.log(result); });


// function add (x, y, callback){
//     var result = x + y;

//     console.log(result);

//     callback(result);

// }

// function myCallback(result){
//     console.log(result)
// }

// add(4, 5, function(r){
//     console.log(r)
// });
// myCallback("hello world");
// add(3, 4);







// function add(x,y, myCallback){
//     var result = x;
//     // console.log(x);
//     myCallback(result);
// }

// add(2, 3, function(element){
//     console.log(element);
// } )

// var students = ["Melissa", "Tracy", "Matt", "Eric", "Travis", "Sam", "Keith", "Jeff"];

// students.forEach((index) => {
//     console.log(index);
// })


// function add(){
//     setTimeout(function(){
//         console.log("hello world");
//     }, 3000);

// }

