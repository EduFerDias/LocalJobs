import { Link } from "react-router-dom";
import Searchbar from "../SearchBar";
import Conteudo from './styled';


export default function Cabecalho2 (props){
    return(
        <Conteudo>
            <div class="f10-cabecario">
                <div class="oi">
                    <div class="f10-logo">  <Link to="/"><img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> </Link></div>
                    <div class="f10-nome"> LocalJobs </div>
                </div>

                <div className="barra">
                    <Searchbar ondeestoy={props.onde} pg={props.pg}/>
                </div>

                <div class="f10-parte2">
                    <div class="f10-nome2"> Úsuario </div>
                    <div class="f10-imagem"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div>
                </div>
            </div>
        </Conteudo>

    );
}