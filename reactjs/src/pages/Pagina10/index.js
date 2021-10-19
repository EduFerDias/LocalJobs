import Conteudo from "./Style";
import Cabecalho from "../../components/comun/cabecalho3";
import Rodape from "../../components/comun/rodapé";
import Searchbar from "../../components/comun/SearchBar";

import Carousel from 'react-multi-carousel';
import UserBox from "../../components/comun/UserBox";
import "react-multi-carousel/lib/styles.css"
import { useState,useEffect } from 'react'


export default function Pagina10 (){
    const [usuario, setUsuario] = useState([]);

    const responsive = {

        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    }
    function listar() {
        const Boxes = [
            {empresa:"Pedri Alonso",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
            {empresa:"Louis Leclerc",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
            {empresa:"Maximilan Verstappen",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
            {empresa:"Pedri Alonso",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
            {empresa:"Louis Leclerc",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
            {empresa:"Maximilan Verstappen",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
        ]

        setUsuario(Boxes);
    }

    useEffect(() => {
        listar();
      });

    return(
        <Conteudo>
            <div class="f10-tudo">
                <Cabecalho/>

                <div class="f10-filtro">
                    <div class="f10-textofiltro">Pesquise por área e<br/>cidade especifica</div>
                    <Searchbar/>

                </div>

                <div class="f10-areas">
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                        <Carousel 
                            responsive={responsive}
                            infinite={true}
                            draggable={false}
                        >

                            {usuario.map(item => 
                                    <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                            )}

                        </Carousel>;

                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                        <Carousel 
                            responsive={responsive}
                            infinite={true}
                            draggable={false}
                        >

                            {usuario.map(item => 
                                    <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                            )}

                        </Carousel>

                        
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>


                        <Carousel 
                            responsive={responsive}
                            infinite={true}
                            draggable={false}
                        >

                            {usuario.map(item => 
                                    <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                            )}

                        </Carousel>
                            

                </div> 
                <Rodape/>
            </div>

        </Conteudo>
    );
}

/*
                        {Boxes.map ((item) => {
                            return(
                                <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                            );
                        })};
                        */