import express from "express";
import registerController from '../controllers/register-Controller';
import menusController from "../controllers/menus-Controller";
const router = express.Router();


router.post('/', registerController, menusController.getmenus);


export default router;