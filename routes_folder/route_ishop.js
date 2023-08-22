const { addProduct, fetchProducts, fetchByBrand, fetchByCategory } = require('../controller/products')
const { registerUser } = require('../controller/user')

const route_ishop=require('express').Router()

route_ishop.post('/addmany',addProduct)

route_ishop.get('/getall',fetchProducts)

route_ishop.get('/getcategory/:category',fetchByCategory)

route_ishop.get('/getbrand/:brand',fetchByBrand)


//registration

route_ishop.post('/register',registerUser)


module.exports={route_ishop}