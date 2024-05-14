
import User from '../Dto/UserDto';
import { Request, Response } from "express"; 
import UserService from '../Services/UserServices'; 


let register = async (req: Request, res: Response) => {
  try {
   
    const {
      email,
      password,
      name,
      lastName,
      phoneNumber,
    
    } = req.body;
    
    const registerUser = await UserService.register(new User(email, name, lastName, phoneNumber, password));   

    return res.status(201).send(
      { status: 'register ok' }
    );
   
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage });
    } else {
      return res.status(500).send({ error });
    }
  }
}

export default register;
