import db from '../db.js'
import express from 'express'
import { Sequelize } from 'sequelize';

const Router = express.Router;
const app = Router();

const Op = Sequelize.Op;

app.post("/search", async (req, resp) => {
    try {
        let {area} = req.body;
        console.log(area)
        if(area){
            let a = await db.infoc_atn_tb_empresa.findAll({where:{nm_ramo:area}})
            resp.send(a)
            return;
        }
      } catch (e) {
          resp.send("Erro: " + e)
      }
  });


app.post('/buscarUsuario', async(req, resp) =>{
    
    let {area, cargo, cidade} = req.body;
            
    if(area && cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findAll({where:{ds_area:area, ds_cargo:cargo, ds_estado_cidade:{[Op.like]:`%${cidade}%`}}})        
        resp.send(r)
    }else if(!area && cargo && !cidade){
        let r = await db.infoc_atn_tb_pessoal.findAll({where:{ds_cargo:cargo}})        
        resp.send(r)
    }else if(!area && !cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findAll({ where:{ds_estado_cidade:{[Op.like]:`%${cidade}%`}}})        
        resp.send(r)
    }else if(area && !cargo && !cidade){
        let r = await db.infoc_atn_tb_pessoal.findAll({where:{ds_area:area}})        
        resp.send(r)
    }else if(!area && cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findAll({where:{ds_cargo:cargo, ds_estado_cidade:{[Op.like]:`%${cidade}%`}}})        
        resp.send(r)
    }else if(area && cargo && !cidade){
        let r = await db.infoc_atn_tb_pessoal.findAll({where:{ds_area:area, ds_cargo:cargo}})        
        delete r.ds_senha;
        resp.send(r)
    }else if(area && !cargo && cidade){
        let r = await db.infoc_atn_tb_pessoal.findAll({where:{ds_area:area, ds_estado_cidade:{[Op.like]:`%${cidade}%`}}})        
        resp.send(r)
    }
});
app.post('/buscarEmpresa', async(req, resp) =>{
    let {area, cidade} = req.body;
    let e = ''         
    if(area && cidade){
         e = await db.infoc_atn_tb_empresa.findAll({where:{nm_ramo:area, ds_estado_cidade:{[Op.like]:`%${cidade}%`}}})        
    }else if(!area && cidade){
         e = await db.infoc_atn_tb_empresa.findAll({ where:{ds_estado_cidade:{[Op.like]:`%${cidade}%`}}})        
    }else if(area && !cidade){
         e = await db.infoc_atn_tb_empresa.findAll({where:{nm_ramo:area}})        
    }
        resp.send(e)
})
export default app;