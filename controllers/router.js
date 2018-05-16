const express = require("express");


const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get('/register', (req, res)=> {
    res.render("./partials/registrationForm")
});

router.post
router.get("/play", (req, res) => {
    res.render("play");
});



module.exports = router;