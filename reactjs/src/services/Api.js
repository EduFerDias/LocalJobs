import axios from 'axios'
const api = axios.create({
    baseURL: 'https://loca1jobs.herokuapp.com'
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

    async listarVagasID(idempresa,id) {
        let r = await api.get(`/vaga/${idempresa}/${id}`)
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

    async alterarEmpresa(id,nome,ramo,telefone) {

        let empresa = {
            nm_nome: nome,
            nm_ramo: ramo,
            nr_telefone: telefone, 
       }
        console.log(empresa)

        let r = await api.put(`/empresa/${id}`, empresa)
        return r.data;
    }
    
    async InserirConfigEmpresa(id,descricao,linkdin,insta,twitter,porte,site,funcionarios) {

        let empresa = {
            ds_descricao_empresa: descricao,
            ds_linkdin_empresa: linkdin,
            ds_instagram_empresa: insta,
            ds_twitter_empresa: twitter,
            ds_porte: porte,
            ds_site: site,
            qtd_funcionarios: funcionarios
       }
        console.log(empresa)

        let r = await api.put(`/empresa/${id}`, empresa)
        return r.data;
    }
    
    async inserirVaga(id,profissao,descricao,qualificacao,formacao,local,salario_a,salario_de,tipodecontrato,beneficios,horario){
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

        let r = await api.post(`/vaga/${id}`, vaga);
        return r.data;
    }

    async vagaBaseadaEmArea(area){
        let y = api.get('/empresa', {area})
        let r = await api.get(`/vaga/${y}`)
        return r.data;        
    }

    async EditarVaga(idvaga,idempresa,profissao,descricao,qualificacao,formacoes,local,salario_a,salario_de,tipodecontrato,beneficios,horario){
        let vaga = {
            ds_profissao: profissao,
            ds_descricao: descricao,
            ds_qualificacao: qualificacao,
            ds_formacao: formacoes,
            ds_local_trabalho: local,
            ds_salario_a:  salario_a,
            ds_salario_de: salario_de,
            ds_tipo_contratacao: tipodecontrato,
            ds_beneficios: beneficios,
            ds_hora_trabalho: horario
        }

        let r = await api.put(`/vaga/${idempresa}/${idvaga}`, vaga);
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

    async alterarUsu(id, nome, area, cargo, telefone, estado_cidade, email){
        let env = {
            nome:nome,
            area:area,
            cargo:cargo,
            email:email,
            telefone:telefone,
            estado_cidade:estado_cidade,
            assinatura: false
        }
        let r = await api.put(`/usuario/${id}`, env)
        return r.data;    
    }

    async listarUsu(){
        let r = await api.get(`/usuario`)
        return r.data;
    }
    async buscaUsuId(id){
        let r = await api.get(`/usuario/${id}`)
        return r.data;
    }
    async buscaUsuConfigId(id){
        let r = await api.get(`userconfig/${id}`)
        return r.data;
    }
    async alterarUsuConfig(id, sobre, idioma1, idioma2, idioma3, likedin, instagram, twitter, vaga_interesse1, vaga_interesse2, vaga_interesse3, experiencias, formacoes_academicas){
        let y = {
            sobre: sobre, 
            idioma1: idioma1, 
            idioma2: idioma2, 
            idioma3: idioma3, 
            likedin: likedin, 
            instagram: instagram, 
            twitter: twitter, 
            vaga_interesse1: vaga_interesse1, 
            vaga_interesse2: vaga_interesse2, 
            vaga_interesse3: vaga_interesse3, 
            experiencias: experiencias, 
            formacoes_academicas: formacoes_academicas, 
        }
        let r = await api.put(`userconfig/${id}`, y)
        return r.data;
    }

    async buscaUsu(area, cargo, cidade){

        let s = {
            area:area,
            cargo:cargo,
            cidade:cidade
        }
        let r = await api.get(`/usuario`, s)
        return r.data;
    }
}