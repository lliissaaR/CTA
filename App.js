import mongoose from "mongoose";
import productRoutes from './routes/products.js';
import express from 'express';

const app = express()

mongoose
.connect('mongodb+srv://lisa_rch:P8hV%3A7%2F4%5Dcd4mK@joyfulwanderlust.l3cwhgs.mongodb.net/')
.then(() => {
  console.log('Connected to MongoDB');
    })
.catch((error) => {
  console.error('Could not connect to MongoDB, error:', error);
    });


    app.use(express.json());

    
    
    app.use('/products', productRoutes);
    
   
    app.use((req, res, next) => {                                            // gère les erreurs 404
      res.status(404).json({ message: 'Not Found' });
    });
    
  
    app.use((err, req, res, next) => {                                      // gère les erreurs globales
      console.error(err.stack);
      res.status(500).json({ message: 'Internal Server Error' });
    });
    
    
   