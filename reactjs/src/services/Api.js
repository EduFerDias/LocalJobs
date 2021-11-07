import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {

    async listarEmpresa() {
        let r = await api.get(`/empresa`)
        return r.data;
    }

    async ListarEmpresaID(id){
        let r = await api.get(`/empresa/${id}`)
        return r.data;
    }

    async listarEmpresaConfigID(id){
        let r = await api.get(`/empresaconfig/${id}` )
        return r.data;
    }

    async listarVagas() {
        let r = await api.get(`/vaga`)
        return r.data;
    }

    async listarVagasIDempresa(id) {
        let r = await api.get(`/vaga/${id}`)
        return r.data;
    }

    async listarVagasID(id,idempresa) {
        let r = await api.get(`/vaga/${idempresa}/${id}`)
        return r.data.vaga;
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

    
    async inserirVaga(profissao,descricao,qualificacao,formacao,local,salario_a,salario_de,tipodecontrato,beneficios,horario){
        let vaga = {
            ds_profissao: profissao,
            ds_descricao: descricao,
            ds_qualificacao: qualificacao,
            ds_formacao: formacao,
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

    async DeletarVaga(id) {
        let r = await api.delete(`/vaga/${id}`)
        return r.data;
    }

    async login(email, senha){
        let pack = {
            email:email,
            senha:senha
        }

        let r =  await api.post(`/login`, pack)
        return r.data;
    }

    async enviarEmail(email){
        let emailJson = {email:email};
        let r = await api.post(`/esqueceuSenha`, emailJson)
        return r.data;
    }
    async validarCodigo(email, codigoinserido){
        let emailCode = {
            email:email,
            code:codigoinserido
        }
        let r = await api.post(`/validarCodigo`, emailCode);
        return r.data;
    }
    async trocarSenha(email, codigoInserido, novaSenha){
        let change = {
            email:email,
            code:codigoInserido,
            novaSenha:novaSenha
        }
        let r = await api.put(`/resetSenha`, change);
        return r.data;
    }

    async inserirUsuario(nome, area, cargo, telefone, estado_cidade, email, senha, confirmar_senha){
        let env = {
            nome:nome,
            area:area,
            cargo:cargo,
            telefone:telefone,
            estado_cidade:estado_cidade,
            email:email,
            senha:senha,
            confirmar_senha:confirmar_senha,
            assinatura: false
        }
        let r = await api.post(`/usuario`, env)
        return r.data;
    }
    async buscaUsu(area, cargo, cidade){
        let r =  ""
        if(area || cargo || cidade)
            r = await api.put(`/usuario?area=${area}&cargo=${cargo}&cidade=${cidade}`)
        else
            r = await api.put(`/usuario`)
        return r.data;
    }
}