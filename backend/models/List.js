const mongoose = require('mongoose');
const itemSchema = require('./Item').schema;
const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: [itemSchema],
    shop: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
  },
  { timestamps: true }
);

const List = mongoose.model('List', listSchema);

module.exports = List;
