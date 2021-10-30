import db from '../db.js'
import { Router } from 'express'

const app = Router();

app.get('/',async (req, resp) => {
    try {
        let r = await db.infoc_atn_tb_pessoal.findAll();
        resp.sendStatus(200, r)
    } catch (e){
        resp.sendStatus(500)
        console.log(e)
    }
})

app.post('/', async (req, resp) =>{
    try{
        let {nome, area, cargo, telefone, estado_cidade, email, confirmar_senha, assinatura} = req.body;
        let r = await db.infoc_atn_tb_pessoal.create({nm_nome:nome, ds_area:area, ds_cargo:cargo, nr_telefone:telefone, ds_estado_cidade:estado_cidade, ds_email:email, ds_senha: confirmar_senha, bl_assinatura:assinatura});
        resp(r)
    } catch(e){
        resp.sendStatus(500)
        console.log(e)
    }
})

export default app;