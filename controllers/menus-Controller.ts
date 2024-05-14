import { Request, Response } from 'express'; 
import MenuService from '../Services/MenuServices'; 


const getmenus = async (req: Request, res: Response) => {
    try {
       
        const menus = await MenuService.getAllMenu(); 
        
        
        res.status(200).json({ menus }); 
    } catch (error) {
        console.error('Error al obtener el menú:', error);
        res.status(500).json({ error: 'Error al obtener el menú' });
    }
};

export default { getmenus };
