import { Router } from 'express';
const router = Router();
import { getAllProducts, getProductById, updateProduct, deleteProduct } from '../controller/productController.js';
import authMiddleware from '../middleware/authMiddleware.js';



router.get('/', getAllProducts);
router.get('/:id', getProductById);
// router.post('/', authMiddleware, createProduct);
router.put('/:id', authMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);

export default router;