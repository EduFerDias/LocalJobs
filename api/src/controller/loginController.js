import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


app.post('/', async(req, resp) =>{
    try{
        const {email ,senha}  = req.body;

        if(!email || email === '')
            resp.send({status:'error', mensagem:'O campo de email é obrigatório'})
        else if(!senha || senha === '')
            resp.send({status:'error', mensagem:'O campo de senha é obrigatório'})
        

        let senhaCrypto = crypto.SHA256(senha).toString(crypto.enc.Base64);

        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_senha:senhaCrypto, ds_email:email}});
        let r2 = await db.infoc_atn_tb_empresa.findOne({where:{ds_senha:senhaCrypto, ds_email:email}});

        if(!r && !r2){
            resp.send({ status:"error", mensagem:"Credenciais iválidas"})
        } else if(r && !r2){
            resp.send({tp_conta:"pessoal"});
        } else if(r2 && !r){
            resp.send({tp_conta:"empresarial"});
        };

    } catch(e){
        resp.sendStatus(500);
        console.log(e);
    }
})

export default app;