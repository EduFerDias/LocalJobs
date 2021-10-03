import Cabecalho3 from '../../components/comun/cabecalho3';
import Rodape from '../../components/comun/rodapé'
import Conteudo from './Style'
import UserBox from '../../components/comun/UserBox';
import Searchbar from '../../components/comun/SearchBar';

const Boxes = [
                    {empresa:"Marie Soluções tecnológicas",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
                    {empresa:"Padoca do Tobias",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
                    {empresa:"St. Louis Studios",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
                ]


export default function Pagina11 (){
    return(
        <Conteudo>
                <Cabecalho3 />

       <Searchbar />

        <div class="f10-areas">
            <div class="f10-filtro1">Empresas de diversas áreas</div>

            <div class="f10-setas">
                <div class="f10-boxes">
                    {Boxes.map ((item) => {
                        return(
                            <UserBox empresa={item.empresa != null && item.empresa.length > 25 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={true}/>
                        );
                    })}
                </div>
                <div class="carousel-controls testimonial-carousel-controls">
                    <div class="prev" onclick="plusSlides(-1)"></div>
                    <div class="next" onclick="plusSlides(1)" ></div>
                </div>
            </div>

            <div class="f10-filtro1">Empresas de diversas áreas</div>

            <div class="f10-setas">
                <div class="f10-boxes">
                    {Boxes.map ((item) => {
                        return(
                            <UserBox empresa={item.empresa != null && item.empresa.length > 25 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={true}/>
                        );
                    })}
                </div>
                <div class="carousel-controls testimonial-carousel-controls">
                    <div class="prev" onclick="plusSlides(-1)" ></div>
                    <div class="next" onclick="plusSlides(1)" ></div>
                </div>
            </div>

            <div class="f10-filtro1">Empresas de diversas áreas</div>

            <div class="f10-setas">
                <div class="f10-boxes">
                    {Boxes.map ((item) => {
                        return(
                            <UserBox empresa={item.empresa != null && item.empresa.length > 25 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={true}/>
                        );
                    })}
                </div>
                <div class="carousel-controls testimonial-carousel-controls">
                    <div class="prev" onclick="plusSlides(-1)" ></div>
                    <div class="next" onclick="plusSlides(1)" ></div>
                </div>
            </div>


        </div> 

        <Rodape />
    </Conteudo>

    );
}