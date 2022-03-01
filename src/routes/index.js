
//Dependencies
const express = require("express");
const routes = express();

routes.get('', (req, res) => {
 res.status(200).json({message: "Welcome to Ecosec"})
}
)  
routes.use("/auth", require("./auth"));
routes.use("/user", require("./user"));
routes.use("/client", require("./client"));


//Export dependencies
module.exports = routes;