const validatorHelper = require("./validator")

const create = function (user) {
  try {
    return userData = {
      "firstname": validatorHelper.isString(user.firstname) ? user.firstname.trim().toLowerCase() : undefined,
      "lastname": validatorHelper.isString(user.lastname) ? user.lastname.trim().toLowerCase() : undefined,
      "role": validatorHelper.isRole(user.role) ? user.role.trim().toLowerCase() : undefined,
      "password": user.password.length > 7 ? user.password.trim() : undefined,
    };
  } catch (error) {
        throw error
  }
}

const update = function (user, oldUser ) {
  try {
    return oldUser = {
      "firstname": validatorHelper.isString(user.firstname) ? user.firstname.trim().toLowerCase() : oldUser.firstname,
      "lastname": validatorHelper.isString(user.lastname) ? user.lastname.trim().toLowerCase() : oldUser.lastname,
    };
  } catch (error) {
    throw error
  }
}

module.exports ={
  create,
  update
}