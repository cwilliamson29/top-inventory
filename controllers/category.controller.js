const Category = require("../models/category.model");
const Products = require("../models/items.model");

exports.cate_get = (req, res) => {
	Category.find()
		.sort([["name", "ascending"]])
		.exec((err, list_categories) => {
			if (err) {
				return next(err);
			}
			res.render("index", {
				title: "body",
				title2: "Categories",
				categories: list_categories,
			});
		});
};
cate_get_get = (req, res, next) => {
	Category.find()
		.sort([["name", "ascending"]])
		.exec((err, list_categories,) => {
			if (err) {
				return next(err);
			}
			return next(list_categories)

		});
};

exports.cate_create_get = (req, res) => {
	Category.find()
		.sort([["name", "ascending"]])
		.exec((err, list_categories) => {
			if (err) {
				return next(err);
			}
			res.render("partials/cate_form", {
				title: "Categories",
				categories: list_categories,
			});
		});
};

exports.cate_item_get = (req, res) => {
	Products.find({ category: req.params.id }).exec((err, list_items) => {
		if (err) {
			return next(err);
		}
    const categories = cate_get_get()
		res.render("partials/category", {
			title: req.params.name,
			items: list_items,
      categories: categories
		});
	});
};

exports.cate_create_post = (req, res) => {
	const category = new Category({
		name: req.body.name,
		desc: req.body.desc,
	});
	category.save(function (err) {
		if (err) {
			cb(err, null);
			return;
		}
	});
	res.redirect("/category/new");
};

exports.cate_delete = (req, res) => {
	Category.findOneAndRemove({ _id: req.params.id }).exec((err, category) => {
		if (err) {
			return next(err);
		}
	});
	res.redirect("/category/new");
};
function newFunction(list_categories) {
  return list_categories,

    ;
}

