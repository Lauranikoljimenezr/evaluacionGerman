
import db from '../config/config-db';

import User from '../Dto/UserDto';
import Auth from '../Dto/UserAuthDto'; 
import Menu from '../Dto/MenuDto'; 
import Pedido from '../Dto/pedidoDto'; 

class UserRepository {

    static async add(user: User) {     
        const sql = 'INSERT INTO users (email, name, lastName, phoneNumber, password) VALUES (?,?,?,?,?)';
        const values = [user.email, user.name, user.lastName, user.phoneNumber, user.password];   
        return db.execute(sql, values);
    }

    static async logeo(auth: Auth) {        
        const sql = 'SELECT * FROM users WHERE email = ?';
        const values = [auth.email];     
        return db.execute(sql, values);   
    }


    static async getAllMenu(): Promise<Menu[]> {
        try { 
            const sql = 'SELECT * FROM products ';
            const [rows] = await db.execute(sql);
    
            if (!Array.isArray(rows)) {
                throw new Error('Los datos del menú no son válidos');
            }
    
            const menus: Menu[] = rows.map((row: any) => {
                return {
                    id: row.id,
                    name_product: row.name_product,
                    description: row.description,
                    price: row.price,
                    image: row.image
                };
            });
    
            return menus;
        } catch (error) {
            console.error('Error al obtener los menús:', error);
            throw error;
        }
    }



 
    static async getUserOrders(id_user: number): Promise<Pedido[]> {
        try {
            const sql = 'SELECT * FROM pedidos WHERE id_user = ?';
            const [rows] = await db.execute(sql, [id_user]);
    
            if (!Array.isArray(rows)) {
                throw new Error('Los datos del historial de pedidos no son válidos');
            }
    
            const userOrders: Pedido[] = rows.map((row: any) => {
                return {
                    id_user: row.id_user,
                    id_menu: row.id_menu,
                    estado: row.estado,
                };
            });
    
            return userOrders;
        } catch (error) {
            console.error('Error al obtener el historial de pedidos:', error);
            throw error;
        }
    }

    static async registrarPedido(pedido: Pedido) {
        try {
            const sql = 'INSERT INTO pedidos (id_user, id_menu, estado) VALUES (?, ?, ?)';
            const values = [pedido.id_user, pedido.id_menu, pedido.estado];
            const [result] = await db.execute(sql, values);

            if (result && ('affectedRows' in result) && result.affectedRows && result.affectedRows > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error('Error al registrar el pedido a domicilio:', error);
            throw error;
        }
    }

    static async actualizarEstadoPedido(id_pedido: number, estado: string) {
        try {
            const sql = 'UPDATE pedidos SET estado = ? WHERE id_pedido = ?';
            await db.execute(sql, [estado, id_pedido]);
        } catch (error) {
            console.error('Error al actualizar el estado del pedido:', error);
            throw error;
        }
    }

    static async consultarEstadoPedido(id_pedido: number) {
        try {
            const sql = 'SELECT estado FROM pedidos WHERE id_pedido = ?';
            const [rows] = await db.execute(sql, [id_pedido]);
    
            if (Array.isArray(rows) && rows.length > 0) {
                const estado = rows[0].estado;
                return estado;
            } else {
                throw new Error('No se encontró el pedido con el ID proporcionado');
            }
        } catch (error) {
            console.error('Error al consultar el estado del pedido:', error);
            throw error;
        }
    }
    
    
    
}


export default UserRepository;












