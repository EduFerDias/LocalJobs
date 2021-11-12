import Conteudo from "./Style";
import Cabecalho3 from "../../components/comun/cabecalho3";

export default function Pagina6(){
    return(
        <Conteudo>
          <Cabecalho3 />
          <div class="conteudo-t6">
            <div class="nrErro-t6"> 404 </div>
            <div class="nmErro-t6"> Essa página não foi encontrada </div>
          </div>
        </Conteudo>
  
    );
}