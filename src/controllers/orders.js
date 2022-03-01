const { orderModel } = require("../models")
const { orderHelper } = require("../helpers")

const create = (req, res) => {

  try {

    const orderData = orderHelper.create(req.body);


    if (orderData.invoice && orderData.clientId && orderData.userId) {

      orderModel.create(orderData)
        .then(data => {
          res.send("Encomenda Registada")
        })
        .catch(err => {
          res.status(500).send({
            error:
              err.message || "Error ao registar a encomenda, tente novamente"
          });
        });

    } else {
      res.status(400).send({
        error: "Preencher campos obrigatorios"
      });
      return;
    }

  } catch (err) {
    res.status(500).send({ error: "Error no servidor" })
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