import Cabecalho3 from '../../components/comun/cabecalho3';
import Rodape from '../../components/comun/rodapé'
import Conteudo from './Style'
import Searchbar from '../../components/comun/SearchBar';

import Carousel from 'react-multi-carousel';
import UserBox from "../../components/comun/UserBox";
import "react-multi-carousel/lib/styles.css"

import { useState,useEffect } from 'react'


import Api from '../../services/Api';
const api = new Api();


export default function Pagina11 (){

    const [empresa, setEmpresa ] = useState([]);

    const [vaga, setVagas] = useState([]);

    const [vagaE, setVagae] = useState([])

    const responsive = {

        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    }



    async function listarEmpresa() {          
        const a = await api.listarEmpresa();
        setEmpresa(a)
    }

    async function ListarVagas() {
        const a = await api.listarVagas();
        setVagas(a)
    }

    async function listarVagasEspeci () {
        let e = await api.EmpresaBaseadaemArea('Tarifas Bancárias')
        console.log(e)
        setVagae(e)
    }

    useEffect(() => {
        listarEmpresa();
        ListarVagas();
        listarVagasEspeci();
    }, []);

    return(
        <Conteudo>
                <Cabecalho3 />
                
        <div class="f10-textofiltro">Pesquise por área e<br/>cidade especifica</div>
       <Searchbar ondeestoy={'pessoal'} pg={true}/>

        <div class="f10-areas">
            <div class="f10-filtro1">Vagas de diversas áreas</div>

            <Carousel 
                    responsive={responsive}
                >

                {vaga.map(item => 
                    <UserBox
                        descricao={item.ds_descricao} 
                        cidade={item.ds_local_trabalho != null && item.ds_local_trabalho.lenght > 20 ? item.ds_local_trabalho.substr(0, 20) :item.ds_local_trabalho} 
                        profissao={item.ds_profissao}
                        salario={item.ds_salario_de}
                        salarioa={item.ds_salario_a}
                        id={item.id_empresa}
                        vaga={item.vaga} 
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

            <div class="f10-filtro1">Vagas de diversas áreas</div>

       
            <div class="f10-filtro1">Empresas do ramo da Informática</div>

            {<Carousel 
                    responsive={responsive}
                >

                 {vagaE.map(item => 
                    <UserBox
                        descricao={item.ds_descricao} 
                        cidade={item.ds_local_trabalho != null && item.ds_local_trabalho.lenght > 20 ? item.ds_local_trabalho.substr(0, 20) :item.ds_local_trabalho} 
                        profissao={item.ds_profissao}
                        salario={item.ds_salario_de}
                        salarioa={item.ds_salario_a}
                        id={item.id_empresa}
                        vaga={item.vaga} 
                        idvaga={item.id_vaga}
                        formacao={item.ds_formacao}
                        qualificacao={item.ds_qualificacao}
                        tipocontrato={item.ds_tipo_contratacao}
                        beneficios={item.ds_beneficios}
                        hora={item.ds_hora_trabalho}
                        bt_empresa={true}
                    />
                    
                )} 

            </Carousel>}



        </div> 

        <Rodape />
    </Conteudo>

    );
}