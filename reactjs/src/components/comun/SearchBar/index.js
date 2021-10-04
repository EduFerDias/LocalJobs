import { Link } from "react-router-dom";
import Conteudo from "./styled";

export default function Searchbar (){
    return(
        <Conteudo>
            <div class="f10-pesquisa2">
                <div class="f10-pesquisa">
                    <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-cargo.png" alt=""/></div>

                    <select name="select" >
                        <option value="valor1" selected>Todas áreas</option>
                        <option value="valor2"> </option>
                    </select>
                    <hr />
                    <input class="f10-cargo" type="search" placeholder="Digite Um Cargo" />
                    <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-localidade.png" alt=""/></div>
                    <hr />
                    <input class="f10-cidade" type="search" placeholder="Digite Uma Cidade" />
                    <div class="f10-lupa"><Link to="/page9"><img src="../../assets/images/pagina 9,10,11,12/f10-lupa.png" alt=""/></Link></div>
                </div>
            </div>
        </Conteudo>

    )
}