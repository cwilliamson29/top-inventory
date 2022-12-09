const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	// redirect to homepage
	res.redirect("/");
});

router.get('/:id')

module.exports = router;
