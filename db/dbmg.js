const mongoose = require('mongoose');
require('dotenv').config()

// const url = process.env.MONGO_URI;
const url = "mongodb://localhost/sdccsv"
mongoose.connect(url, {useNewUrlParser: true}, (err, res) => {
  if (err) {
    console.log('db mg connect error:', err);
  } else {
    console.log('db mg connect success, db host:', url)
  }
});

let productSchema = mongoose.Schema({
  _id: Number,
  productId: Number,
  name: String,
  images: Array,
  price: Number,
  description: String,
  tag: String
});



let Product = mongoose.model('Product', productSchema);

// Product.createIndex({productId: 100})

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

let getAll = (cb) => {
  Product.find({})
    .limit(50)
    .exec((err, data) => {
      if (err) {
        console.log('db mg getAll error')
        cb(err, null)
      } else {
        console.log('db mg getAll success')
        cb(null, data)
      }
    })

  // Product.find({},['productId','name','description','tag', 'price', 'images'],
  // {
  //   skip: 0,
  //    limit: 5,
  //   sort: {
  //     _id: -1
  //   }
  // }, (err, data) => {
  //   if (err) {
  //     callback(err, null);
  //   } else {
  //     console.log('got the data:', data[0])
  //     callback(null, data);
  //   }
  // });
}

module.exports.save = save;

module.exports.getAll = getAll;