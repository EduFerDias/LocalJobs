import db from '../db.js'
import express from 'express'
import crypto from 'crypto-js'

const Router = express.Router;
const app = Router();


app.post('/', async(req, resp) =>{
    try{
        const {email ,senha}  = req.body;

        if(!email || email === ''){
            resp.send({status:'error', mensagem:'O campo de email é obrigatório'})
            return;
        }
        else if(!senha || senha === ''){
            resp.send({status:'error', mensagem:'O campo de senha é obrigatório'})
            return;
        }

        let senhaCrypto = crypto.SHA256(senha).toString(crypto.enc.Base64);

        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_senha:senhaCrypto, ds_email:email},raw: true});

        let r2 = await db.infoc_atn_tb_empresa.findOne({where:{ds_senha:senhaCrypto, ds_email:email},raw: true});

        if(!r && !r2){
            resp.send({ status:"error", mensagem:"Credenciais iválidas"})
            return;
        } 
        else if(r && !r2){
            resp.send({tp_conta:"pessoal", id:r.id_pessoal});
            return;
        } 
        else if(r2 && !r){
            resp.send({tp_conta:"empresarial", id: r2.id_empresa, nome: r2.nm_nome});
            return;
        };

    } catch(e){
        resp.sendStatus(500);
        console.log(e);
    }
})

export default app;