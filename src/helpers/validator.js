
const { clientModel } = require("../models")
const { roles, clientConfig } = require('../config')

const isString = (text) => {
  let letter = new RegExp(/^[A-Za-z]{3,}(\sc[A-Za-z]{3,})*$/);
  if (text !== undefined) {
    let textTrimmed = text.trim()
    if (textTrimmed) {
      if (letter.test(textTrimmed)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else {
    return false
  }
}



const isClient = (clientParameters) => {
  if (clientParameters!== undefined) {
    if (clientParameters == clientConfig.Empresa) {
      return true
    }

    if (clientParameters == clientConfig.Individual) {
      return true
    }
  } else {
    return false
  }
}

const isRole = (role) => {
  if (role !== undefined) {
    if (role == roles.supervisor) {
      return true
    }

    if (role == roles.operador) {
      return true
    }
  } else {
    return false
  }
}

module.exports = {
  isString,
  isRole,
  isClient,

}