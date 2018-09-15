
function vowels(str){

    let matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

console.log(vowels('hello world DOOOOO'));

// function vowels(str){

//     let count = 0;
//     let newStr;
//     let checker = ['a', 'e', 'i', 'o', 'u'];
//    checker.push('y');
//    console.log(checker);
//     for (let char of str.toLowerCase()){

//         if(checker.includes(char)){
//             newStr +=  char.toUpperCase();
//             count++;
//         }
//         else{
//             newStr += char;
//         }
//     }

//     return newStr;
// }

// console.log(vowels('hello world DOOOOO'))

//sentence capitalization
// function capitalize(str){
//     let words = [];

//     for(let word of str.split(' ') ){

//         words.push(word[0].toUpperCase() + word.slice(1));
    
//     }

//     return words.join(' ');

// }

// var result = capitalize('this is the first day of the rest of your life');

// console.log(result);
//console.log(capitalize('this is the first day of the rest of your life'))