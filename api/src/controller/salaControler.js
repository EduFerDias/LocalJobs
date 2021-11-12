import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


// POST SALA

app.post("/", async (req, resp) =>{


    try{
           let x = req.body
           let y = await db.infoc_atn_tb_sala.findOne({ where: { nm_sala: x.nm_sala}})
           if(y != null)
               return resp.send({erro: "Essa sala já existe!"})
   
           let r = await db.infoc_atn_tb_sala.create ({
               nm_sala: x.nm_sala,
               bt_ativa: x.bt_ativa,
               id_empresa: x.id_empresa,
               id_usuario: x.id_empresa
           })
   
           resp.send(r)
   
       } catch(e){
           resp.send(e.toString());
       }
   });

// GET SALA

app.get('/', async (req, resp) => {
    try {
        let r = await db.infoc_atn_tb_sala.findOne();
        resp.send(r);
    } catch (e) {
        resp.send("Erro")
        resp.send(e.toString())
    }
})



// DELETE SALA

app.delete("/:id", async (req, resp) =>{
    try{
        let r = await db.infoc_atn_tb_sala.destroy({ where: { id_sala: req.params.id } })
        resp.sendStatus(200)
    } catch (e) {
        resp.send(e.toString)
    }


})

export default app;