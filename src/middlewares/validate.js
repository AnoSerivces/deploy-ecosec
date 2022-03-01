const { clientModel } = require("../models");

const asData = (req, res, next) => {
  try {
    if (Object.keys(req.body).length > 0) {
      next();
    } else {
      return res.status(400).json({ error: "Nenhum dado foi passado!" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }

}

const generateReference = (req, res, next) => {
  try {
    if (req.body.firstname && req.body.lastname) {
      const firstletter = req.body.firstname.charAt(0);
      const secondletter = req.body.lastname.charAt(0);
      const year = new Date().getFullYear();
      let number = 0;
      clientModel.findOne({
        order: [['id', 'DESC']],
      })
        .then(data => {
          number = ++data.id;
          req.body.reference = firstletter.concat(secondletter, year, number).toLowerCase()
          next()
        })
        .catch(err => {
          return res.status(500).json({ error: "Error para gerar a reference do cliente, tente novamente!" })
        })

    } else {
      return res.status(400).json({ error: "Por favor, preencher todos os dados obrigatorios!" });;
    }
  
  } catch (error) {
    return res.status(500).json({ error: "Error para gerar a reference do cliente, tente novamente" })
  }

  
}
module.exports = {
  asData,
  generateReference
}