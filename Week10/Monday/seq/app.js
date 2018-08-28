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

// let myInstance;
// db.user.findById(2)
// .then(function(record){
//     console.log(`${record.firstName} ${record.lastName}
//         email: ${record.email}`);
//     myInstance = record;

//     myInstance.firstName = "Veronica";
//     myInstance.save().then(() => {console.log('success')});
// });


//adding associations
// db.student.create({
//     firstName: 'DigitalCrafts', lastName: 'Houston', email: 'me@me.com'});

// db.user.create({
//     firstName: 'Veronica', lastName: 'Lino', email: 'me@me.com', studentId: 2});

db.user.findAll({include: [{model: db.student}]})
.then(function(results){

    console.log(results[5].student.firstName);
    // results.forEach(function(record){
    //     console.log(record);
    //     console.log(record.firstName, record.student.firstName);
    // })
})


//query with join
//   db.user.findAll({include: [{model: db.student}]})
//     .then((results) => {
//       console.log(results[5].student.firstName);
//     });



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


// db.sequelize.query('SELECT * FROM users', { type: sequelize.QueryTypes.SELECT}).then(results => {
    
//     results.forEach(function(record){
//         console.log(record.firstName);
//     })
// });