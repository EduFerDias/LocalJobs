import Conteudo from "./style";
import Cabecalho from '../../components/comun/cabecalho3'
import Rodape from '../../components/comun/rodapé'

import { Link } from 'react-router-dom'

import  { useEffect} from 'react'
// import { useHistory } from 'react-router-dom'
// import {useRef} from 'react';


import React, { useState } from 'react';

import Api from '../../services/Api';
import { toast, ToastContainer } from "react-toastify";
const api = new Api();





export default function Pagina15(props){

    const [vagas, setVagas ] = useState([]);
    const [empresa, setEmpresa ] = useState([]);
    const [resultado, SetResul] = useState(props.location.state)



    let id = Number(resultado.id)



    async function ListarEmpresa(){
        console.log(id)
        let x = await api.ListarEmpresaID(id)
        setEmpresa(x)
    }

    useEffect(() =>{
        ListarEmpresa();
    }, [])

    useEffect(() => {
        console.log(id)
    })


    return(
    <Conteudo>
        <Cabecalho />
        <ToastContainer limit={5}/>
        <div class="container">
            <div class="cabecalho"> 
                <div class="cab-esquerda">
                    <div class="imagem-cabecalho">
                        <img src="./assets/images/Pagina15/imagemempresa.png" alt="asda"/>
                    </div>
                    <div class="informacoes-usuario">
                        <p class="nm">{resultado.profissao}</p>
                            <p class="pr">{empresa.nm_nome} | {empresa.ds_estado_cidade}</p>
                        
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

                            <div class="enviar-email">
                                Enviar Email 
                            </div>
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
                                <h1>Horas trabalhadas por dia:</h1>
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