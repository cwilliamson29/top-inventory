var express = require("express");
const { cate_get } = require("../controllers/category.controller");
var router = express.Router();
const usersRouter = require("./users.router");

router.get("/users", usersRouter);

/* GET home page. */
router.get("/", cate_get);

module.exports = router;
