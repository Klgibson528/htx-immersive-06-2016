let express = require('express');
let app = express();
const LocalStrategy = require('passport-local').Strategy
let passport = require('passport');
var cookieParser = require('cookie-Parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
let db = require('./models');


var SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

var myStore = new SequelizeStore({
    db: db.sequelize
});

app.use(session({
    secret: 'keyboard cat',
    store: myStore,
    resave: false,
    proxy: true
}))

//creates session table
myStore.sync();

app.use(passport.initialize());
app.use(passport.session());

app.get('/register', function(req, res){

    //registration form
    res.send(
        ` 
        <h1>Registration</h1>

        <form action="/register" method="POST">
          username:<input type="text" name="username" />
          password: <input type="text" name="password" />
          <input type="submit" />
        </form>
        `
    ); //end of res.send

});

app.post('/register', function(req, res){

    //take form info and store in database

    let password = bcrypt.hashSync(req.body.password,8);
    console.log(password);

    db.users.create({username: req.body.username, password: password})
    .then(() => {
        // success;
        res.redirect('/login');
    })
    .catch(error => {
        // error;
    });


})

app.get('/login', function(req, res){
    //form for user

    res.send(
        ` 
            <h1>Login</h1>
            <form action="/login" method="post">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <input type="submit" value="Log In"/>
                </div>
            </form>
        `
    ); //end of res.send


});

app.post('/login', passport.authenticate('local', { successRedirect: '/dashboard',
failureRedirect: '/login'})
    //collect form information username, password
    //call passport.authenticate

    

);

app.get('/dashboard', function(req, res){
    //route requires authentic ation

    if(!req.isAuthenticated()) {
        res.redirect('/login');
      return
    }
  
    res.send("you've arrived here, so you must be authenticated");
});

app.get('/logout', function(req, res, next){
    req.session.destroy((err) => {
        if(err) return next(err)

        req.logout()

        res.sendStatus(200)
    })
  })


passport.use(new LocalStrategy((username, password, done) => {
    console.log('Im in passport');
    
    db.users.findAll({where: {username: username }})
    .then(function(results){
        if(results != null){
            const data = results[0];
            bcrypt.compare(password, results[0].password, function(err, res){
               if(res){
                done(null, { id: data.id, username: data.username}) 
               }
               else{
                done(null, false)
               } 
            })
        }
        else{

        }
    })
    
}))


passport.serializeUser((user, done) => {
    done(null, user.id)
    
});

passport.deserializeUser((id, done) => {
    db.users.findById(parseInt(id, 10)).then( (data) => {
         
        done(null, data)
    }//end of callback
    )//end of promise
    
})


app.listen(3000);
