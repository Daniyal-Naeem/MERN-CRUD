const express = require("express");
const router = express.Router();

router.get("/", (req,res) =>{
    res.send("Login a user");
});

router.post("/", (req,res) =>{
    res.send("Logout a user");
});

module.exports = router;