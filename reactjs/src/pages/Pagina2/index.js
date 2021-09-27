import Conteudo from "./Style"
import { Link } from "react-router-dom";

export default function Pagina2 (){
    return(
    <Conteudo>
        <div class="faixa1">
            <div class="cabecalho">
                <div class="logo">
                    <Link to="/"><img src="./assets/images/Cadastro e Login/logo.png" alt=""/></Link>
                    Local<span class="dark">jobs</span>
                </div>
    
                <div class="user-interac">
                    <div class="pic">
                        <img src="./assets/images/Cadastro e Login/p1-Group 5.png" alt=""/>
                        <div class="login">Entrar</div>
                    </div>
                    <div class="detalhe">&nbsp;</div>
                    <button class="criar-conta">Criar Conta</button>
                </div>
            </div>
            <div class="corpo">
            <div className="botoes">
                <Link to="/Cadastro-empresa">
                    <button className="login-empre">
                        <img src="./assets/images/Cadastro e Login/p1-client-company 1.png" alt="" />

                            <div className="button-text">
                                Cadastro para empresas
                                <hr/>
                            </div>
                    </button>
                </Link>
                <Link to="/Cadastro-candidato">
                    <button className="login-usu">
                        <img src="./assets/images/Cadastro e Login/p1-1693755 1.png" alt="" />

                        <div className="button-text">
                            Cadastro para desempregados 
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