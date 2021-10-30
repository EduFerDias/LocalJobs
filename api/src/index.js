import db from "./db.js";
import express from "express";
import cors from "cors";

import empresaController from './controller/empresaController.js';
import empConfigController from './controller/empresaConfigController.js';
import vagaController from './controller/vagaController.js'
import salaController from './controller/salaControler.js'
import chatController from './controller/chatController.js'


const server = express();
server.use(cors());
server.use(express.json());

server.use('/empresa', empresaController)
server.use('/empresaconfig', empConfigController)
server.use('/vaga', vagaController)
server.use('/sala', salaController)
server.use('/chat', chatController)


server.listen(process.env.PORT, (x) =>
  console.log(`Server up at port ${process.env.PORT}`)
);