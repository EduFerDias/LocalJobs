import Cabecalho from "../../components/comun/cabecalho3";
import Rodape from "../../components/comun/rodapé";
import Conteudo from "./styled";

import Vaga from "../../components/comun/vagas"

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"

import { Link } from 'react-router-dom'

import  { useEffect} from 'react'
import React, { useState} from 'react';

import Api from '../../services/Api';
const api = new Api();

export default function Pagina18(props) {

    
    const [empresa, setEmpresa ] = useState([]);
    const [vaga, setVagas] = useState([]);
    const [empresaconfig, setEmpresaConfig ] = useState([]);
    const [resultado, setResul ] = useState(props.location.state);


    const responsive = {

        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    }


    console.log(resultado.id)
    console.log(empresa)
    console.log(empresaconfig)

    async function ListarVagas() {
        const x = await api.listarVagasIDempresa(resultado.id)
        setVagas(x)
    }

    async function listarEmpresaConfigID(){
        const x = await api.listarEmpresaConfigID(resultado.id)
        setEmpresaConfig(x)
    }

    async function ListarEmpresaID(){
        const x = await api.ListarEmpresaID(resultado.id)
        setEmpresa(x)
    }


    useEffect(() => {
        ListarEmpresaID();
        ListarVagas();
        listarEmpresaConfigID();
    }, []);



  return (
    <Conteudo>
        <Cabecalho />
        <div class="conteudo-detalhes">
            <div class="info-dtl">
            <div class="athena-dtl">
                <div class="nome-empresa-dtl">
                    <div class="logo-empr-dtl">
                        <img src="" alt="" />
                    </div>
                        <div class="titulo-empr-dtl">{empresa.nm_nome}</div>
                </div>

                <div class="titulo-athena-dtl">
                <div class="tit-dtl">Informações Gerais</div>
                </div>

                <div class="box-athena-dtl">
                <div class="ramo-dtl">
                    <b>Ramo:</b> {empresa.nm_ramo}
                </div>
                <div class="porte-dtl">
                    <b>Porte:</b> {empresaconfig.ds_porte}
                </div>
                <div class="nmr-func-dtl">
                    <b>Número de Funcionários:</b> {empresaconfig.qtd_funcionarios}
                </div>
                <div class="local-dtl">
                    <b>Local:</b> {empresa.ds_estado_cidade}
                </div>
                <div class="site-dtl">
                    <b>Site:</b> {empresaconfig.ds_site}
                </div>
                <div class="cnpj-dtl">
                    <b>CNPJ:</b> {empresa.nr_cnpj}
                </div>
                <div class="img-athena-dtl">
                    <div class="img-athena">
                    <div class="lkd-dtl">
                        <img src="./assets/images/Pagina18/LinkedIn.png" alt="" />
                        <div class="lkd-txt"> {empresaconfig.ds_linkdin_empresa} </div>
                    </div>
                    <div class="twitter-dtl">
                        <img src="./assets/images/Pagina18/Twitter.png" alt="" />
                        <div class="tt-txt">{empresaconfig.ds_twitter_empresa}</div>
                    </div>
                    <div class="insta-dtl">
                        <img src="./assets/images/Pagina18/Instagram Circle.png" alt="" />
                        <div class="int-txt">{empresaconfig.ds_instagram_empresa}</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="desc-dtl">
                <div class="desc-tit-dtl">Descrição</div>
                <div class="desc-empr-dtl"> 
                     {empresaconfig.ds_descricao_empresa}
               </div>
            </div>

            <div class="msg-dtl">
                <div class="cima-msg-dtl">
                    <div class="bt-env-curr-dlt">
                        <button class="bt-env">
                            <img src="./assets/images/Pagina18/Send File.png" alt="" />{" "}
                            Enviar Currículo
                        </button>
                    </div>

                    <div class="ou-dtl">
                        <b>ou</b>
                    </div>

                    <div class="linkd-bt-dtl">
                        <button class="linkd-bt">
                            <img src="./assets/images/Pagina18/LinkedIn.png" alt="" />
                        </button>
                    </div>
                </div>

                <div class="msg-titulo-dtl">
                    <div class="msg-tit-dtl">
                        <b>Mensagem</b>
                    </div>
                </div>

                <div class="box-msg-dtl">
                    <div class="msg-box1-dtl">
                        <div class="img-box-msg-dtl">
                        <img src="./assets/images/Pagina18/Group 8.png" alt="" />
                        </div>
                        <div class="tit-empr-dtl">
                        <b>{empresa.nm_nome}</b>
                        </div>
                    </div>

                    <div class="msg-box2-dtl">
                        <div class="input-env-msg-dtl">
                            <input
                                class="env-msg-input"
                                placeholder="Enviar Mensagem"
                                type="text"
                            />

                        </div>

                        <div class="img-seta-msg-dtl">    
                            <img src="./assets/images/Pagina18/Paper Plane.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>

            </div>

            <div class="carrossel-dtl">
            <div class="tit-csl-dtl">
                <div class="tit-csl">7 vagas no(a) Athena Ti</div>
            </div>
            
            <Carousel 
                        responsive={responsive}
            >

                {vaga.map(item => 
                    <Vaga
                        descricao={item.ds_descricao} 
                        cidade={item.ds_local_trabalho} 
                        profissao={item.ds_profissao}
                        salario={item.ds_salario_de}
                        salarioa={item.ds_salario_a}
                        id={item.id_empresa}
                        idvaga={item.id_vaga} 
                        formacao={item.ds_formacao}
                        qualificacao={item.ds_qualificacao}
                        tipocontrato={item.ds_tipo_contratacao}
                        beneficios={item.ds_beneficios}
                        hora={item.ds_hora_trabalho}
                        bt_empresa={true}
                    />
                )}


            </Carousel>


        </div>
      </div>
      <Rodape />
    </Conteudo>
  );
}
