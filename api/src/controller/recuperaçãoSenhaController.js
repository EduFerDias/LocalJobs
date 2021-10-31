import db from '../db.js'
import enviarEmail from '../emails.js';
import { Router } from 'express'

const app = Router();

app.post('/esqueceuSenha', async(req, resp) =>{
    try{

    const { email } = req.body;
    const accountExists =   await db.infoc_atn_tb_pessoal.findOne({where:{ds_email:email}})
    if(!accountExists || accountExists === null || accountExists === undefined){
        resp.send({erro:'Essa conta não existe'});
        return;
    }

    let recCode = getRadomInt(1000, 9999)
    let r = await db.infoc_atn_tb_pessoal.update({ds_codigo_rec: recCode}, {where:{ds_email:email, id_pessoal: accountExists.id_pessoal}})
    let codeEnv = await enviarEmail(email, "Recuperção de Conta", `
        <h3>Recuperação de conta<h3>
        <p>Código gerado ${recCode}</p>
    `)
    resp.send(codeEnv)
} catch(e){
    resp.sendStatus(500)
    console.log(e)
}
});

app.post('/validarCodigo', async(req, resp) =>{

    try{
        
        let {code, email} =  req.body;
        const v = await db.infoc_atn_tb_pessoal.findOne({where:{ds_codigo_rec:code, ds_email:email}})

        if(v.ds_codigo_rec !== code || !v){
            resp.send({erro:'codigo errado!'})
        } else {
            resp.send({status:'codigo valido'})
        }
        resp.send(v)
    }catch(e){
        console.log(e)
    }

})

function getRadomInt (min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export default app;