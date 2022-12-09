const express = require("express");
const router = express.Router();

const usersRouter = require("./users.router");
const categoryRouter = require("./category.routes");
const productsRouter = require("./product.routes");

const { cate_get } = require("../controllers/category.controller");

router.use("/users", usersRouter);

/* GET home page. */
router.get("/", cate_get);
router.use("/category", categoryRouter);
router.use("/products", productsRouter);

module.exports = router;
