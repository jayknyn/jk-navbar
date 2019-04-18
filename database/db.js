const mongoose = require('mongoose');
require('dotenv').config()

// const url = process.env.MONGO_URI;
const url = "mongodb://localhost/test"
mongoose.connect(url, (err, res) => {
  if (err) {
    console.log('db connect error:', err);
  } else {
    console.log('db connect success')
  }
});

let productSchema = mongoose.Schema({
  productId: Number,
  name: String,
  images: Array,
  price: Number,
  description: String,
  tag: String
});

let Product = mongoose.model('Product', productSchema);

let save = (productId, productName, productImages, productDescription, productPrice, productTag) => {
  let newThing  = new Product({
      productId: productId,
      name: productName,
      images: productImages,
      price: productPrice,
      description: productDescription,
      tag: productTag
  })
   
  newThing.save((err, success) => {
    if (err) {
      console.log('err')
    } else {
      console.log('success');
    }
  })
}

let getAll = (callback) => {
  Product.find({},['productId','name','description','tag', 'price', 'images'],
  {
    skip: 0,
    //  limit: 5,
    sort: {
      _id: -1
    }
  }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

module.exports.save = save;

module.exports.getAll = getAll;