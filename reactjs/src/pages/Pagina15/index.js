import Conteudo from "./style";
import Cabecalho from '../../components/comun/cabecalho3'
import Rodape from '../../components/comun/rodapé'

import Cookies from "js-cookie";

import  { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


import React, { useState } from 'react';

import Api from '../../services/Api';
import { toast, ToastContainer } from "react-toastify";
const api = new Api();



function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_usu');

    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function Pagina15(props){

    const navigation = useHistory();


    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    let user = usuarioLogado.nome;

    const [vagas, setVagas ] = useState([]);
    const [empresa, setEmpresa ] = useState([]);
    const[empresaconfig, setConig] = useState([]);
    const [resultado, SetResul] = useState(props.location.state)



    let id = Number(resultado.id)

    async function ListarEmpresa(){
        console.log(id)
        let x = await api.ListarEmpresaID(id)
        let y = await api.listarEmpresaConfigID(id);
        setEmpresa(x)
        setConig(y)
    }

    async function enviarEmail(){
       let y = await api.enviarEmail(empresa.ds_email, `Interesse Na sua vaga para: ${resultado.profissao}`, `
            <h2>O candidato ${user} ok eu to ok</h2>
        `)
        toast.success("enviei")
        return y;
    }

    useEffect(() =>{
        ListarEmpresa();
    }, [])



    return(
    <Conteudo>
        <Cabecalho />
        <ToastContainer limit={5}/>
        <div class="container">
            <div class="cabecalho"> 
                <div class="cab-esquerda">
                    <div class="imagem-cabecalho">
                        <img src={empresaconfig.ds_link_imagem} alt="asda"/>
                    </div>
                    <div class="informacoes-usuario">
                        <p class="nm">{resultado.profissao}</p>
                        <Link to={{ pathname: '/empresa', state: empresa.id_empresa } }>
                            <p class="pr">{empresa.nm_nome} | {empresa.ds_estado_cidade}</p>
                        </Link>
                        
                    </div>
                </div>
                <div class="email-telefone">
                    <div class="et">{empresa.ds_email}</div>
                    <div class="et">{empresa.nr_telefone}</div>
                </div>
            </div>

            <div class="painel-central">
                <h1>Dados da vaga</h1>

                <div class="painel-boxes">
                    <div class="paineis-esquerda">
                        <div class="esquerda-cima">
                            <div class="caracteristicas">
                                <h1>Descrição:</h1>
                                <p>
                                    {resultado.descricao}
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Qualificação:</h1>
                                <p>
                                    {resultado.qualificacao}
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Formação:</h1>
                                <p>
                                    {resultado.formacao}
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Local de trabalho:</h1>
                                <p>
                                   {empresa.ds_estado_cidade	}
                                </p>
                            </div>
                        </div>
                        <div class="esquerda-baixo">
                            <div class="dados-empresa">
                                <h1>Dados da Empresa</h1>
                                <div class="box-dados-empresa">
                                    <p><span class="box-negrito">Nome:</span> {empresa.nm_nome} </p>
                                    <p><span class="box-negrito">Ramo:</span> {empresa.nm_ramo} </p>
                                </div>
                            </div>

                            <button onClick={enviarEmail} class="enviar-email">
                                Enviar Email 
                            </button>
                        </div>
                    </div>
                    <div class="paineis-direita">
                        <div class="descricao-direita">
                            <div class="caracteristicas-direita">
                                <h1>Salário:</h1>
                                <p>De R${resultado.salario}  a R${resultado.salariode} </p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Tipo de Contratação:</h1>
                                <p>
                                    {resultado.tipocontrato}
                                </p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Benefícios:</h1>
                                <p>
                                    {resultado.beneficios}
                                </p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Carga horária diaria:</h1>
                                <p>
                                    {resultado.hora}
                                </p>
                            </div>
                        </div>
                    </div>

                
                    
                </div>

            </div>
            
            
        </div>
        <Rodape />
    </Conteudo>    
    );
}