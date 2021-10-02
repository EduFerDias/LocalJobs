import { Link } from "react-router-dom";
import Conteudo from "./Style";
import Rodape from "../../components/comun/rodapé";
import Cabecalho from "../../components/comun/cabecalho3"

export default function Pagina10 (){
    return(
        <Conteudo>
            <div class="f10-tudo">
                <Cabecalho> </Cabecalho>

                <div class="f10-filtro">
                    <div class="f10-textofiltro">Pesquise por área e<br/>cidade especifica</div>
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
                            <div class="f10-lupa"><Link to="/page9"><img src="../../assets/images/pagina 9,10,11,12/f10-lupa.png" alt=""/></Link></div>
                        </div>
                    </div>
                </div>

                <div class="f10-areas">
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>

                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>

                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>

                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>

                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>

                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>
                    
                    <div class="f10-filtro1">Pessoas de diversas áreas</div>

                    <div class="f10-setas">
                        <div class="f10-boxes">
                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>

                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>

                            <div class="f10-box">
                                <div class="f10-fotofiltro"><img src="../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> </div>
                                <div class="f10-texto">
                                    <div class="f10-filtronome">Nome</div>
                                    <div class="f10-cidade">Cidade</div>
                                    <div class="f10-profissao">Profissão<div class="f10-barra">-</div><div class="f10-filtroarea">área</div></div>
                                    <div class="f10-data">04/08/2021</div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-controls testimonial-carousel-controls">
                            <div class="prev" onclick="plusSlides(-1)" ></div>
                            <div class="next" onclick="plusSlides(1)" ></div>
                        </div>
                    </div>
                </div> 

                <Rodape> </Rodape>
            
            </div>

        </Conteudo>
    );
}