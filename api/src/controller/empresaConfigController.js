import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


// GET TB EMPRESA CONFIG

app.get("/", async (req, resp) => {
    try {
          let a = await db.infoc_atn_tb_configuracoes_empresa.findOne({ order: [['id_empresa', 'desc']] });
          resp.send(a);
      } catch (e) {
          resp.send(e.toString());
      }
});

app.get("/:id", async (req, resp) => {
    try {
            let { id } = req.params;
            let r = await db.infoc_atn_tb_configuracoes_empresa.findOne({where:{id_empresa:Number(id)}})
            resp.send(r);
      } catch (e) {
          resp.send(e.toString());
      }
});


// PUT TB EMPRESA CONFIG

app.put("/:id", async (req, resp) => {
    try {
      let id = req.params.id;
      let a = req.body;
    
      console.log(a)
      
      let r = await db.infoc_atn_tb_configuracoes_empresa.findOne({ where: { ds_instagram_empresa: a.ds_instagram_empresa, ds_twitter_empresa: a.ds_twitter_empresa,ds_site: a.ds_site } })
      if(r != null)
          return resp.send({erro:"Essa empresa ja existe"})
  
      let empresa = await db.infoc_atn_tb_configuracoes_empresa.update ({
        ds_site: a.ds_site,
        ds_descricao_empresa: a.ds_descricao_empresa,
        ds_instagram_empresa: a.ds_instagram_empresa,
        ds_twitter_empresa: a.ds_twitter_empresa,
        ds_linkdin_empresa: a.ds_linkdin_empresa,
        ds_link_imagem: a.ds_link_imagem,
        ds_porte: a.ds_porte,
        qtd_funcionarios: a.qtd_funcionarios
      }, {where: { id_empresa: id } })
      
      resp.send("Funfo");
  
      } catch (e) {
          resp.send(e.toString());
      }
});


export default app;