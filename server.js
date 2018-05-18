const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const session = require('express-session');
const PORT = process.env.PORT || 8080;
const env = require('dotenv').config();

const app = express();
// const db = require('./models');
const db =path.join(__dirname, "models");

//setup express session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));


//Setup passport strategy the db. portion will have to be changed. 
passport.use(new LocalStrategy(
    function(username, password, cb) {
      db.users.findByUsername(username, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
    }));


    // Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });
  
  passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });
  

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/router");

app.use(routes);

// Start our server so that it can begin listening to client requests.


app.listen(PORT, () => {
      console.log("Server listening on: http://localhost:" + PORT);
    });

    console.log("this is DB " + db);


// db.sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => {
//     console.log("Server listening on: http://localhost:" + PORT);
//   });
// });