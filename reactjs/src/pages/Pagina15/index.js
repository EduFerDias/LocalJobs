import Conteudo from "./style";
import Cabecalho from '../../components/comun/cabecalho3'
import Rodape from '../../components/comun/rodapé'

import  { useEffect} from 'react'
import React, { useState, useRef  } from 'react';
import { useHistory } from 'react-router-dom'

import Api from '../../services/Api';
const api = new Api();





export default function Pagina15(props){

    const [vaga, setVagas ] = useState(props.location.state);

    const idvagas = vaga.idvaga
    const empresa = vaga.id

    console.log(vaga)

    console.log(empresa)
    console.log(idvagas)

    async function ListarVagas() {
        const x = await api.listarVagasID(idvagas,empresa)
        setVagas(x)
    }


    return(
    <Conteudo>
        <Cabecalho />
        <div class="container">
            <div class="cabecalho"> 
                <div class="cab-esquerda">
                    <div class="imagem-cabecalho">
                        <img src="./assets/images/Pagina15/imagemempresa.png" alt="asda"/>
                    </div>
                    <div class="informacoes-usuario">
                        <p class="nm">{vaga.profissao}</p>
                        <p class="pr">Nome Empresa | Estado - Cidade</p>
                    </div>
                </div>
                <div class="email-telefone">
                    <div class="et">usuário@gmail.com</div>
                    <div class="et">11 - 99999-9999</div>
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
                                <p>De R$ {vaga.salario} a R$ {vaga.salarioa}</p>
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
                                <p><span class="box-negrito">Nome:</span> Athena </p>
                                <p><span class="box-negrito">Ramo:</span> TI </p>
                                <p><span class="box-negrito">Descrição:</span> Fábrica de móveis </p>
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