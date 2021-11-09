import Cabecalho1 from "../../components/comun/cabecalho1";
import Cabecalho3 from "../../components/comun/cabecalho3";
import Cabecalho2 from "../../components/comun/cabecalho2";
import { Link } from "react-router-dom";
import Conteudo from "./Style";
import Rodape from "../../components/comun/rodapé";
import Logo from "../../components/comun/Logo1";
import Logo3 from "../../components/comun/Logo3";
import Logo2 from "../../components/comun/Logo2";




export default function Pagina8 (){
    return (
        <div>
            <Conteudo>
            <Cabecalho2/>
                <div className="painel-tela8">
                    <Logo2/>

                </div>
            </Conteudo>
        </div>
    )
}