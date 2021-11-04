import Conteudo from "./Style"
import { Link } from "react-router-dom";
import Cabecalho1 from "../../components/comun/cabecalho1";

export default function Pagina2 (){
    return(
    <Conteudo>
        <div class="faixa1">
            <Cabecalho1 />
            <div class="corpo">
            <div className="botoes">
                <Link to="/cadastro-empresa">
                    <button className="login-empre">
                        <img src="./assets/images/Cadastro e Login/p1-client-company 1.png" alt="" />

                            <div className="button-text">
                                Cadastro para empresas
                                <hr/>
                            </div>
                    </button>
                </Link>
                <Link to="/cadastro-candidato">
                    <button className="login-usu">
                        <img src="./assets/images/Cadastro e Login/p1-1693755 1.png" alt="" />

                        <div className="button-text">
                            Cadastro para candidatos
                             <hr/>
                        </div>
                    </button>
                </Link>
            </div>

    
            </div>
        </div>        

    </Conteudo>
    );
}