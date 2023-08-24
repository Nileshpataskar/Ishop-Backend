const { addToCart, deleteAll, fetchCart, fetchCartByUser, removeCartItem, updateCartItemQuantity, checkout, getDistinctItemCount } = require('../controller/cart')
const { addProduct, fetchProducts, fetchByBrand, fetchByCategory, search } = require('../controller/products')
const { registerUser } = require('../controller/user')

const route_ishop=require('express').Router()

route_ishop.post('/addmany',addProduct)


// cart
route_ishop.get('/fetchcart',fetchCart)
route_ishop.get('/fetchcartbyuser/:user_id',fetchCartByUser)
route_ishop.delete('/removefromcart/:userId/:id', removeCartItem);

route_ishop.put("/updateCartItemQuantity/:userId/:id", updateCartItemQuantity);


route_ishop.post('/addtocart', addToCart)
route_ishop.delete('/deleteall',deleteAll)

route_ishop.delete('/checkout/:userID',checkout)
route_ishop.get("/getDistinctItemCount/:user_id", getDistinctItemCount);


route_ishop.get('/getall',fetchProducts)

route_ishop.get('/getcategory/:category',fetchByCategory)

route_ishop.get('/getbrand/:brand',fetchByBrand)

route_ishop.get('/search',search)



//registration

route_ishop.post('/register',registerUser)


module.exports={route_ishop}