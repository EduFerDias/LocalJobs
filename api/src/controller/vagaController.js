import db from '../db.js'
import { Router } from 'express'

const app = Router();

// POST TB VAGA

app.post("/:id", async (req, resp) => {
    try {
        let a = req.body;
        let empresa = req.params.id

        const vaga = await db.infoc_atn_tb_vagas.create ({
            
            id_empresa: empresa,
            ds_profissao: a.ds_profissao,
            ds_descricao: a.ds_descricao,
            ds_qualificacao	: a.ds_qualificacao,
            ds_formacao: a.ds_formacao,
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


// GET TB VAGA POR ID EMPPRESA

app.get('/:id', async (req, resp) => {
    try {
        let id = await db.infoc_atn_tb_vagas.findOne({ where: { id_empresa: req.params.id } });

        if (id == null)
            return resp.send({ erro: 'Não a vagas nessa empresa' });
        
        let vaga = await
            db.infoc_atn_tb_vagas.findAll({
                where: {
                    id_empresa: id.id_empresa
                },
                order: [['id_empresa', 'desc']]
            });
    
        resp.send(vaga);
    } catch (e) {
        resp.send(e.toString())
    }
})

// GET TB VAGA POR ID VAGA

app.get('/:idempresa/:id', async (req, resp) => {
    try {
        let id = await db.infoc_atn_tb_vagas.findOne({ where: { id_empresa: req.params.idempresa, id_vaga: req.params.id } });


        if (id == null)
            return resp.send({ erro: 'Vaga não existe' });
        
        let vaga = await
            db.infoc_atn_tb_vagas.findAll({
                where: {
                    id_vaga: id.id_vaga,
                    id_empresa: id.id_empresa
                },
                order: [['id_vaga', 'desc']]
            });
    
        resp.send(vaga);
    } catch (e) {
        resp.send(e.toString())
    }
})


// GET TB VAGA

app.get('/', async (req, resp) => {
    try {
        let a = await db.infoc_atn_tb_vagas.findAll({ order: [['id_vaga', 'desc']] });
        resp.send(a);
    } catch (e) {
        resp.send("Erro")
        resp.send(e.toString());
    }
})

// DELETE TB VAGA

app.delete("/:id", async (req, resp) => {
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

// PUT TB VAGA

app.put("/:idempresa/:id", async(req,resp) => {

    try { 
        let a = req.body;

        let r = await db.infoc_atn_tb_vagas.findOne({ where: { id_empresa: req.params.idempresa, id_vaga: req.params.id } })



        if(r != null)
            return resp.send({erro:"Essa vaga não Existe!"})

        const vaga = await db.infoc_atn_tb_vagas.update ({
            ds_profissao: a.ds_profissao,
            ds_descricao: a.ds_descricao,
            ds_qualificacao	: a.ds_qualificacao,
            ds_formacao: a.ds_formacao,
            ds_local_trabalho: a.ds_local_trabalho,
            ds_salario_de: a.ds_salario_de,
            ds_salario_a: a.ds_salario_a,
            ds_tipo_contratacao: a.ds_tipo_contratacao,
            ds_beneficios: a.ds_beneficios,
            ds_hora_trabalho: a.ds_hora_trabalho
        })
    
        resp.sendStatus(vaga);

        } catch (error) {
            resp.send(error.toString("Erro"))
        }

});

export default app;