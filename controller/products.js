const Products = require("../model/product_structure");
const ApiFeatures = require("../util/search");

const addProduct = async (req, res) => {
  try {
    const data = req.body;

    const result = await Products.insertMany(data);

    res.send({ msg: "Product Stored successfully", Result: result });
  } catch (err) {
    console.log("Error while inserting", err);
  }
};

const fetchProducts = async (req, res) => {
  const result = await Products.find();

  return res.send({ msg: "Products Fetched", Result: result });
};

const fetchByCategory = async (req, res) => {
  const { category } = req.params;

  console.log(category);
  const result = await Products.find({ category: category });
  return res.send({ Result: result });
};

const fetchByBrand = async (req, res) => {
  const { brand } = req.params;

  console.log(brand);
  const result = await Products.find({ brand: brand });
  return res.send({ Result: result });
};


const search = async (req, res) => {
  try {
    const data = req.query;
    const result = new ApiFeatures(Products.find(), data).search();
    const products = await result.query; // Assuming it's an array of Mongoose documents

    return res.send({
      msg: "rendered",
      products,
    });
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).send({ msg: "Error during search" });
  }
};




module.exports = { addProduct, fetchProducts, fetchByBrand,fetchByCategory,search };

// id,
// title,
// description,
// price,
// discountPercentage,
// rating,
// stock,
// brand,
// category,
// thumbnail,
// images,
