import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


// EMPRESA 

// GET TB EMPRESA ID

app.get("/:id", async (req, resp) => {
    try {
        let { id } = req.params;
        let r = await db.infoc_atn_tb_empresa.findOne({where:{id_empresa:Number(id)}})
        resp.send(r);
      } catch (e) {
          resp.send("Erro")
          resp.send(e.toString());
      }
  });

// GET TB EMPRESA

app.get("/", async (req, resp) => {
    try {
          let a = await db.infoc_atn_tb_empresa.findAll({ order: [['id_empresa', 'desc']] });
          resp.send(a);
      } catch (e) {
          resp.send("Erro")
          resp.send(e.toString());
      }
  });

// POST TB EMPRESA 

app.post("/", async (req, resp) => {
  try {

    let a = req.body

    let nome = await db.infoc_atn_tb_empresa.findOne({ where: { nm_nome: a.nm_nome } })
    let cnpj = await db.infoc_atn_tb_empresa.findOne({ where: { nr_cnpj: a.nr_cnpj } })
    let email = await db.infoc_atn_tb_empresa.findOne({ where: { ds_email: a.ds_email } })
    let emailJaUsado = await db.infoc_atn_tb_pessoal.findOne({where:{ds_email:a.ds_email}})

    if(!nome) {
        return resp.send({erro:"Esse nome já foi utizado em nosso site, tente usar outro"})
    }
    else if (email != null || emailJaUsado != null) {
        return resp.send({erro:"Essa email já foi utizado em nosso site, tente usar outro"})
    }
    else if (cnpj != null) {
        return resp.send({erro:"Esse CNPJ já foi utizado em nosso site"})
    }



    const empresa = await db.infoc_atn_tb_empresa.create ({
        nm_nome: a.nm_nome,
        nr_cnpj: a.nr_cnpj,
        nm_ramo: a.nm_ramo,
        nr_telefone: a.nr_telefone,
        ds_estado_cidade: a.ds_estado_cidade,
        ds_email: a.ds_email,
        ds_senha: a.ds_senha
    })

    const x = ""
    const empresaconfig = await db.infoc_atn_tb_configuracoes_empresa.create ({
        id_empresa: empresa.id_empresa,
        ds_site: x,
        ds_descricao_empresa: x,
        ds_instagram_empresa: x,
        ds_twitter_empresa: x,
        ds_linkdin_empresa: x,
        ds_link_imagem: x,
        ds_porte: x,
        qtd_funcionarios: 0
    })

    resp.send(empresa + empresaconfig);

    } catch (e) {
        resp.send(e.toString());
    }
});


// DELETE TB EMPRESA

app.delete("/:id", async (req, resp) => {
    try { 
        let id = req.params.id
        let q = await db.infoc_atn_tb_empresa.destroy({ where:{ id_empresa: id }})
        let x = await db.infoc_atn_tb_configuracoes_empresa.destroy({ where:{ id_empresa: id }})
        resp.sendStatus("Empresa Removida"); 
    }
    catch(e) {
         resp.send("Erro")
         console.log(e.toString());
    }
});

// PUT TB EMPRESA

app.put("/:id", async (req,resp) => {
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



export default app;