var db = require('./models');
var me;
// create a user
db.user.create({nickname: "PDiddy"})
  .then(function (user) {
    console.log(user);
    me = user;
  });


db.user.destroy({
  where: {
      id: 5 //this will be your id that you want to delete
  }
 })