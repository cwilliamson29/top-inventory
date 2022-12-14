const Category = require("../models/category.model");
const Products = require("../models/items.model");

exports.prod_create_get = (req, res) => {
	Category.find()
		.sort([["name", "ascending"]])
		.exec((err, list_categories) => {
			if (err) {
				return next(err);
			}
			res.render("partials/prod_form", {
				title: "New Product",
				categories: list_categories,
			});
		});
};

function asdf() {
	let asdf = "asdf";
	return asdf;
}
