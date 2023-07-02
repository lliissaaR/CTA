import { Router } from 'express';

const router = Router();

import { createUser, getUserById, deleteUserById } from '../controllers/userController';


router.post('/', createUser);              //créer un user


router.get('/:id', getUserById);         // récupérer un user par son id


router.delete('/:id', deleteUserById);   //supprimer un user par son id


export default router;