const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const session = require('express-session');
const PORT = process.env.PORT || 8080;
const env = require('dotenv').config();
const db = require('./models');
const routes = require("./controllers/router");
const exphbs = require("express-handlebars");

//setup express session
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.


app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use('/', routes);
app.use(routes);
    // Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.



//Setup passport strategy the db. portion will have to be changed. 
// passport.use(new LocalStrategy(
//     function(username, password, cb) {
//       db.users.findByUsername(username, function(err, user) {
//         if (err) { return cb(err); }
//         if (!user) { return cb(null, false); }
//         if (user.password != password) { return cb(null, false); }
//         return cb(null, user);
//       });
//     }));






db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});