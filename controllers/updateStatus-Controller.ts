import { Request, Response } from 'express';
import DomicilioService from '../Services/pedidoServices';

const PedidoController = {
    actualizarEstadoPedido: async (req: Request, res: Response) => {
        try {
            const { id_pedido, estado } = req.body;
            await DomicilioService.actualizarEstadoPedido(id_pedido, estado);
            res.status(200).json({ message: 'Estado del pedido actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar el estado del pedido:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    },

    consultarEstadoPedido: async (req: Request, res: Response) => {
        try {
            const id_pedido = Number(req.params.id_pedido);
            const estado = await DomicilioService.consultarEstadoPedido(id_pedido);
           
            
            if (estado !== null) {
                res.status(200).json({ estado });
            } else {
                res.status(404).json({ message: 'No se encontró el pedido con el ID proporcionado' });
            }
        } catch (error) {
            console.error('Error al consultar el estado del pedido:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};

export default PedidoController;