import db from '../db.js'
import express from 'express'

const Router = express.Router;
const app = Router();


app.get('/', async (req, resp) => {
    try {
        // let {area} =

        // if(area = ''){
            let a = await db.infoc_atn_tb_vagas.findAll({ order: [['id_vaga', 'desc']] });
            resp.send(a);
        // }
    } catch (e) {
        resp.send(e.toString());
    }
})


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

        resp.send(vaga);

    } catch (e) {
        resp.send(e.toString());
    }
});


// GET TB VAGA POR ID EMPPRESA

app.get('/:id', async (req, resp) => {
    try {
        let id = await db.infoc_atn_tb_vagas.findAll({ where: { id_empresa: req.params.id } });

        if (id == null)
            return resp.send({ erro: 'Não a vagas nessa empresa' });
        
        let vaga = await
            db.infoc_atn_tb_vagas.findAll({
                where: {
                    id_empresa: req.params.id
                },
                order: [['id_empresa', 'desc']]
            });
    
        resp.send(vaga);
    } catch (e) {
        resp.send(e.toString())
    }
})

// GET TB VAGA POR ID VAGA

app.get('/:idempresa/:idvaga', async (req, resp) => {
    try {
        let idempresa = req.params.idempresa
        let idvaga = req.params.idvaga
     
        let vaga = await
            db.infoc_atn_tb_vagas.findAll({
                where: {
                    id_vaga: idvaga,
                    id_empresa: idempresa
                },
                order: [['id_vaga', 'desc']]
            });
    
        resp.send(vaga);
    } catch (e) {
        resp.send(e.toString())
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
        let id = req.params.id
        let idempresa = req.params.idempresa
        

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
        }, {where: { id_empresa: idempresa, id_vaga: id}})
    
        resp.send(vaga);

        } catch (e) {
            resp.send(e.toString(e))
        }

});

export default app;