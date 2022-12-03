require("dotenv").config();

var async = require("async");
const Items = require("./models/items.model");
const Category = require("./models/category.model");
const dbInit = require("./dbconfig");
var mongoose = require("mongoose");

const populate = () => {
  //#! /usr/bin/env node

  console.log(
    "This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
  );

  // Get arguments passed on command line
  //var userArgs = process.argv.slice(2);
  /*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
  //var mongoDB = userArgs[0];
  /*mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.Promise = global.Promise;
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));*/

  dbInit();

  var categories = [];
  var items = [];

  function categoryCreate(name, desc, cb) {
    categorydetail = { name, desc };

    var category = new Category(categorydetail);

    category.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      console.log("New Category: " + category);
      categories.push(category);
      cb(null, category);
    });
  }

  function itemCreate(name, desc, price, onHand, category, cb) {
    var item = new Items({ name, desc, price, onHand, category });

    item.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      console.log("New Item: " + item);
      items.push(item);
      cb(null, item);
    });
  }

  function createCatagories(cb) {
    async.series(
      [
        function (callback) {
          categoryCreate("CPU's", "Computer CPU's by Intel and AMD", callback);
        },
        function (callback) {
          categoryCreate("Desktop RAM", "Desktop RAM", callback);
        },
        function (callback) {
          categoryCreate("Server RAM", "Server RAM", callback);
        },
      ],
      // optional callback
      cb
    );
  }

  function createItems(cb) {
    async.parallel(
      [
        function (callback) {
          itemCreate(
            "AMD Ryzen II",
            "AMD Ryzen II CPU - 4 Cores - 8 virtual",
            "299.99",
            "43",
            [Category[0]],
            callback
          );
        },
        function (callback) {
          itemCreate(
            "Intel i7- 4770",
            "Intel CPU i7-4770",
            "399.99",
            "34",
            [categories[0]],
            callback
          );
        },
        function (callback) {
          itemCreate(
            "Kingston 16GB DDR4 3200",
            "Kingston Desktop Ram 16GB x 1 - DDR4 3200",
            "114.99",
            "132",
            [categories[1]],
            callback
          );
        },
        function (callback) {
          itemCreate(
            "Corsair 16GB DDR3 ",
            "Corsair Desktop Ram 16GB x 1 - DDR3 2600",
            "174.99",
            "132",
            [categories[1]],
            callback
          );
        },
        function (callback) {
          itemCreate(
            "Kingston 64GB ECC ",
            "Kingston Server Ram 64GB x 1 - ECC",
            "174.99",
            "132",
            [categories[2]],
            callback
          );
        },
        function (callback) {
          itemCreate(
            "Corsair 64GB ECC ",
            "Corsair Server Ram 64GB x 1 - ECC",
            "174.99",
            "132",
            [categories[2]],
            callback
          );
        },
      ],
      // optional callback
      cb
    );
  }

  async.series(
    [createCatagories, createItems],
    // Optional callback
    function (err, results) {
      if (err) {
        console.log("FINAL ERR: " + err);
      } else {
        console.log("BOOKInstances: ");
      }
      // All done, disconnect from database
      mongoose.connection.close();
    }
  );
};

populate();
