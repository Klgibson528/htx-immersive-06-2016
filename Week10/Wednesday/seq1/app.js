var express = require('express');
var app = express();
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
})
app.use(session({
    secret: 'keyboard cat',
    store: myStore,
    resave: false,
    proxy: true
}))

myStore.sync();


//initialize passport
//Doc: In a Connect or Express-based application, 
//passport.initialize() middleware is required to initialize Passport. 
//If your application uses persistent login sessions, passport.session() 
//middleware must also be used.
app.use(passport.initialize());
app.use(passport.session());

//app.use(require('./routes/index'));

app.get('/login', function(req, res) {

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
    
});//end of app.get

app.post('/login',
  passport.authenticate('local', { successRedirect: '/dashboard',
                                    failureRedirect: '/login'})
);


app.get('/register', function(req, res) {
 
    res.send(
        ` 
        <h1>Registration</h1>

        <form action="/register" method="POST">
          <input type="text" name="username" />
          <input type="text" name="password" />
          <input type="submit" />
        </form>
        `
    ); //end of res.send
    
});//end of app.get

app.post('/register',function(req,res){

    // let username = req.body.username;
    console.log('username');
   
    // res.send(req.body.username);
    
    // hashing the password
    let password = bcrypt.hashSync(req.body.password,8);

    db.users.create({username: req.body.username, password: password})
    .then(() => {
        // success;
        res.redirect('/login');
    })
    .catch(error => {
        // error;
    });
  
    //save to database
    
    
  });

  app.get('/logout', function(req, res, next){
    req.session.destroy((err) => {
        if(err) return next(err)

        req.logout()

        res.sendStatus(200)
    })
  })

  app.get('/dashboard',function(req,res){

    if(!req.isAuthenticated()) {
        res.redirect('/login');
      return
    }
  
    res.send("you've arrived here, so you must be authenticated")
  })


  passport.use(new LocalStrategy((username, password, done) => {
    console.log('Im in passp;ort');
    db.users.findAll({where: {username: username}}).then ((results) => {
        
        if(results != null) {
            const data = results[0];
            bcrypt.compare(password, data.password, function(err, res) {
                if(res) {
                    console.log("Hello world")
                    console.log(data)
                    done(null, { id: data.id, username: data.username})
                } else {
                    console.log("Returned nothing")
                    done(null, false)
                }
            })
        } else {
            console.log("just out there")
            done(null, false)
        }

        //done(null, false)

        // console.log(username)
    } //end of callback
    
    
)//end of then promise  

    
}))

passport.serializeUser((user, done) => {
    done(null, user.id)
    
})

passport.deserializeUser((id, done) => {
    db.users.findById(parseInt(id, 10)).then( (data) => {
        
       
        done(null, data)
    }//end of callback
    )//end of promise
    
})

app.listen(3000);