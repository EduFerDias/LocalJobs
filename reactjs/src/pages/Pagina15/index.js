import Conteudo from "./style";
import Cabecalho from '../../components/comun/cabecalho3'
import Rodape from '../../components/comun/rodapé'

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

    let vaga = props.location.state;

    const idvagas = vaga.idvaga
    const idempresa = vaga.id

    console.log(vagas)
    console.log(idempresa)
    console.log(idvagas)
    console.log(empresa)

    async function ListarVagas() {
        let x = await api.listarVagasID(16, 5)
        toast.success(x)
        setVagas(x)
    }
    async function ListarEmpresa(){
        let x = await api.ListarEmpresaID(5)
        setEmpresa(x)
    }

    useEffect(() =>{
        ListarVagas();
        ListarEmpresa();
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
                        <p class="nm">{vaga.profissao}</p>
                        <p class="pr">{empresa.nm_nome} | {empresa.ds_estado_cidade}</p>
                    </div>
                </div>
                <div class="email-telefone">
                    <div class="et">usuário@gmail.com</div>
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
                                    {vaga.descricao}
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Qualificação:</h1>
                                <p>
                                    {vaga.qualificacao}
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Formação:</h1>
                                <p>
                                    {vaga.formacao}
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Local de trabalho:</h1>
                                <p>
                                    {vaga.cidade}
                                </p>
                            </div>
                        </div>
                        <div class="esquerda-baixo">
                            <div class="div-mensagem">
                                <h1>Mensagem</h1>
                                <div class="box-mensagem">
                                    <div class="usuario-chat">
                                        <img src="./assets/images/Pagina15/usuarioempresa.png" alt="img-chat"/>
                                        <h1>Empresa</h1>
                                    </div>
                                    <div class="box-mensagem-baixo">
                                        <input type="text" placeholder="Enviar Mensagem"/>
                                        <img src="./assets/images/Pagina15/enviar.png" alt="enviar"/>                   
                                    </div>            
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div class="paineis-direita">
                        <div class="descricao-direita">
                            <div class="caracteristicas-direita">
                                <h1>Salário:</h1>
                                <p>De R$ {vaga.salariode} a R$ {vaga.salarioa}</p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Tipo de Contratação:</h1>
                                <p>{vaga.tipocontrato}</p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Benefícios:</h1>
                                <p>{vaga.beneficios}</p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Horas trabalhadas por dia:</h1>
                                <p>{vaga.hora}</p>
                            </div>
                        </div>

                        <div class="dados-empresa">
                            <h1>Dados da Empresa</h1>
                            <div class="box-dados-empresa">
                                <p><span class="box-negrito">Nome:</span> {empresa.nm_nome} </p>
                                <p><span class="box-negrito">Ramo:</span> {empresa.nm_ramo} </p>
                            </div>
                        </div>

                        <div class="enviar-curriculo-linkedin2">
                            Enviar Currículo
                        </div>

                        <div class="enviar-curriculo-linkedin">
                            Enviar Linkedin <img src="./assets/images/Pagina15/linkedin.png" alt="linkedin"/>
                        </div>

                    </div>
                </div>

            </div>
            
            
        </div>
        <Rodape />
    </Conteudo>    
    );
}