let express = require('express');
let app = express();
let axios = require('axios');



// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));
// let url = 'https://jsonplaceholder.typicode.com/todos';

// axios.get(url)
// .then(function(response){
//     console.log(response);
// })
// .catch(function(){

// })


// fetch('https://medium.com/quick-code/understanding-self-in-python-a3704319e5f0')
// .then(function(data){
//     console.log(data);
// })

// let api_url1 = 'https://jsonplaceholder.typicode.com/todos';
// let api_url2 = 'https://medium.com/quick-code/understanding-self-in-python-a3704319e5f0';
// var p1 = axios.get(api_url1);
// var p2 = axios.get(api_url2);

// Promise.all([p1, p2])
// .then(function (responses) {
//     console.log(responses[0].data);
//     console.log(responses[1].data);
//   });

// setTimeout(function () {
//     console.log('hello');
//   }, 3000);


// var p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       reject('Hello');
//     }, 3000);
//     // setTimeout(function () {
//     //     reject('Error');
//     //   }, 4000);

//   });

// p.then(function(value){
//     console.log('DONE: ', value);
// })

// p.catch(function(error){
//     console.log(error)
// })


app.listen(3000);

