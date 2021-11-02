import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();

// GET CHAT
   
app.get("/:sala", async (req, resp) =>{
    try {
        let a = await db.infoc_atn_tb_sala.findOne({ where: {nm_sala : req.params.sala } });
        if (a == null)
            return resp.send({ erro: 'Sala não existe!' });
        resp.send(a);

        let b = await db.infoc_atn_tb_chat.findAll({
            where: {
                id_sala: sala.id_sala
            }, 
            order: [['id_chat', 'desc']],
            include: ['tb_empresa', 'tb_sala', 'tb_pessoal'],            
        });


    } catch (e) {
        resp.send("Erro")
        resp.send(e.toString());
    }
})






// PUT CHAT

app.put("/:id", async (req, resp) =>{
 try{
     let id = req.params.id;
     let mensagem = req.body.mensagem;
     let r = await db.infoc_atn_tb_chat.update(
         {
             ds_mensagem: mensagem
         },
         {
             where: { id_chat: id}
         }
     );

     resp.sendStatus(200)

 } catch (e){
     resp.send(e.toString())
 }
})

// DELETE CHAT

app.delete("/:id", async (req, resp) =>{
 try{
     let r = await db.infoc_atn_tb_chat.destroy({ where:  { id_chat: req.params.id } })
     resp.sendStatus(200)
 } catch(e){
     resp.send(e.toString())
 }
})

// POST CHAT

app.post("/", async (req, resp) =>{
 try{
     let chat = req.body;
     let sala = await db.infoc_atn_tb_sala.findOne({ where: { nm_sala: chat.sala.nome } })
     let empresa = await db.infoc_atn_tb_empresa.findOne({ where: {nm_empresa : chat.empresa.nome } })
     let pessoa = await db.infoc_atn_tb_pessoal.findOne({ where: { nm_nome: chat.pessoa.nome } })



     let mensagem = {
         id_sala: sala.id_sala,
         ds_mensagem: chat.mensagem,
         dt_mensagem: new Date(),
         tp_enviado_por: chat.enviadopor
     }

     let r = await db.infoc_atn_tb_chat.create(mensagem);

 } catch(e){
     resp.send(e.toString())
 }
})


export default app;