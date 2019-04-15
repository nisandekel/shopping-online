const express = require('express');
const router = express.Router();
const dbService = require('./../dbService/dbService');
const basicAuth = require('express-basic-auth')

let db = null;
let users = null;

router.use(async (req, res, next) => {
  db = new dbService();
  await db.initDB("ShoppingCart");
  next();
})

router.post('/registretion', async function (req, res, next) {
  const result = await db.insertOne(req.body, "users");
  res.send(result);
});

router.use('/login', async (req, res, next) => {
  users = await db.getAll("users");
  next();
});

router.post('/login', basicAuth({ authorizer}), function (req, res, next) {
  res.send({ autorized: "autorized" });
});

function authorizer(username, password) {
  return users.some(user => user.userName === username && user.password === password);
}


module.exports = router;
