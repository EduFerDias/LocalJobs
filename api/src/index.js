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

    let nome = await db.infoc_atn_tb_empresa.findOne({ where: { nm_nome: a.nm_nome } })
    let cnpj = await db.infoc_atn_tb_empresa.findOne({ where: { nr_cnpj: a.nr_cnpj } })
    let email = await db.infoc_atn_tb_empresa.findOne({ where: { ds_email: a.ds_email } })

    if(nome != null) {
        return resp.send({erro:"Esse nome já foi utizado em nosso site, tente usar outro"})
    }
    else if (email != null) {
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

    const x = "";
    const empresaconfig = await db.infoc_atn_tb_configuracoes_empresa.create ({
        id_empresa: empresa.id_empresa,
        ds_site: x,
        ds_descricao_empresa: x,
        ds_instagram_empresa: x,
        ds_twiter_empresa: x,
        ds_link_imagem: x
    })

    resp.send(empresa + empresaconfig);

    } catch (e) {
        resp.send(e.toString());
    }
});


// DELETE TB EMPRESA

app.delete("/empresa/:id", async (req, resp) => {
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

// TB EMPRESA CONFIG




// GET TB EMPRESA CONFIG

app.get("/empresaconfig", async (req, resp) => {
    try {
          let a = await db.infoc_atn_tb_configuracoes_empresa.findAll({ order: [['id_empresa', 'desc']] });
          resp.send(a);
      } catch (e) {
          resp.send(e.toString());
      }
});

// PUT TB EMPRESA CONFIG

app.put("/empresaconfig/:id", async (req, resp) => {
    try {
      let id = req.params.id;
      let a = req.body;

      let r = await db.infoc_atn_tb_configuracoes_empresa.findOne({ where: { ds_instagram_empresa: a.ds_instagram_empresa, ds_twiter_empresa: a.ds_twiter_empresa,ds_site: a.ds_site } })
      if(r != null)
          return resp.send({erro:"Essa empresa ja existe"})
  
      let empresa = await db.infoc_atn_tb_configuracoes_empresa.update ({
        ds_site: a.ds_site,
        ds_descricao_empresa: a.ds_descricao_empresa,
        ds_instagram_empresa: a.ds_instagram_empresa,
        ds_twiter_empresa: a.ds_twiter_empresa,
        ds_link_imagem: a.ds_link_imagem
      }, {where: { id_empresa: id } })
      
      resp.send("Funfo");
  
      } catch (e) {
          resp.send(e.toString());
      }
});



// POST TB VAGA

app.post("/vaga", async (req, resp) => {
    try {
        let a = req.body;

        let empresa = await db.infoc_atn_tb_empresa.findOne()

        

        const vaga = await db.infoc_atn_tb_vagas.create ({
            
            id_empresa: empresa.id_empresa,
            ds_profissao: a.ds_profissao,
            ds_descricao: a.ds_descricao,
            ds_qualificacao	: a.ds_qualificacao	,
            ds_local_trabalho: a.ds_local_trabalho,
            ds_salario_de: a.ds_salario_de,
            ds_salario_a: a.ds_salario_a,
            ds_tipo_contratacao: a.ds_tipo_contratacao,
            ds_beneficios: a.ds_beneficios,
            ds_hora_trabalho: a.ds_hora_trabalho
        })

    } catch (e) {
        resp.send(e.toString());
    }
});


// GET TB VAGA POR ID

app.get('/vaga/:id', async (req, resp) => {
    try {
        let id = await db.infoc_atn_tb_vagas.findOne({ where: { id_vaga: req.params.id } });

        if (id == null)
            return resp.send({ erro: 'Vaga não Existe' });
        
        let vaga = await
            db.infoc_atn_tb_vagas.findAll({
                where: {
                    id_vaga: id.id_vaga
                },
                order: [['id_vaga', 'desc']]
            });
    
        resp.send(vaga);
    } catch (e) {
        resp.send(e.toString())
    }
})


// GET TB VAGA

app.get('/vaga', async (req, resp) => {
    try {
        let a = await db.infoc_atn_tb_vagas.findAll({ order: [['id_vaga', 'desc']] });
        resp.send(a);
    } catch (e) {
        resp.send("Erro")
        resp.send(e.toString());
    }
})

// DEETE TB VAGA

app.delete("/empresa/:id", async (req, resp) => {
    try { 
        let id = req.params.id
        let q = await db.infoc_atn_tb_vagas.destroy({ where:{ id_vaga: id }})
        resp.sendStatus("Vaga Removida"); 
    }
    catch(e) {
         resp.send("Erro")
         console.log(e.toString());
    }
});


// POST SALA

app.post("/sala", async (req, resp) =>{


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
   
app.get("/sala/:id", async (req, resp) =>{
       try {
           let a = await db.infoc_atn_tb_sala.findOne({ where: {id_sala : req.params.id } });
           if (a == null)
               return resp.send({ erro: 'Sala não existe!' });
           resp.send(a);
       } catch (e) {
           resp.send("Erro")
           resp.send(e.toString());
       }
})


app.listen(process.env.PORT, (x) =>
  console.log(`Server up at port ${process.env.PORT}`)
);
