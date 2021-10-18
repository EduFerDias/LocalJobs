import db from "./db.js";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

// GET TB EMPRESA CONFIG

app.get("/empresaconfig", async (req, resp) => {
  try {
        let a = await db.atn_infoc_atn_tb_configuracoes_empresa.findAll({ order: [['id_empresa', 'desc']] });
        resp.send(a);
    } catch (e) {
        resp.send(e.toString());
    }
});

// POST TB EMPRESA 

app.post("/empresa", async (req, resp) => {
  try {

    let a = req.body

    let r = await db.infoc_atn_tb_empresa.findOne( { where: {nm_nome: a.nm_nome,nr_cnpj: a.nr_cnpj} } )
    if (r != null) {
        return resp.send({erro: "Essa empresa ja existe"})
    }

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

// GET TB EMPRESA
app.get("/empresa", async (req, resp) => {
  try {
        let a = await db.atn_infoc_atn_tb_empresa.findAll({ order: [['id_empresa', 'desc']] });
        resp.send(a);
    } catch (e) {
        resp.send(e.toString());
    }
});




app.listen(process.env.PORT, (x) =>
  console.log(`Server up at port ${process.env.PORT}`)
);
