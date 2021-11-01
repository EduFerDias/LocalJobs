
import empConfigController from './controller/empresaConfigController.js';
import empresaController from './controller/empresaController.js';
import loginController from './controller/loginController.js'
import vagaController from './controller/vagaController.js';
import salaController from './controller/salaControler.js';
import chatController from './controller/chatController.js';
import userController from './controller/userCotroller.js';
import userConfigController from './controller/userConfigController.js'
import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.use('/login', loginController)
server.use('/empresa', empresaController);
server.use('/empresaconfig', empConfigController);
server.use('/vaga', vagaController);
server.use('/sala', salaController);
server.use('/chat', chatController);
server.use('/usuario', userController);
server.use('/userconfig', userConfigController);


server.listen(process.env.PORT, (x) =>
  console.log(`Server up at port ${process.env.PORT}`)
);