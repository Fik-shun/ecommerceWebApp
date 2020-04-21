const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
// router.put('/movie/:id', MovieCtrl.updateMovie)
// router.delete('/movie/:id', MovieCtrl.deleteMovie)
// router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/users', UserCtrl.getUsers)
router.post('/users/signin', UserCtrl.validateUser)



const { GenerateJWT, DecodeJWT, ValidateJWT } = require("../controllers/dec-enc.js");

router.post("/GenerateJWT", (req, res) => {
  let { header, claims, key } = req.body;
  // In case, due to security reasons, if the client doesn't send a key,
  // use our default key.
  key = key || "thisisdefaultkey";
  return res.status(200).json(GenerateJWT(header, claims, key));
});

router.post("/DecodeJWT", (req, res) => {
  res.json(DecodeJWT(req.body.sJWS));

});

router.post("/ValidateJWT", (req, res) => {
  let { header, token, key } = req.body;
  // In case, due to security reasons, if the client doesn't send a key,
  // use our default key.
  key = key || "thisisdefaultkey";
  res.json(ValidateJWT(header, token, key));
});




module.exports = router