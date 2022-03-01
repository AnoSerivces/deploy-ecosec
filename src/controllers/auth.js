
const { userModel } = require("../models")
const { secretConfig } = require("../config")
const jwt = require("jsonwebtoken");

signin = (req, res) => {
  userModel.findOne({
    where: {
      username: req.body.username, password: req.body.password,
    } 
  })
    .then(user => {
      if (!user) {
        res.status(400).send({ message: "Username ou Password invalido." });
        return
      }

      var token = jwt.sign({ id: user.id }, secretConfig.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

const passwordRecovery = function (req, res) {

}

module.exports = {
  signin,
  passwordRecovery
};