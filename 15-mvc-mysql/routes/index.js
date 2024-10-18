const express = require("express");
const router = express.Router();
const controller = require("../controller/Cvisitor");

// 기본주소 : localhost:PORT/

// GET /
router.get("/", controller.main);

// GET /visitors
router.get("/visitors", controller.get_visitors);

// POST /visitor
router.post("/visitor", controller.post_visitor);
module.exports = router;
