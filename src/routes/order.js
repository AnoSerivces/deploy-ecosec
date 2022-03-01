const express = require("express");
const { authMiddleware, validateMiddleware } = require("../middlewares")

const { clientController } = require("../controllers");

const router = express();

router.post("/create", [authMiddleware.isToken, validateMiddleware.asData, validateMiddleware.generateReference, authMiddleware.isOperatorOrSupervisor
], clientController.create);
router.put("/update/:clientId", [authMiddleware.isToken, validateMiddleware.asData, authMiddleware.isOperatorOrSupervisor
], clientController.update);
router.delete("/delete/:clientId", [authMiddleware.isToken, authMiddleware.isSuperv
], clientController.deleted);
router.get("/findall", [authMiddleware.isToken, authMiddleware.isOperatorOrSupervisor
], clientController.findAll);
router.get("/findone/:firstname", [authMiddleware.isToken, authMiddleware.isOperatorOrSupervisor
], clientController.findOne);
router.post("/sms", [authMiddleware.isToken, authMiddleware.isOperatorOrSupervisor
], clientController.send);


module.exports = router;