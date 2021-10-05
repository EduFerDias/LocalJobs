import { Link } from "react-router-dom";
import Conteudo from "./Style";
import Rodape from "../../components/comun/rodapé";
import Cabecalho from "../../components/comun/cabecalho3"

export default function Pagina10 (){
    return(
        <Conteudo>
            <div class="f10-tudo">
                <Cabecalho/>

                <div class="f10-filtro">
                    <div class="f10-textofiltro">Pesquise por área e<br/>cidade especifica</div>
                    <div class="f10-pesquisa2">
                    <div class="f10-pesquisa">

                        <select name="select">
                            <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-cargo.png" alt=""/></div>
                            <option value="valor1" selected>Todas áreas</option>
                            <option value="valor2">Alimentos e Bebidas </option>
                            <option value="valor2">Arte e Antiguidades </option>
                            <option value="valor2">Artigos Religiosos </option>
                            <option value="valor2">Assinaturas e Revistas </option>
                            <option value="valor2">Automóveis e Veículos </option>
                            <option value="valor2">Bebês e Cia </option>
                            <option value="valor2">Blu-Ray </option>
                            <option value="valor2">Brinquedos e Games </option>
                            <option value="valor2">Casa e Decoração </option>
                            <option value="valor2">CDs e DVDs </option>
                            <option value="valor2">Colecionáveis </option>
                            <option value="valor2">Compras Coletivas </option>
                            <option value="valor2">Construção e Ferramentas </option>
                            <option value="valor2">Cosméticos e Perfumaria</option> 
                            <option value="valor2">Cursos e Educação </option>
                            <option value="valor2">Discos de Vinil </option>
                            <option value="valor2">Distribuição de Jornais</option>
                            <option value="valor2">Eletrodomésticos </option>
                            <option value="valor2">Eletrônicos </option>
                            <option value="valor2">Emissoras </option>
                            <option value="valor2">Empregos </option>
                            <option value="valor2">Telemarketing </option>
                            <option value="valor2">Esporte e Lazer </option>
                            <option value="valor2">Cestas e Presentes </option>
                            <option value="valor2">Fotografia </option>
                            <option value="valor2">Instituições Religiosas</option>  
                            <option value="valor2">Indústria e Comércio</option>
                            <option value="valor2">Infláveis Promocionais</option>
                            <option value="valor2">Informática</option>
                            <option value="valor2">Ingressos</option>
                            <option value="valor2">Instrumentos Musicais</option>
                            <option value="valor2">Joalheria</option>
                            <option value="valor2">Lazer</option>
                            <option value="valor2">Livros</option>
                            <option value="valor2">Moda e Acessórios</option>
                            <option value="valor2">Música Digital</option>
                            <option value="valor2">Natal</option>
                            <option value="valor2">Negócios e Oportunidades</option>
                            <option value="valor2">Serviços de Avaliação</option>
                            <option value="valor2">Papelaria e Escritório</option>
                            <option value="valor2">Páscoa</option>
                            <option value="valor2">Pet Shop</option>
                            <option value="valor2">Saúde</option>
                            <option value="valor2">Serviço Advocaticios</option>
                            <option value="valor2">Distribuição de Jornais</option>
                            <option value="valor2">Serviços Administrativos</option>
                            <option value="valor2">Serviços Artísticos</option>
                            <option value="valor2">Serviços de Abatedouros</option>
                            <option value="valor2">Serviços de Aeroportos</option>
                            <option value="valor2">Serviços de Agências</option>
                            <option value="valor2">Serviços de Aluguel</option>
                            <option value="valor2">Serviços de Armazenagem</option>
                            <option value="valor2">Serviços de Assessorias</option>
                            <option value="valor2">Serviços de Assistência Técnica </option>
                            <option value="valor2">Serviços de Associações</option>
                            <option value="valor2">Serviços de Bancos de Sangue</option>
                            <option value="valor2">Serviços de Bibliotecas</option>
                            <option value="valor2">Serviços de Cartórios</option>
                            <option value="valor2">Serviços de Casas Lotéricas</option>
                            <option value="valor2">Serviços de Confecções</option>
                            <option value="valor2">Serviços de Consórcios</option>
                            <option value="valor2">Serviços de Consultorias</option>
                            <option value="valor2">Serviços de Cooperativas</option>
                            <option value="valor2">Serviços de Despachante</option>
                            <option value="valor2">Serviços de Engenharia</option>
                            <option value="valor2">Serviços de Estacionamentos</option>
                            <option value="valor2">Serviços de Estaleiros</option>
                            <option value="valor2">Serviços de Importação</option>
                            <option value="valor2">Serviços de Geólogos</option>
                            <option value="valor2">Serviços de joalheiros</option>
                            <option value="valor2">Serviços de Leiloeiros</option>
                            <option value="valor2">Serviços de limpeza</option>
                            <option value="valor2">Serviços de Loja de Conveniência</option>
                            <option value="valor2">Serviços de Mão de Obra</option>
                            <option value="valor2">Serviços de Órgão Públicos</option>
                            <option value="valor2">Serviços de Pesquisas</option>
                            <option value="valor2">Serviços de Portos</option>
                            <option value="valor2">Serviços de Saúde</option>
                            <option value="valor2">Serviços de Seguradoras</option>
                            <option value="valor2">Serviços de Segurança</option>
                            <option value="valor2">Serviços de Sinalização</option>
                            <option value="valor2">Serviços de Sindicatos </option>
                            <option value="valor2">Serviços de Traduções</option>
                            <option value="valor2">Serviços de Transporte</option>
                            <option value="valor2">Serviços de Utilidade Pública</option>
                            <option value="valor2">Serviços em Agricultura</option>
                            <option value="valor2">Serviços em Alimentação</option>
                            <option value="valor2">Serviços em Arte</option>
                            <option value="valor2">Serviços em Cine / Foto / Som</option>
                            <option value="valor2">Serviços em Comunicação</option>
                            <option value="valor2">Serviços em Construção</option>
                            <option value="valor2">Serviços em Ecologia</option>
                            <option value="valor2">Serviços em Eletroeletrônica</option>
                            <option value="valor2">Serviços em Festas / Eventos</option>
                            <option value="valor2">Serviços em Informática</option>
                            <option value="valor2">Serviços em Internet</option>
                            <option value="valor2">Serviços em Jóias</option>
                            <option value="valor2">Serviços em Telefonia</option>
                            <option value="valor2">Serviços em Veículos</option>
                            <option value="valor2">Serviços Financeiros</option>
                            <option value="valor2">Serviços Funerários</option>
                            <option value="valor2">Serviços Gerais</option>
                            <option value="valor2">Serviços Editoriais</option>
                            <option value="valor2">Serviços para Animais</option>
                            <option value="valor2">Serviços para Deficientes</option>
                            <option value="valor2">Serviços para Escritórios</option>
                            <option value="valor2">Serviços para Roupas</option>
                            <option value="valor2">Serviços Socias</option>
                            <option value="valor2">Shopping Centers</option>
                            <option value="valor2">Tabacaria</option>
                            <option value="valor2">Tarifas Bancárias</option>
                            <option value="valor2">Tarifas Telefônicas</option>
                            <option value="valor2">Telefonia</option>
                            <option value="valor2">Turismo</option>
                        </select>
                        <input class="f10-cargo"  placeholder="Digite Um Cargo" />
                        <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-localidade.png" alt=""/></div>
                        <input class="f10-cidade" placeholder="Digite Uma Cidade" />
                        <div class="f10-lupa"><img src="../../assets/images/pagina 9,10,11,12/f10-lupa.png" alt=""/></div>
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