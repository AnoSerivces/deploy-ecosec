const { clientModel } = require("../models")
const { clientHelper } = require("../helpers")
const {sms} = require("../services/sms")

const create = (req, res) => {

   try {

    const clientData = clientHelper.create(req.body); 
    if (clientData.firstname && clientData.lastname && clientData.phoneNumber && clientData.clientType) {
      clientModel.create(clientData)
        .then(data => {
          res.json({ message: "O cliente foi registado com sucesso." })
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Erro no servidor."
          });
        });

    } else {
      res.status(400).send({
        message: "Preencher todos os dados obrigatorios"
      });
      return;
    }

  } catch (err) {
    res.status(500).send({ error: "Error no servidor X." });
    return
  }
};

const update = (req, res) => {

  const clientData = clientHelper.update(req.body);
  {
    clientModel.update(clientData, { where: { id: req.params.clientId } }
    )
      .then(data => {
        res.send("O cliente foi actualizado com sucesso!");
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Falha ao actualizar o cliente tente novamente."
        });
      });

  }
  return;
};

const deleted = (req, res) => {

  const deleteclientId = req.params.clientId
  {
    clientModel.destroy({ where: { id: deleteclientId } }
    )
      .then(() => {
        res.send("O cliente foi apagado com sucesso!")
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro ao tentar apagar o cliente, tente novamente."
        });
      });

  }
  return;
};

const send = (req, res) => {

  const phoneNumber = req.body.phoneNumber;
  const text = req.body.text
  if (phoneNumber && text) { 
    try {
      sms(text, phoneNumber);
      return res.status(200).send({ message: "Mensagem enviada"})

    }catch (err) {
      return res.status(500).send({ message: "Verifique o número do celular"})
    }
  } else {
    return res.status(400).send({ message: 'Dados invalidos'})
  }
};

const findOne  = (req, res) => {

  const firstname = req.params.firstname

  {
    clientModel.findOne({ where: { firstname: firstname } }
    )
      .then(data => {
        if(!data){
          return res.status(404).json({ message: "Utilizador não encontrado!" });
        } 
        res.send(data)
      
      })
      .catch(err => {
        res.status(500).send({
          message: "Error no servidor."
        });
      });

  }
  return;
};

const findAll = (req, res) => {

  {
    clientModel.findAll() 
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: "Error para listar os clientes."
        });
      });

  }
  return;
};

module.exports = {
  create,
  update,
  deleted,
  findAll,
  findOne,
  send
}