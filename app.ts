import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import register from './Routes/register';
import auth from './Routes/auth';
import menus from './Routes/menus';
import pedido from './Routes/pedido'; 
import historial from './Routes/historial'; 
import statusupdate from './Routes/updateStatus'; 
import checkstatus from './Routes/checkStatus'; 

dotenv.config();

const app = express().use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', register);
app.use('/auth', auth);
app.use('/menus', menus);
app.use('/pedido', pedido); 
app.use('/historial', historial);
app.use('/statusupdate', statusupdate);
app.use('/checkstatus', checkstatus);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto:", PORT);
}).on("error", (error) => {
  throw new Error(error.message)
});
