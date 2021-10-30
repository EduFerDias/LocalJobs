import db from '../db.js'
import { Router } from 'express'

const app = Router();

// POST TB VAGA

app.post("/", async (req, resp) => {
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

app.get('/:id', async (req, resp) => {
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

app.get('/', async (req, resp) => {
    try {
        let a = await db.infoc_atn_tb_vagas.findAll({ order: [['id_vaga', 'desc']] });
        resp.send(a);
    } catch (e) {
        resp.send("Erro")
        resp.send(e.toString());
    }
})

// DEETE TB VAGA

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

export default app;