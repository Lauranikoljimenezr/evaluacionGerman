// Importación de los módulos necesarios de Express y otros archivos locales
import { Request, Response } from 'express'; // Importa los tipos Request y Response de Express
import HistorialService from '../Services/historialServices'; // Importa el servicio HistorialService desde el archivo historialServices

// Definición del controlador de historial
const historialController = {
    // Método para obtener los pedidos de un usuario
    getUserOrders: async (req: Request, res: Response) => {        
        try {
            // Extraer el ID de usuario del cuerpo de la solicitud
            const id_user = req.body.id_user;

            // Verificar si se proporcionó un ID de usuario válido
            if (id_user) {
                // Llamar al método getUserOrdersByEmail del servicio HistorialService para obtener los pedidos del usuario
                const userOrders = await HistorialService.getUserOrdersByEmail(id_user);
                
                // Enviar una respuesta con estado 200 (OK) y los pedidos del usuario en formato JSON
                res.status(200).json(userOrders);
            } else {
                // Si no se proporcionó un ID de usuario válido, enviar una respuesta con estado 401 (No autorizado)
                // y un mensaje indicando que no se proporcionaron credenciales de usuario válidas
                res.status(401).json({ message: 'No se proporcionaron credenciales de usuario válidas' });
            }
        } catch (error) {
            // Si se produce un error durante el proceso, imprimir el error en la consola
            // y enviar una respuesta con estado 500 (Error del servidor) y un mensaje indicando que hubo un error interno
            console.error('Error al obtener los pedidos del usuario:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
};

// Exportar el controlador de historial para que pueda ser utilizado en otros archivos
export default historialController;
