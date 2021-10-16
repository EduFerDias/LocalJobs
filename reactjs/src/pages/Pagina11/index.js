import Cabecalho3 from '../../components/comun/cabecalho3';
import Rodape from '../../components/comun/rodapé'
import Conteudo from './Style'
import Searchbar from '../../components/comun/SearchBar';

import Carousel from 'react-multi-carousel';
import UserBox from "../../components/comun/UserBox";
import "react-multi-carousel/lib/styles.css"
import { useState,useEffect } from 'react'


export default function Pagina11 (){

    const [empresa, setEmpresa] = useState([]);

    const responsive = {

        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    }

    function listar() {
        const Boxes = [
            {empresa:"Marie Soluções tecnológicas",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
            {empresa:"Padoca do Tobias",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
            {empresa:"St. Louis Studios",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
        ]
    
    setEmpresa(Boxes);
    }

    
    useEffect(() => {
        listar();
    });


    return(
        <Conteudo>
                <Cabecalho3 />
                
        <div class="f10-textofiltro">Pesquise por área e<br/>cidade especifica</div>
       <Searchbar />

        <div class="f10-areas">
            <div class="f10-filtro1">Empresas de diversas áreas</div>

                <Carousel 
                    responsive={responsive}
                    infinite={true}
                >

                    {empresa.map(item => 
                            <UserBox empresa={item.empresa != null && item.empresa.length > 25 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={true}/>
                    )}

                </Carousel>;

            <div class="f10-filtro1">Pessoas de diversas áreas</div>

                <Carousel 
                    responsive={responsive}
                    infinite={true}
                >

                    {empresa.map(item => 
                            <UserBox empresa={item.empresa != null && item.empresa.length > 25 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={true}/>
                    )}

                </Carousel>

            
            <div class="f10-filtro1">Empresas de diversas áreas</div>

                <Carousel 
                    responsive={responsive}
                    infinite={true}
                >

                    {empresa.map(item => 
                            <UserBox empresa={item.empresa != null && item.empresa.length > 25 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={true}/>
                    )}

                </Carousel>


        </div> 

        <Rodape />
    </Conteudo>

    );
}