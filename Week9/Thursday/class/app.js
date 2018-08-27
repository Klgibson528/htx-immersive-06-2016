
let db = require('./models/');

db.user.findAll()
  .then((results) => {
    results.forEach(function(index){

    console.log(index.id, index.firstName);
})
  });

db.user.findAll({where: {lastName: 'Fisher'}})
  .then((results) => {
    results.forEach(function(index){

            console.log(index.id, index.firstName);
        })
  });


db.user.create({firstName:'Eric', lastName: 'Fisher', email: 'me@me.com'})
.then(function(user){
    console.log(user);
});

// db.user.create({firstName:'Sam', lastName: 'Fisher', email: 'me1@me.com'})
// .then(function(user){
//     console.log(user);
// });

// db.user.create({firstName:'Keith', lastName: 'Fisher', email: 'me2@me.com'})
// .then(function(user){
//     console.log(user);
// });

// db.user.create({firstName:'Travis', lastName: 'Fisher', email: 'me1@me.com'})
// .then(function(user){
//     console.log(user);
// });

// db.user.create({firstName:'Skylar', lastName: 'Fisher', email: 'me1@me.com'})
// .then(function(user){
//     console.log(user);
// });

// db.user.create({firstName:'Hussein', lastName: 'Fisher', email: 'me1@me.com'})
// .then(function(user){
//     console.log(user);
// });

// db.user.create({firstName:'Melissa', lastName: 'Fisher', email: 'me1@me.com'})
// .then(function(user){
//     console.log(user);
// });




