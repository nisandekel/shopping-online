const express = require('express');
const router = express.Router();
const dbService = require('./../dbService/dbService');
const basicAuth = require('express-basic-auth');
const EmailValidator = require("email-validator");
const md5 = require('md5');


let db = null;
let users = null;

router.use(async (req, res, next) => {
  db = new dbService();
  await db.initDB("ShoppingCart");
  next();
})

router.post('/registretion', async function (req, res, next) {
  const user = req.body;
  if (!detailsValidation(user)) {
    res.send({ invalidDetails: "invalidDetails" })
  }
  else if (await isUserAlreadyExist(user)) {
    res.send({ alreadyExist: "userAlreadyExist" })
  }
  else {
    user.password = md5(user.password);
    const result = await db.insertOne(user, "users");
    res.send(result);
  }
});

router.use('/login', async (req, res, next) => {
  users = await db.getAll("users");
  next();
});

router.post('/login', basicAuth({ authorizer }), function (req, res, next) {
  res.send({ autorized: "autorized" });
});

function authorizer(username, password) {
  return users.some(user => user.userName === username && user.password === md5(password));
}

function detailsValidation(user) {
  if (!userNameValidator(user.userName)) {
    return false;
  }
  if (!emailValidator(user.email)) {
    return false;
  }
  if (!passwordValidator(user.password)) {
    return false;
  }
  return true;
}

async function isUserAlreadyExist(user) {
  const allUsers = await db.getAll("users");
  for (let usr of allUsers) {
    if (usr.userName === user.userName) {
      return true;
    }
  }
  return false;
}

function userNameValidator(userName) {
  if (!isStringLongerThanLength(userName, 5) || !isStirngIncludeLetters(userName)) {
    return false;
  }
  return true;
}

function emailValidator(email) {
  if (!EmailValidator.validate(email) || email === "") {
    return false
  }
  return true;
}

function passwordValidator(password) {
  if (!isStringLongerThanLength(password, 8) || !isStirngIncludeLetters(password)) {
    return false;
  }
  return true;
}

const isStringLongerThanLength = (string, length) => {
  if (string.length < length) {
    return false
  }
  return true;
}

const isStirngIncludeLetters = (string) => {

  for (let char of string) {
    for (let i = 65; i <= 90; i++) {
      if (char.charCodeAt() === i) {
        return true;
      }
    }

    for (let i = 97; i <= 122; i++) {
      if (char.charCodeAt() === i) {
        return true;
      }
    }
  }
  return false;
}

module.exports = router;
