


import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();

// GET listar todos  TB_CURRICULO

app.get('/', async (req, resp) =>  {
    try{
        let usuario = await db.infoc_atn_tb_curriculo.findAll();
        resp.send(usuario);
    } catch (e) {
        resp.send({ erro: e.toString })
    }
})

// GET listar 1 curriculo TB_CURRICULO

app.get('/:id', async (req, resp) =>  {
    try{
        let usuario = await db.infoc_atn_tb_curriculo.findOne({ where: {id_empresa: req.params.id}})
        resp.send(usuario);
    } catch (e) {
        resp.send({ erro: e.toString })
    }
})


// POST TB_CURRICULO

app.post("/", async (req, resp) => {
    try {
        let a = req.body;

        const curriculo = await db.infoc_atn_tb_curriculo.create ({
            
            id_pessoal: a.id_pessoal,
            id_empresa: a.id_empresa,
            id_vaga: a.id_vaga, 
            ds_descricao: a.ds_descricao,
        })
        resp.send(curriculo)

    } catch (e) {
        resp.send(e.toString());
    }
});



// PUT TB_CURRICULO

app.put('/:id', async (req, resp) =>  {
    try{

    } catch (e) {
        resp.send({ erro: e.toString })
    }
})


// DELETE TB_CURRICULO

app.delete('/:id', async (req, resp) =>  {
    try{

    } catch (e) {
        resp.send({ erro: e.toString })
    }
})


// EMPRESA CONFIG



// GET TB EMPRESA CONFIG

app.get("/empresaconfig", async (req, resp) => {
    try {
          let a = await db.atn_infoc_atn_tb_configuracoes_empresa.findAll({ order: [['id_empresa', 'desc']] });
          resp.send(a);
      } catch (e) {
          resp.send(e.toString());
      }
  });

  export default app;