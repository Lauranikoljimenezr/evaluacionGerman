import express from "express";
import PedidoController from '../controllers/updateStatus-Controller';
const router = express.Router();

router.get('/', PedidoController.consultarEstadoPedido);

export default router;