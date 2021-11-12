import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();

app.post('/buscarUsuario', async(req, resp) =>{
    
    let {area, cargo, cidade} = req.body;
            
    if(area && cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_area:area, ds_cargo:cargo}, like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }else if(!area && cargo && !cidade){
        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_cargo:cargo}})        
        resp.send(r)
    }else if(!area && !cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findOne({like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }else if(area && !cargo && !cidade){
        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_area:area}})        
        resp.send(r)
    }else if(!area && cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_cargo:cargo}, like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }else if(area && cargo && !cidade){
        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_area:area, ds_cargo:cargo}})        
        delete r.ds_senha;
        resp.send(r)
    }else if(area && !cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findOne({where:{ds_area:area}, like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }
});
app.post('/buscarEmpresa', async(req, resp) =>{
    let {area, cargo, cidade} = req.body;         
    if(area && cargo && cidade){
        let r = await db.infoc_atn_tb_empresa.findOne({where:{nm_ramo:area, ds_cargo:cargo}, like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }else if(!area && cargo && !cidade){
        let r = await db.infoc_atn_tb_empresa.findOne({where:{ds_cargo:cargo}})        
        resp.send(r)
    }else if(!area && !cargo && cidade){
        let r = await db.infoc_atn_tb_empresa.findOne({like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }else if(area && !cargo && !cidade){
        let r = await db.infoc_atn_tb_empresa.findOne({where:{nm_ramo:area}})        
        resp.send(r)
    }else if(!area && cargo && cidade){
        let r = await db.infoc_atn_tb_empresa.findOne({where:{ds_cargo:cargo}, like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }else if(area && cargo && !cidade){
        let r = await db.infoc_atn_tb_empresa.findOne({where:{nm_ramo:area, ds_cargo:cargo}})        
        delete r.ds_senha;
        resp.send(r)
    }else if(area && !cargo && cidade){
        let r = await db.infoc_atn_tb_empresa.findOne({where:{nm_ramo:area}, like:{ds_estado_cidade:cidade}})        
        resp.send(r)
    }
})

export default app;