import products from "../models/productModel.js";

const getAllProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const product = products.find((p) => p.id === id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Not possible to get product" });
  }
};

const createProduct = (req, res) => {
  try {
    const { name, price } = req.body;

    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Not possible to add product" });
  }
};

const updateProduct = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    const product = products.find((p) => p.id === id);

    if (product) {
      product.name = name;
      product.price = price;
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Not possible to update product" });
  }
};

const deleteProduct = (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const product = products.find((p) => p.id === id);

    if (product) {
      // filter(): Remove um item diretamente do array sem ter um índice.
      products = products.filter((p) => p.id !== id);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Not possible to delete product" });
  }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
