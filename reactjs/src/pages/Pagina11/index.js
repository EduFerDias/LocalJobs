import { Link } from 'react-router-dom';
import Cabecalho3 from '../../components/comun/cabecalho3';
import Rodape from '../../components/comun/rodapé'
import Conteudo from './Style'
import UserBox from '../../components/comun/UserBox';

const Boxes = [
                    {empresa:"Marie Soluções tecnológicas",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Dev Pleno"},
                    {empresa:"Padoca do Tobias",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Suporte"},
                    {empresa:"St. Louis Studios",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Dev Júnior"},
                ]


export default function Pagina11 (){
    return(
        <Conteudo>
                <Cabecalho3 />

        <div class="f10-filtro">
            <div class="f10-textofiltro">Pesquise por área e cidade especifica<br/>cidade especifica</div>
            <div class="f10-pesquisa2">
                <div class="f10-pesquisa">
                    <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-cargo.png" alt=""/></div>

                    <select name="select" >
                        <option value="valor1" selected>Todas áreas</option>
                        <option value="valor2"> </option>
                    </select>
                    <hr size="30" />
                    <input class="f10-cargo" type="search" placeholder="Digite Um Cargo" />
                    <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-localidade.png" alt=""/></div>
                    <hr size="30" />
                    <input class="f10-cidade" type="search" placeholder="Digite Uma Cidade" />
                    <div class="f10-lupa"><Link to="/page12"><img src="../../assets/images/pagina 9,10,11,12/f10-lupa.png" alt=""/></Link></div>
                </div>
            </div>
        </div>

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