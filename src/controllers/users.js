const { user } = require("../models")
const { userHelper } = require("../helpers")

const create = (req, res) => {

  try {

    const userData = userHelper.create(req.body);


    if (userData.firstname && userData.lastname && userData.role && userData.password) {

      user.create(userData)
        .then(data => {
          res.send("The user was created successfully!")
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the user."
          });
        });

    } else {
      res.status(400).send({
        message: "It's missing required data!"
      });
      return;
    }

  } catch (err) {
    res.status(500).send({ error: err.message })
    return
  }
};

const update = (req, res) => {

  const userData = userHelper.update(req.body);
  {
    user.update(userData, { where: { id: req.userId } }
    )
      .then(data => {
        res.send("The user perfil was successfully updated!")
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while updating the user."
        });
      });

  }
  return;
};

const deleted = (req, res) => {

  const deleteUserId = req.params.userId
  {
    user.destroy({ where: { id: req.deleteUserId } }
    )
      .then(() => {
        res.send("The user was successfully deleted!")
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while deleting the user."
        });
      });

  }
  return;
};

module.exports = {
  create,
  update,
  deleted,
}