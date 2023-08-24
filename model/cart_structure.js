const mongoose = require("mongoose");

const cart_structure = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  quantity:{
    type:Number,
    
  }
});


const Cart = mongoose.model("Cart", cart_structure);
module.exports = Cart;
