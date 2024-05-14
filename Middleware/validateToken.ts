
import { Request, Response, NextFunction } from 'express'; 
import jwt, { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken'; 
import dotenv from 'dotenv'; 


dotenv.config();


const validateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
       
        const headerToken = req.headers['authorization'];

       
        if (headerToken && headerToken.startsWith('Bearer ')) {
            
            const bearerToken = headerToken.split(' ')[2].trim();  
                  
           
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'Nikolj', (err) => {
                if (err) {
                    if (err instanceof TokenExpiredError) {
                      
                        return res.status(401).json({ status: "autorizacion denegada: token expirado" });
                    }
                    if (err instanceof JsonWebTokenError) {
                       
                        return res.status(401).json({ status: "autorizacion denegada: token invalido" });
                    }
                }
              
                next();
            });
        } else {
            
            res.status(401).json({ status: 'Acceso denegado: Token no proporcionado' });
        }
    } catch (error) {
      
        console.error("Error durante la validación del token:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export default validateToken;
