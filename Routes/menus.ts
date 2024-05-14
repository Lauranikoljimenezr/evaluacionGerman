import express from "express";
import menusController from "../controllers/menus-Controller";
import validateToken from "../Middleware/validateToken";

const router = express.Router();


router.get('/', validateToken, menusController.getmenus);

export default router;
