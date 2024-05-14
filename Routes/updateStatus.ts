import express from "express";
import PedidoController from '../controllers/updateStatus-Controller';
const router = express.Router();


router.put('/', PedidoController.actualizarEstadoPedido);


export default router;