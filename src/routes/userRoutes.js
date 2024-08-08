/* import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../utils/validation.js';
import * as userController from '../controllers/userController.js';
import { auth, isAdmin } from '../middlewares/auth.js';


const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Email no válido'),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    validateRequest,
    auth,
    isAdmin
],  userController.register);
router.post('/login', userController.login);
router.put('/:id', auth, userController.updateProfile);
router.put('/:id/change-password', auth, userController.changePassword);

export default router; */


import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../utils/validation.js';
import * as userController from '../controllers/userController.js';
import { auth, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Email no válido'),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    validateRequest
], userController.register);

router.post('/login', userController.login);
router.put('/:id', auth, userController.updateProfile);
router.put('/:id/change-password', auth, userController.changePassword);

export default router;