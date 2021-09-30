import { Link } from "react-router-dom";
import Conteudo from "./styled";


export default function Cabecalho3() {
    return(
        <Conteudo>
            <div class="divisao-t6">
                <div class="logo-t6">  <Link to="/"><img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> </Link></div>
                <div class="nmSite-t6"> LocalJobs </div>
            </div>
            <div class="divisao-t6">
                <div class="nmUsuario-t6"> Úsuario </div>
                <div class="imagenUsuario-t6"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div>
            </div>
        </Conteudo>
    );
}