import { Link } from "react-router-dom";
import Conteudo from "./Style";
import UserBox from "../../components/comun/UserBox";
import Rodape from "../../components/comun/rodapé";
import Searchbar from "../../components/comun/SearchBar";

const Boxes = [
    {empresa:"Pedri Alonso",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
    {empresa:"Louis Leclerc",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
    {empresa:"Maximilan Verstappen",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
]



export default function Pagina10 (){
    return(
        <Conteudo>
            <div class="f10-tudo">
                <div class="f10-cabecario">
                    <div class="f10-parte1">
                        <div class="f10-logo"> <Link to="/"><img src="../../assets/images/pagina 9,10,11,12/f10-logo.png" alt=""/></Link></div>
                        <div class="f10-nome">LocalJobs</div>
                    </div>

                    <div class="f10-parte2">
                        <div class="f10-nome">Empresa</div>
                        <div class="f10-imagem"><img src="../../assets/images/pagina 9,10,11,12/f10-empresa.png" alt="" /></div>
                    </div>
                </div>

                <Searchbar />
                <div class="f10-areas">
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                        {Boxes.map ((item) => {
                            return(
                                <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                            );
                        })};
                        </div>
 
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>

                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                        {Boxes.map ((item) => {
                            return(
                                <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                            );
                        })};
                        </div>
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>
                    
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                        {Boxes.map ((item) => {
                            return(
                                <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                            );
                        })};
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