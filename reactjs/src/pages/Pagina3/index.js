import { Link } from "react-router-dom";
import Logo2 from "../../components/comun/Logo2";
import Conteudo from "./Style"
import Cabecalho2 from "../../components/comun/cabecalho1";


import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

import Api from '../../services/Api';
const api = new Api();


export default function Pagina3(){

    const [empresa, setEmpresa ] = useState([]);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [nome, setNome] = useState('');
    const [ramo, setRamo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [estado_cidade, setEstadoCidade] = useState('');


    console.log(nome,cnpj,ramo,telefone,estado_cidade,email,senha)

    async function inserirEmpresa() {
        let x = await api.inserirEmpresa(nome,cnpj,ramo,telefone,estado_cidade,email,senha)
        console.log(x)
        toast.success('Conta Empresarial Criada.')  
    }


    return(
        <Conteudo>
            <Cabecalho2 />
            <div class="corpo">
                <div class="form">
                    <Logo2 />
                    <form>
                        <input type="text" value={ nome } onChange={e => setNome(e.target.value)} placeholder="Empresa"/>
                        <input type="text" value={ cnpj } onChange={e => setCNPJ(e.target.value)} placeholder="CNPJ" />

                        <div class="f-double">
                            <span class="select-custom">
                                <select name="" value={ ramo } onChange={e => setRamo(e.target.value)} id="" >
                                    <option value="Todas áreas" selected>Todas áreas</option>
                                    <option value="Alimentos e Bebidas">Alimentos e Bebidas </option>
                                    <option value="Arte e Antiguidades">Arte e Antiguidades </option>
                                    <option value="Artigos Religiosos">Artigos Religiosos </option>
                                    <option value="Assinaturas e Revistas">Assinaturas e Revistas </option>
                                    <option value="Automóveis e Veículos">Automóveis e Veículos </option>
                                    <option value="Bebês e Cia">Bebês e Cia </option>
                                    <option value="Blu-Ray">Blu-Ray </option>
                                    <option value="Brinquedos e Games">Brinquedos e Games </option>
                                    <option value="Casa e Decoração">Casa e Decoração </option>
                                    <option value="CDs e DVDs">CDs e DVDs </option>
                                    <option value="Colecionáveis">Colecionáveis </option>
                                    <option value="Compras Coletivas">Compras Coletivas </option>
                                    <option value="Construção e Ferramentas">Construção e Ferramentas </option>
                                    <option value="Cosméticos e Perfumaria">Cosméticos e Perfumaria</option> 
                                    <option value="Cursos e Educação">Cursos e Educação </option>
                                    <option value="Discos de Vinil">Discos de Vinil </option>
                                    <option value="Distribuição de Jornais">Distribuição de Jornais</option>
                                    <option value="Eletrodomésticos">Eletrodomésticos </option>
                                    <option value="Eletrônicos">Eletrônicos </option>
                                    <option value="Emissoras">Emissoras </option>
                                    <option value="Empregos">Empregos </option>
                                    <option value="Telemarketing">Telemarketing </option>
                                    <option value="Esporte e Lazer">Esporte e Lazer </option>
                                    <option value="Cestas e Presentes">Cestas e Presentes </option>
                                    <option value="Fotografia">Fotografia </option>
                                    <option value="Instituições Religiosas">Instituições Religiosas</option>  
                                    <option value="Indústria e Comércio">Indústria e Comércio</option>
                                    <option value="Infláveis Promocionais">Infláveis Promocionais</option>
                                    <option value="Informática">Informática</option>
                                    <option value="Ingressos">Ingressos</option>
                                    <option value="Instrumentos Musicais">Instrumentos Musicais</option>
                                    <option value="Joalheria">Joalheria</option>
                                    <option value="Lazer">Lazer</option>
                                    <option value="Livros">Livros</option>
                                    <option value="Moda e Acessórios">Moda e Acessórios</option>
                                    <option value="Música Digital">Música Digital</option>
                                    <option value="Natal">Natal</option>
                                    <option value="Negócios e Oportunidades">Negócios e Oportunidades</option>
                                    <option value="Serviços de Avaliação">Serviços de Avaliação</option>
                                    <option value="Papelaria e Escritório">Papelaria e Escritório</option>
                                    <option value="Páscoa">Páscoa</option>
                                    <option value="Pet Shop">Pet Shop</option>
                                    <option value="Saúde">Saúde</option>
                                    <option value="Serviço Advocaticios">Serviço Advocaticios</option>
                                    <option value="Distribuição de Jornais">Distribuição de Jornais</option>
                                    <option value="Serviços Administrativos">Serviços Administrativos</option>
                                    <option value="Serviços Artísticos">Serviços Artísticos</option>
                                    <option value="Serviços de Abatedouros">Serviços de Abatedouros</option>
                                    <option value="Serviços de Aeroportos">Serviços de Aeroportos</option>
                                    <option value="Serviços de Agências">Serviços de Agências</option>
                                    <option value="Serviços de Aluguel">Serviços de Aluguel</option>
                                    <option value="Serviços de Armazenagem">Serviços de Armazenagem</option>
                                    <option value="Serviços de Assessorias">Serviços de Assessorias</option>
                                    <option value="Serviços de Assistência Técnica ">Serviços de Assistência Técnica </option>
                                    <option value="Serviços de Associações">Serviços de Associações</option>
                                    <option value="Serviços de Bancos de Sangue">Serviços de Bancos de Sangue</option>
                                    <option value="Serviços de Bibliotecas">Serviços de Bibliotecas</option>
                                    <option value="Serviços de Cartórios">Serviços de Cartórios</option>
                                    <option value="Serviços de Casas Lotéricas">Serviços de Casas Lotéricas</option>
                                    <option value="Serviços de Confecções">Serviços de Confecções</option>
                                    <option value="valor2">Serviços de Consórcios</option>
                                    <option value="valor2">Serviços de Consultorias</option>
                                    <option value="valor2">Serviços de Cooperativas</option>
                                    <option value="valor2">Serviços de Despachante</option>
                                    <option value="valor2">Serviços de Engenharia</option>
                                    <option value="valor2">Serviços de Estacionamentos</option>
                                    <option value="valor2">Serviços de Estaleiros</option>
                                    <option value="valor2">Serviços de Importação</option>
                                    <option value="valor2">Serviços de Geólogos</option>
                                    <option value="valor2">Serviços de joalheiros</option>
                                    <option value="valor2">Serviços de Leiloeiros</option>
                                    <option value="valor2">Serviços de limpeza</option>
                                    <option value="valor2">Serviços de Loja de Conveniência</option>
                                    <option value="valor2">Serviços de Mão de Obra</option>
                                    <option value="valor2">Serviços de Órgão Públicos</option>
                                    <option value="valor2">Serviços de Pesquisas</option>
                                    <option value="valor2">Serviços de Portos</option>
                                    <option value="valor2">Serviços de Saúde</option>
                                    <option value="valor2">Serviços de Seguradoras</option>
                                    <option value="valor2">Serviços de Segurança</option>
                                    <option value="valor2">Serviços de Sinalização</option>
                                    <option value="valor2">Serviços de Sindicatos </option>
                                    <option value="valor2">Serviços de Traduções</option>
                                    <option value="valor2">Serviços de Transporte</option>
                                    <option value="valor2">Serviços de Utilidade Pública</option>
                                    <option value="valor2">Serviços em Agricultura</option>
                                    <option value="valor2">Serviços em Alimentação</option>
                                    <option value="valor2">Serviços em Arte</option>
                                    <option value="valor2">Serviços em Cine / Foto / Som</option>
                                    <option value="valor2">Serviços em Comunicação</option>
                                    <option value="valor2">Serviços em Construção</option>
                                    <option value="valor2">Serviços em Ecologia</option>
                                    <option value="valor2">Serviços em Eletroeletrônica</option>
                                    <option value="valor2">Serviços em Festas / Eventos</option>
                                    <option value="valor2">Serviços em Informática</option>
                                    <option value="valor2">Serviços em Internet</option>
                                    <option value="valor2">Serviços em Jóias</option>
                                    <option value="valor2">Serviços em Telefonia</option>
                                    <option value="valor2">Serviços em Veículos</option>
                                    <option value="valor2">Serviços Financeiros</option>
                                    <option value="valor2">Serviços Funerários</option>
                                    <option value="valor2">Serviços Gerais</option>
                                    <option value="valor2">Serviços Editoriais</option>
                                    <option value="valor2">Serviços para Animais</option>
                                    <option value="valor2">Serviços para Deficientes</option>
                                    <option value="valor2">Serviços para Escritórios</option>
                                    <option value="valor2">Serviços para Roupas</option>
                                    <option value="valor2">Serviços Socias</option>
                                    <option value="valor2">Shopping Centers</option>
                                    <option value="valor2">Tabacaria</option>
                                    <option value="valor2">Tarifas Bancárias</option>
                                    <option value="valor2">Tarifas Telefônicas</option>
                                    <option value="valor2">Telefonia</option>
                                    <option value="valor2">Turismo</option>
                                </select>
                            </span>
                            <input type="text" value={ telefone } onChange={e => setTelefone(e.target.value)} placeholder="Telefone" class="tele"/> 
                        </div>

                        <input type="text" value={ estado_cidade } onChange={e => setEstadoCidade(e.target.value)} placeholder="Estado - Cidade"/>
                        <input type="text" value={ email } onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        <input type="password" value={ senha } onChange={e => setSenha(e.target.value)} placeholder="Senha"/> 
                        <input type="password" placeholder="Confirmar senha"/> 
                        {/* <Link to="/page10"> */}

                            <button class="button" onClick={ inserirEmpresa }>Cadastrar</button>
                            
                        {/* </Link> */}
                    </form>
                    <div class="f1-conta">
                        Já possui conta? &nbsp; <span>faça o login</span>
                        <div class="sobre">Sobre nós</div>
                    </div>

                </div>
            </div>
        </Conteudo>
    );

}