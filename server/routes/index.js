// import * as path from "express";
const {User} = require('../models');
const express = require('express');
const router = express.Router();
// const __dirname = path.resolve()


router.post('/user', async function(req, res) {
  try {
    const user = await User.create({name:'Зураб',email:'zurabdemirov@mail.ru',password: 4037})
    res.json(user);
  }catch (e){
    res.send(`massage ${e} error`);
  }
});

module.exports = router;
