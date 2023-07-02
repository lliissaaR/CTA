import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = model('Product', productSchema);

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  export const find = () => {
    return products;
  };
  
  export const findById = (id) => {
    return products.find((product) => product.id === id);
  };
  
  export const findByIdAndUpdate = (id, updatedProduct) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct };
      return products[index];
    }
    return null;
  };
  
  export const findByIdAndRemove = (id) => {
    const index = products.findIndex((product) => product.id === id);
    if (index !== -1) {
      const removedProduct = products[index];
      products.splice(index, 1);
      return removedProduct;
    }
    return null;
  };

export default Product;