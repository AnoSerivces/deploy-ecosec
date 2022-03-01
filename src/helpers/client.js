const validatorHelper = require("./validator")

const create = function (client) {
  try {
    return userData = {
      "reference": client.reference ,
      "firstname": validatorHelper.isString(client.firstname) ? client.firstname.trim().toLowerCase() : undefined,
      "lastname": validatorHelper.isString(client.lastname) ? client.lastname.trim().toLowerCase() : undefined,
      "phoneNumber": client.phoneNumber > 8? client.phoneNumber.trim() : undefined,
      "clientType": validatorHelper.isClient(client.clientType)  ? client.clientType : undefined,
    };
  } catch (error) {
    throw error.message || error;
  }
}

const update = function (client, oldClient) {
  try {
    return oldUser = {
      "firstname": validatorHelper.isString(client.firstname) ? client.firstname.trim().toLowerCase() : oldClient.firstname,
      "lastname":  validatorHelper.isString(client.lastname) ? client.lastname.trim().toLowerCase() : oldClient.lastname,
      "phoneNumber": client.phoneNumber > 8? client.phoneNumber.trim() : oldClient.phoneNumber,
      "clientType": validatorHelper.isClient(client.clientType) ? client.clientType : oldClient.clientType,
    };
  } catch (error) {
    throw error
  }
}

module.exports = {
  create,
  update,
  
}