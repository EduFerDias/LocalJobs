import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {

    async listarEmpresa() {
        let r = await api.get(`/empresa`)
        return r.data;
    }

    async inserirEmpresa(nome,cnpj,ramo,telefone,estado_cidade,email,senha) {

        let empresa = {
             nm_nome: nome,
             nr_cnpj: cnpj,
             nm_ramo: ramo,
             nr_telefone: telefone, 
             ds_estado_cidade: estado_cidade,
             ds_email: email,
             ds_senha: senha
        };
        
        let r = await api.post(`/empresa`, empresa);
        return r.data;
    }


    async removerEmpresa(id) {
        let r = await api.delete(`/empresa/${id}`)
        return r.data;
    }

    async alterarEmpresa(id,nome,cnpj,ramo,telefone,estado_cidade,email,senha) {

        let empresa = {
            nm_nome: nome,
            nr_cnpj: cnpj,
            nm_ramo: ramo,
            nr_telefone: telefone, 
            ds_estado_cidade: estado_cidade,
            ds_email: email,
            ds_senha: senha
       }
        console.log(empresa)

        let r = await api.put(`/empresa/${id}`, empresa)
        return r.data;
    }

    
    async inserirVaga(profissao,descricao,qualificacao,formacoes,local,salario_a,salario_de,tipodecontrato,beneficios,horario){
        let vaga = {
            ds_profissao: profissao,
            ds_descricao: descricao,
            ds_qualificacao: qualificacao,
            formacoes: formacoes,
            ds_local_trabalho: local,
            ds_salario_a:  salario_a,
            ds_salario_de: salario_de,
            ds_tipo_contratacao: tipodecontrato,
            ds_beneficios: beneficios,
            ds_hora_trabalho: horario
        }

        let r = await api.post(`/vaga`, vaga);
        return r.data;
    }

    async removerVaga(id) {
        let r = await api.delete(`/vaga/${id}`)
        return r.data;
    }
}