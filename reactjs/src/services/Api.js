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

    
}