import UserRepository from '../Repositories/UserRepository';
import Pedido from '../Dto/pedidoDto';

class DomicilioService {
    static async pedirDomicilio(id_user: number, id_menu: number, estado: string) {
        try {
            const pedido = { id_user, id_menu, estado }; // Crear objeto directamente
            const result = await UserRepository.registrarPedido(pedido);
            return result;
        } catch (error) {
            console.error('Error al registrar el pedido de domicilio:', error);
            throw error;
        }
    
    }

    static async actualizarEstadoPedido(id_pedido: number, estado: string) {
        await UserRepository.actualizarEstadoPedido(id_pedido, estado);
    }

    static async consultarEstadoPedido(id_pedido: number) {
        return await UserRepository.consultarEstadoPedido(id_pedido);
    }
}

export default DomicilioService;











