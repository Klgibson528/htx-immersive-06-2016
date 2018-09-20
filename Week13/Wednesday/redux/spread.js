
var state = [
    {
        s: 1,
        q: 2,
        r: 3
    },
    {
        s: 4,
        q: 5,
        r: 6
    },
    {
        s: 11,
        q: 21,
        r: 31
    }
];

let stateUpdate = {
    s: 111,
    q: 211,
    r: 311
}

let newState = [...state, stateUpdate ];

console.log(newState);

// var arr1 = [20, 30, 40 , 50 ];

// var arr2 = [...arr, 5, 6, 7, ...arr1];

// console.log(arr2);

