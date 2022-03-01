const jwt = require("jsonwebtoken");

const {userModel} = require("../models");
const { rolesConfig } = require("../config");


const isToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ error: "Utilizador sem token" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "utilizador não autorizado!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isSuperv = (req, res, next) => {
  userModel.findByPk(req.userId)
    .then((userData) => {
      if (userData == null) {
        res.status(404).json({
          error: "utilizador não encontrado" });
      } else if (userData.role == rolesConfig.supervisor) {
        next();
        return;
      } else {
        return res.status(400).json({ error: "Requer permissões do supervisor" });
      }
    }).catch((e) => {
      throw new Error(e.message);

    });
};

const isOperator = (req, res, next) => {
  try {
    const userData = userModel.findByPk(req.userId);
    if (userData == null) {
      res.status(404).json({ error: "Utilizador não econtrado" });
    } else if (userData.role == rolesConfig.operator) {
      next();
      return;
    } else {
      return res.status(400).json({ error: "Requer permissões do Operador" });
    }

  } catch (e) {
    throw new Error(e.message);
  }
};

const isOperatorOrSupervisor = (req, res, next) => {
  try {
    const userData = userModel.findByPk(req.userId);
    if (userData == null) {
      res.status(404).json({ error: "Utilizador não econtrado" });
    } else if (userData.role == rolesConfig.operator  || userData.role == rolesConfig.supervisor) {
      next();
      return;
    } else {
      return res.status(400).json({ error: "Requer permissões do Operador ou Supervisor" });
    }

  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  isToken,
  isOperator,
  isSuperv,
  isOperatorOrSupervisor
}