import db from '../db.js'
import { Router } from 'express'

const app = Router();

// GET TB EMPRESA CONFIG

app.get("/", async (req, resp) => {
    try {
          let a = await db.infoc_atn_tb_configuracoes_empresa.findAll({ order: [['id_empresa', 'desc']] });
          resp.send(a);
      } catch (e) {
          resp.send(e.toString());
      }
});

// PUT TB EMPRESA CONFIG

app.put("/:id", async (req, resp) => {
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


export default app;