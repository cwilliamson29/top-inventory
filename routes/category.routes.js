const express = require("express");
const router = express.Router();
const {
	cate_create_get,
	cate_create_post,
	cate_get,
	get_category_sidebar,
	cate_delete,
	cate_item_get,
} = require("../controllers/category.controller");

//GET HOME
router.get("/", cate_get);

//GET AND POST FOR CATEGORY VIEW
router.get("/new", cate_create_get);
router.post("/new", cate_create_post);

//GET SINGLE CATEGORY VIEW AND ITEMS
router.get("/:id", get_category_sidebar, cate_item_get);

//DELETE SINGLE CATEGORY
router.post("/:id/delete", cate_delete);

module.exports = router;
