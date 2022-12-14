const express = require("express");
const router = express.Router();
const { get_category_sidebar } = require("../controllers/category.controller");
const { prod_create_get } = require("../controllers/products.controller");

router.get("/", (req, res) => {
	// redirect to homepage
	res.redirect("/");
});

router.get("/:catId/new", get_category_sidebar, prod_create_get);

router.get("/:id");

module.exports = router;
