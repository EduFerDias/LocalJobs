
import { Link } from "react-router-dom";
import Conteudo from './styled';


export default function cabecalho2 (){
    return(
        <Conteudo>
            <div class="f10-cabecario">
                <div class="oi">
                    <div class="f10-logo">  <Link to="/page10"><img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> </Link></div>
                    <div class="f10-nome"> LocalJobs </div>
                </div>

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
                        <div class="f10-lupa"><img src="../../assets/images/pagina 9,10,11,12/f10-lupa.png" alt=""/></div>
                    </div>
                </div>

                <div class="f10-parte2">
                    <div class="f10-nome"> Úsuario </div>
                    <div class="f10-imagem"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div>
                </div>
            </div>
        </Conteudo>

    );
}