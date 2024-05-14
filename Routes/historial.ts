import express from 'express';
import historialController from '../controllers/historial-Controller';
import validateToken from '../Middleware/validateToken';

const router = express.Router();

router.get('/', validateToken, historialController.getUserOrders);

export default router;
