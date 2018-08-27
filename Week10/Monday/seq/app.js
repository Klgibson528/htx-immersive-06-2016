let db = require('./models');
let sequelize = require('sequelize');


// db.user.create({firstName: 'Sam', lastName: 'Segal', email: 'me1@me.com'})
// .then(function(user){
//     console.log(user);
// })

// db.user.create({firstName:'Eric', lastName: 'Fisher', email: 'me@me.com'})
// .then(function(user){
//     console.log(user);
// });

// db.user.create({firstName:'Matt', lastName: 'Fisher', email: 'me@me.com'})
// .then(function(user){
//     // console.log(user);
// });

// db.user.create({firstName:'Tracy', lastName: 'Fisher', email: 'me@me.com'})
// .then(function(user){
//     // console.log(user);
// });

// db.user.create({firstName:'Travis', lastName: 'Ramos', email: 'ramos@me.com'})
// .then(function(user){
//     // console.log(user);
// });

// db.user.create({firstName:'Jeff', lastName: 'Fisher', email: 'Jeffr@me.com'})
// .then(function(user){
//     // console.log(user);
// });

// db.user.findAll()
// .then(function(results){

//     results.forEach(function(record){
//         console.log(`${record.firstName} ${record.lastName}
//         email: ${record.email}`);
//     })
    
// })

let myInstance;
db.user.findById(2)
.then(function(record){
    console.log(`${record.firstName} ${record.lastName}
        email: ${record.email}`);
    myInstance = record;

    myInstance.firstName = "Veronica";
    myInstance.save().then(() => {console.log('success')});
});



// db.user.findAll({where: {lastName: 'Fisher'}})
// .then(function(results){
//         results.forEach(function(record){
//         console.log(`${record.firstName} ${record.lastName}
//         email: ${record.email}`);
//     })
// })

// db.user.destroy({where: {id: 1}})
// .then(function(rowDeleted){ // rowDeleted will return number of rows deleted
//     if(rowDeleted === 1){
//        console.log('Deleted successfully');
//      }}
// )


// sequelize.query('SELECT * FROM users', { model: user }).then(results => {
    
//     results.forEach(function(record){
//         console.log(record.firstName);
//     })
//   })