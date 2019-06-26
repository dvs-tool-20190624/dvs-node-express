// IMPORTS

const axios = require("axios");
const bcrypt = require("bcryptjs");

const authenticate = require("../Auth/restricted");
const Users = require("./usersModel");

//
module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login, authenticate);
  server.get("/"); //main page?
};

function register(req, res) {
  // implement user registration
  const hash = bcrypt.hashSync(req.body.password, 14);
  req.body.password = hash;

  Users.add(req.body)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log("register", err);
      res.status(500).json({ message: "Error registering user" });
    });
}

function login(req, res) {
  // implement user login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,

          token
        });
      } else {
        res
          .status(401)
          .json({ message: "Wrong username or password. Try again." });
      }
    })
    .catch(err => {
      console.log("Login error", err);
      res.status(500).json({ message: "Login error" });
    });
}
