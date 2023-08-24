const Cart = require("../model/cart_structure");

const addToCart = async (req, res, next) => {
  try {
    const {
      user_id,
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      category,
      thumbnail,
    } = req.body;

    // Check if the item is already in the cart for this user
    const existingCartItem = await Cart.findOne({ user_id, id });

    if (existingCartItem) {
      // If the item exists, update its quantity or other details
      existingCartItem.quantity += 1; // You can adjust this based on your cart logic
      await existingCartItem.save();
    } else {
      // If the item doesn't exist, create a new cart item
      const cartItem = new Cart({
        user_id,
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        quantity: 1, // Set initial quantity to 1
      });

      await cartItem.save();
    }

    res
      .status(200)
      .json({ success: true, message: "Item added to cart successfully" });
  } catch (error) {
    // Handle errors and send appropriate responses
    next();
  }
};

const fetchCart = async (req, res) => {
  const result = await Cart.find();

  return res.send({ msg: "Products from Cart Fetched", Result: result });
};

const fetchCartByUser = async (req, res) => {
  const { user_id } = req.params;

  const result = await Cart.find({ user_id });
  return res.send({ msg: "Products from Cart Fetched", Result: result });
};

deleteuser = async (req, res) => {};

const removeCartItem = async (req, res) => {
  const { userId, id } = req.params;

  try {
    await Cart.findOneAndDelete({ user_id: userId, id: id });

    return res.send({ msg: "Item removed from cart" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).send({ msg: "Error removing item from cart" });
  }
};

const updateCartItemQuantity = async (req, res) => {
  const { userId, id } = req.params;
  const { change } = req.body;

  try {
    const cartItem = await Cart.findOne({ user_id: userId, id: id });

    if (cartItem) {
      cartItem.quantity += change;
      await cartItem.save();
      return res.send({ msg: "Cart item quantity updated successfully" });
    } else {
      return res.status(404).send({ msg: "Cart item not found" });
    }
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    res.status(500).send({ msg: "Error updating cart item quantity" });
  }
};

const checkout = async (req, res) => {
  const { user_id } = req.params;
  await Cart.deleteMany({ user_id: user_id });
  return res.send({ msg: "Deleted all data from cart" });

  // try {

  //   await Cart.deleteMany({ user_id: user_id });
  //   return res.send({ msg: "All items removed from cart" });
  // } catch (error) {
  //   console.error("Error removing items from cart:", error);
  //   res.status(500).send({ msg: "Error removing items from cart" });
  // }
};

const deleteAll = async (req, res) => {
  await Cart.deleteMany();
  return res.send({ msg: "Deleted all data from cart" });
};

const getDistinctItemCount = async (req, res) => {
  const { user_id } = req.params;

  try {
    const count = await Cart.distinct("product_id", {
      user_id,
    }).countDocuments();
    return res.json({ count });
  } catch (error) {
    console.error("Error fetching distinct item count:", error);
    res.status(500).json({ error: "Error fetching distinct item count" });
  }
};

module.exports = {
  addToCart,
  deleteAll,
  fetchCart,
  fetchCartByUser,
  removeCartItem,
  updateCartItemQuantity,
  checkout,
  getDistinctItemCount,
};
