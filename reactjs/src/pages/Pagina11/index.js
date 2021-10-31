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
    const [vaga, SetVagas] = useState([]);


    const responsive = {

        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    }

    const area = empresa.filter(e => e.nm_ramo == "Informática")

    const teste = empresa.filter(item => item.id_empresa == vaga.id_empresa )

    async function listarVagasEmpresa() {
                        
        const a = await api.listarEmpresa();
        const x = await api.listarVagas();
        setEmpresa(a)
        SetVagas(x)
    }


    useEffect(() => {
        listarVagasEmpresa();
    });

    return(
        <Conteudo>
                <Cabecalho3 />
                
        <div class="f10-textofiltro">Pesquise por área e<br/>cidade especifica</div>
       <Searchbar />

        <div class="f10-areas">
            <div class="f10-filtro1">Vagas de diversas áreas</div>

                <Carousel 
                    responsive={responsive}
                    infinite={true}
                >
                    {teste.filter(item => 
                        
                            <UserBox 
                            key={item.id_empresa}
                            empresa={item.nm_nome != null && item.nm_nome.length > 25 ?item.nm_nome.substr(0, 15) + '...' :item.nm_nome} 
                            cidade={item.ds_estado_cidade} 
                            area={item.nm_ramo} 
                            salario={item.ds_salario_de}
                            profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao}
                            bt_empresa={true}
                            />

                    )}

                </Carousel>

            <div class="f10-filtro1">Vagas de diversas áreas</div>

                <Carousel 
                    responsive={responsive}
                    infinite={true}
                >

                {empresa.map(item => 
                            <UserBox 
                            empresa={item.nm_nome != null && item.nm_nome.length > 25 ?item.nm_nome.substr(0, 15) + '...' :item.nm_nome} 
                            cidade={item.ds_estado_cidade} 
                            area={item.nm_ramo} 
                            salario={item.salario}
                            profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao}
                            bt_empresa={true}/>
                    )}

                </Carousel>

            
            <div class="f10-filtro1">Empresas do ramo da Informática</div>

                <Carousel 
                    responsive={responsive}
                    infinite={true}
                >
                    
                    {area.map(item => 
                            <UserBox 
                            empresa={item.nm_nome != null && item.nm_nome.length > 25 ?item.nm_nome.substr(0, 15) + '...' :item.nm_nome} 
                            cidade={item.ds_estado_cidade} 
                            area={item.nm_ramo}
                            salario={item.salario}
                            profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao}
                            bt_empresa={true}/>
                    )}

                </Carousel>


        </div> 

        <Rodape />
    </Conteudo>

    );
}