const express = require("express");
const { authMiddleware, validateMiddleware } = require("../middlewares")

const { userController } = require("../controllers");
const { user } = require("../models");

const router = express();

router.post("/create", [authMiddleware.isToken, validateMiddleware.asData, authMiddleware.isSuperv
], userController.create);
router.put("/update", [authMiddleware.isToken, validateMiddleware.asData
], userController.update);
router.delete("/delete/:userId", [authMiddleware.isToken, authMiddleware.isSuperv
], userController.deleted);


module.exports = router;