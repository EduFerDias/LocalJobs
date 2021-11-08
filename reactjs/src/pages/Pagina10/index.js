import Conteudo from "./Style";
import Cabecalho from "../../components/comun/cabecalho3";
import Rodape from "../../components/comun/rodapé";
import Searchbar from "../../components/comun/SearchBar";

import Carousel from 'react-multi-carousel';
import UserBox from "../../components/comun/UserBox";
import "react-multi-carousel/lib/styles.css"
import { useState, useEffect } from 'react'

import Api from "../../services/Api";
let api = new Api();


export default function Pagina10 (){
    const [usuario, setUsuario] = useState([]);

    const responsive = {

        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        }
    }
    async function listar() {

        let Boxes = await api.listarUsu()
        console.log(Boxes)
        console.log(typeof(Boxes))
        setUsuario(Boxes);
    }

    useEffect(() => {
        listar();
      }, []);

    return(
        <Conteudo>
            <div class="f10-tudo">
                <Cabecalho/>

                <div class="f10-filtro">
                    <div class="f10-textofiltro">Pesquise por área e<br/>cidade especifica</div>
                    <Searchbar ondeestoy={'pessoal'} pg={true}/>

                </div>

                <div class="f10-areas">
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                        <Carousel 
                            responsive={responsive}
                            infinite={true}
                            draggable={false}
                        >

                            {usuario.map(item => 
                                    <UserBox 
                                        nome={item.nm_nome != null && item.nm_nome.length > 19 ?item.nm_nome.substr(0, 15) + '...' :item.nm_nome} 
                                        cidade={item.ds_estado_cidade} 
                                        area={item.ds_area != null && item.ds_area.length > 7 ?item.ds_area.substr(0,7) + '...' :item.ds_area} 
                                        profissao={item.ds_cargo != null && item.ds_cargo.length > 15 ?item.ds_cargo.substr(0, 15) + '...' :item.ds_cargo} 
                                        bt_empresa={false}
                                        info={item.id_pessoal}
                                    />
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