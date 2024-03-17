const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    ProductName: String,
    ProductDescription: String,
    ProductPrice: String,
    ProductManufacter: String,
});

module.exports = mongoose.model('Product', schema);
