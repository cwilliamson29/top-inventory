const { nextTick } = require("process");
const Category = require("../models/category.model");

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
