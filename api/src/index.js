import db from "./db.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());




// EMPRESA 

// GET TB EMPRESA

app.get("/empresa", async (req, resp) => {
    try {
          let a = await db.infoc_atn_tb_empresa.findAll({ order: [['id_empresa', 'desc']] });
          resp.send(a);
      } catch (e) {
          resp.send("Erro")
          resp.send(e.toString());
      }
  });

// POST TB EMPRESA 

app.post("/empresa", async (req, resp) => {
  try {

    let a = req.body
    let r = await db.infoc_atn_tb_empresa.findOne({ where: { nm_nome: a.nm_nome, nr_cnpj: a.nr_cnpj } })
    if(r != null)
        return resp.send({erro:"Essa empresa ja existe"})

    let empresa = await db.infoc_atn_tb_empresa.create ({
        nm_nome: a.nm_nome,
        nr_cnpj: a.nr_cnpj,
        nm_ramo: a.nm_ramo,
        nr_telefone: a.nr_telefone,
        ds_estado_cidade: a.ds_estado_cidade,
        ds_email: a.ds_email,
        ds_senha: a.ds_senha
    })

    resp.send(empresa);

    } catch (e) {
        resp.send(e.toString());
    }
});


// DELETE TB EMPRESA

app.delete("/empresa/:id", async (req, resp) => {
    try { 
        let id = req.params.id
        let q = await db.infoc_atn_tb_empresa.destroy({ where:{ id_empresa: id }})

        resp.sendStatus("Empresa Removida"); 
    }
    catch(e) {
         resp.send("Erro")
         console.log(e.toString());
    }
});

// PUT TB EMPRESA

app.put("/empresa/:id", async (req,resp) => {
    try { 
        let id = req.params.id;
        let a = req.body;

        let r = await db.infoc_atn_tb_empresa.findOne({ where: { nm_nome: a.nm_nome, nr_cnpj: a.nr_cnpj,ds_email: a.ds_email, } })
        if(r != null)
            return resp.send({erro:"Essa Empresa já Existe!"})

         
        let empresa = await db.infoc_atn_tb_empresa.update ({
            nm_nome: a.nm_nome,
            nr_cnpj: a.nr_cnpj,
            nm_ramo: a.nm_ramo,
            nr_telefone: a.nr_telefone,
            ds_estado_cidade: a.ds_estado_cidade,
            ds_email: a.ds_email,
            ds_senha: a.ds_senha
        }, {where: { id_empresa: id } })
    
        resp.sendStatus(empresa);

    } catch (error) {
        resp.send(error.toString("Erro"))
    }
});



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

// POST TB EMPRESA CONFIG

app.post("/empresaconfig", async (req, resp) => {
    try {
      let a = req.body
      let r = await db.atn_infoc_atn_tb_configuracoes_empresa.findOne({ where: { ds_instagram: a.ds_instagram, ds_twiter: a.ds_twiter, ds_linkedin: a.ds_linkedin } })
      if(r != null)
          return resp.send({erro:"Essa empresa ja existe"})
  
      let empresa = await db.infoc_atn_tb_empresa.create ({
        ds_site: a.ds_site,
        
      })
  
      resp.send(empresa);
  
      } catch (e) {
          resp.send(e.toString());
      }
});


app.listen(process.env.PORT, (x) =>
  console.log(`Server up at port ${process.env.PORT}`)
);
