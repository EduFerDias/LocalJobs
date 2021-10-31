import Cabecalho from "../../components/comun/cabecalho3";
import Rodape from "../../components/comun/rodapé";
import Conteudo from "./styled";

import Vaga from "../../components/comun/vagas"

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"

import  { useEffect} from 'react'
import React, { useState, useRef  } from 'react';
import { useHistory } from 'react-router-dom'

import Api from '../../services/Api';
const api = new Api();

export default function Pagina18() {

    const responsive = {

        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    }
    const [id, setIdAlterando] = useState(0);
    const [vaga, SetVagas] = useState([]);
    const navigation = useHistory();
    
    async function listarVagas(id) {
        const x = await api.listarVagasID(id);
        SetVagas(x)
    }


    useEffect(() => {
        listarVagas();
    });


  return (
    <Conteudo>
        <Cabecalho />
        <div class="conteudo-detalhes">
            <div class="info-dtl">
            <div class="athena-dtl">
                <div class="nome-empresa-dtl">
                <div class="logo-empr-dtl">
                    <img src="./assets/images/Pagina18/Group 89.png" alt="" />
                </div>
                <div class="titulo-empr-dtl">Athena TI</div>
                </div>

                <div class="titulo-athena-dtl">
                <div class="tit-dtl">Informações Gerais</div>
                </div>

                <div class="box-athena-dtl">
                <div class="ramo-dtl">
                    <b>Ramo:</b> TI, Home Office
                </div>
                <div class="porte-dtl">
                    <b>Porte:</b> Pequeo
                </div>
                <div class="nmr-func-dtl">
                    <b>Número de Funcionários:</b> 6
                </div>
                <div class="local-dtl">
                    <b>Local:</b> São Paulo
                </div>
                <div class="site-dtl">
                    <b>Site:</b> athenati.com.br
                </div>
                <div class="cnpj-dtl">
                    <b>CNPJ:</b> 59.546.515/0001-34
                </div>
                <div class="img-athena-dtl">
                    <div class="img-athena">
                    <div class="lkd-dtl">
                        <img src="./assets/images/Pagina18/LinkedIn.png" alt="" />
                        <div class="lkd-txt">/athenati</div>
                    </div>
                    <div class="twitter-dtl">
                        <img src="./assets/images/Pagina18/Twitter.png" alt="" />
                        <div class="tt-txt">@athenati</div>
                    </div>
                    <div class="insta-dtl">
                        <img
                        src="./assets/images/Pagina18/Instagram Circle.png"
                        alt=""
                        />
                        <div class="int-txt">@athenati</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="desc-dtl">
                <div class="desc-tit-dtl">Descrição</div>
                <div class="desc-empr-dtl">
                Atua com especialização de TI e consultoria
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
                    <b>Athena TI</b>
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
                        infinite={true}
                >

                    {vaga.map(item => 
                        <Vaga 
                        key={item.id_vaga}
                        profissao={item.ds_profissao != null && item.ds_profissao.length > 25 ?item.ds_profissao.substr(0, 15) + '...' :item.ds_profissao} 
                        descricao={item.ds_descricao != null && item.ds_descricao.length > 80 ?item.ds_descricao.substr(0, 15) + '...' :item.ds_descricao} 
                        cidade={item.ds_local_trabalho} 
                        salarioa={item.ds_salario_a}
                        salariode={item.ds_salario_de}
                        />
                    )}

            </Carousel>
        </div>
      </div>
      <Rodape />
    </Conteudo>
  );
}
