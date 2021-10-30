import db from '../db.js'
import { Router } from 'express'

const app = Router();

app.get('/', async(req, resp) =>{
    try{
        let r = db.infoc_atn_tb_configuracoes_pessoais.findAll();
        resp.send(r);
    } catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})

export default app;