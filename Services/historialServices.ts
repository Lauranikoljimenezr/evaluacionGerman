import UserRepository from '../Repositories/UserRepository';
import Pedido from '../Dto/pedidoDto'; 

class HistorialService {
    static async getUserOrdersByEmail(id_user: number): Promise<Pedido[]> {
        return await UserRepository.getUserOrders(id_user);
    }
}

export default HistorialService;
