import Conteudo from "./Style";
import Cabecalho from "../../components/comun/cabecalho3";
import Rodape from "../../components/comun/rodapé";
import Searchbar from "../../components/comun/SearchBar";

import Carousel from 'react-multi-carousel';
import UserBox from "../../components/comun/UserBox";
import "react-multi-carousel/lib/styles.css"

const responsive = {

    desktop:{
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    }
}

const Boxes = [
    {empresa:"Pedri Alonso",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
    {empresa:"Louis Leclerc",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
    {empresa:"Maximilan Verstappen",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
    {empresa:"Pedri Alonso",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
    {empresa:"Louis Leclerc",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
    {empresa:"Maximilan Verstappen",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
]



export default function Pagina10 (){
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

                    <div class="f10-setas">
                        <div class="f10-boxes">
                            <Carousel 
                                responsive={responsive}
                                draggable={false}
                            >
                                {Boxes.map((item) => {
                                    return(
                                        <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                                    );
                                })};
                            </Carousel>
                        </div>
 
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>

                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                            <Carousel 
                                responsive={responsive}
                                draggable={false}
                            >
                                {Boxes.map ((item) => {
                                    return(
                                        <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                                    );
                                })};
                            </Carousel>
                        </div>
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>
                    
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                            <Carousel 
                                responsive={responsive}
                                draggable={false}
                            >
                                {Boxes.map ((item) => {
                                    return(
                                        <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                                    );
                                })};
                            </Carousel>
                        </div>
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>
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