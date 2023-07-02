import Product, { find, findById, findByIdAndUpdate, findByIdAndRemove } from '../models/productModel.js';


export const getAllProducts = async (req, res) => {                                // récupérer tous les produits
  try {
    const products = await find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getProductById = async (req, res) => {                                // Récupérer un produit par ID
  try {
    const product = await findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const createProduct = async (req, res) => {                                 // Créer un produit
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const updateProduct = async (req, res) => {                                 // Mettre à jour un produit
  try {
    const { name, price } = req.body;
    const product = await findByIdAndUpdate(req.params.id, { name, price }, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const deleteProduct = async (req, res) => {                                 // Supprimer un produit
  try {
    const product = await findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default {
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}

;

