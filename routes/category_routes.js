const express = require("express");
const router = express.Router();
const {
	cate_create_get,
	cate_create_post,
	cate_get,
    cate_delete,
} = require("../controllers/category.controller");

router.get("/", cate_get);

router.get("/new", cate_create_get);
router.post("/new", cate_create_post);

router.post("/:id/delete", cate_delete)

module.exports = router;
