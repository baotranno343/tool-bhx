const mongoose = require("mongoose");

const BHXSchema = new mongoose.Schema({
  idProduct: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  sysPrice: { type: Number, required: true },

  // Add more fields as per your product requirements
});
module.exports = mongoose.model("BHX", BHXSchema);
