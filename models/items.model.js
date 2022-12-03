const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
  name: { type: String, require: true, maxLength: 50 },
  desc: { type: String, require: true },
  price: { type: Number, require: true },
  onHand: { type: Number, require: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

ItemsSchema.virtual("url").get(() => {
  return `/items/${this._id}`;
});

module.exports = mongoose.model("Items", ItemsSchema);
