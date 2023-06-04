const express = require('express');
const app = express();
const { User } = require('./db');
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', async (req, res, next) => {
  try {
    res.send('<h1>Welcome to Loginopolis!</h1><p>Log in via POST /login or register via POST /register</p>');
  } catch (error) {
    console.error(error);
    next(error)
  }
});

// POST /register
// TODO - takes req.body of {username, password} and creates a new user with the hashed password

app.post('/', async (req, res, next) =>{
  
  const {username, password} = req.body;
  try {
    const SALT_COUNT = 10;
    const hashPassword = async (password, SALT_COUNT) => {
      const hash = await bcrypt.hash(password, SALT_COUNT);
      res.send(hash);
    };
    const createUser = User.create();


  } catch (err){
    console.log(err);
  }
})

// POST /login
// TODO - takes req.body of {username, password}, finds user by username, and compares the password with the hashed version from the DB

// we export the app, not listening in here, so that we can run tests
module.exports = app;
