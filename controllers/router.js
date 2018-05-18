const express = require("express");
var Models = require("../models");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get('/register', (req, res)=> {
    res.render("./partials/registrationForm")
    
});

router.post('/register', (req, res)=>{
    
    let newUser = {
        user_name: req.body.user_name,
        pw_hash: req.body.password
    }
    
    Models.user.create(newUser).then((user)=>{
        res.json(user);
    });

});



router.get("/play", (req, res) => {
    res.render("play");
});



module.exports = router;