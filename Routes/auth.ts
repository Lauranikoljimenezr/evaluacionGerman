import express from "express";
import authController from '../controllers/auth-Controller';

const router = express.Router();


router.post('/', authController);


export default router;
