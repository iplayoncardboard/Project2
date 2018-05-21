const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const PORT = process.env.PORT || 8080;
const env = require('dotenv').config();
const db = require('./models');
const routes = require("./controllers/router");
const exphbs = require("express-handlebars");
const Models = require("./models");

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
  store: new SequelizeStore({
    db: db.sequelize 
  }),
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next)=>{
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
})
app.use(routes);
    // Configure Passport authenticated session persistence.
//



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