const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  value: {
    type: Number
  },
},{
    collection: 'item'
});

module.exports = mongoose.model('Item', Item);