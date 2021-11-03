import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


app.post('/', async(req, resp) =>{
    try{
        const {email ,senha, tp_conta}  = req.body;
        let senhaCrypto = crypto.SHA256(senha).toString(crypto.enc.Base64);
        let r = "";

        if(tp_conta == 'empresarial'){
            r = await db.infoc_atn_tb_empresa.findOne({where:{ds_senha:senhaCrypto, ds_email:email}});
        }
        else if (tp_conta == 'pessoal'){
            r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_senha:senhaCrypto, ds_email:email}});
        }

        if(!r){
            resp.send({ status:"error", mensagem:"Credenciais iválidas"})
        } else {
            resp.sendStatus(200)
        };

    } catch(e){
        resp.sendStatus(500);
        console.log(e);
    }
})

export default app;