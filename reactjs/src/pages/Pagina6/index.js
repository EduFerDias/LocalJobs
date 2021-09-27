import Conteudo from "./Style";
import { Link } from "react-router-dom";

export default function Pagina6(){
    return(
        <Conteudo>
        <div class="cabecalho-t6">
          <div class="divisao-t6">
            <div class="logo-t6">  <Link to="/"><img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> </Link></div>
            <div class="nmSite-t6"> LocalJobs </div>
          </div>
          <div class="divisao-t6">
            <div class="nmUsuario-t6"> Úsuario </div>
            <div class="imagenUsuario-t6"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div>
          </div>
        </div>
        <div class="conteudo-t6">
          <div class="nrErro-t6"> 404 </div>
          <div class="nmErro-t6"> Essa página nao foi encontrada </div>
        </div>
      </Conteudo>
  
    );
}