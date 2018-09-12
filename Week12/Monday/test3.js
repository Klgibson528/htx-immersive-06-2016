let bob = function(num, str, x){

    console.log('bob', num, str, this, x);
    return true;
}

let bill = {
    name: 'Bill Murray',
    movie: 'Lost in Translation',
    myMethod: function(fn){
        let n = arguments[1];
        let s = arguments[2];
        // fn();
       
        fn.apply(bill, [n, s]);
        //fn(2, 'hello');
    }
}

// let fred = bob.bind(bill, 5, 'hasta la vista');
// fred('x');
bill.myMethod(bob, 4, 'ciao');
// bob.call(bill, 2, 'goodbye');
// bob.apply(bill, [ 2, 'goodbye']);

// bill.myMethod(bob);

// bob(1, 'hello', 1);


