var db = require('./models');
var me;
// create a user
db.user.create({nickname: "PDiddy"})
  .then(function (user) {
    console.log(user);
    me = user;
  });

