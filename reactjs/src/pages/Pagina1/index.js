import Conteudo from "./Style";
import { Link } from "react-router-dom";
import Cabecalho1 from "../../components/comun/header6";
import Rodape from "../../components/comun/rodapé";

export default function Pagina1 (){
    return(
        <Conteudo>
                    <div className="faixa1">
                        <Cabecalho1 />

                        <div className="corpo">
                            <div className="f1-text">
                                <div className="f1-titulo">Contribuindo para empregar todos</div>
                                <div className="f1-paragraph">Somos responsáveis pela queda na taxa de desemprego na cidade de São Paulo.</div>
                            </div>
                        </div>
                    </div>

                    <div className="faixa2">
                        <div className="f2-text">
                            <div className="f2-titulo">LocalJobs para Empresas</div>
                            <div className="f2-paragraph">Use o LocalJobs para achar profissionais qualificados para sua empresa.</div>
                            <Link to="/Cadastro-empresa">
                                <button className="f2-button">Contrate Aqui!</button>
                            </Link>
                        </div>
                        <div className="f2-img">
                            <img src="./assets/images/Cadastro e Login/p1-tipos-de-empresas 1.png" alt="" />
                        </div>
                    </div>

                    <div className="faixa-3">
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
                    <Rodape />
        </Conteudo>
    );
}