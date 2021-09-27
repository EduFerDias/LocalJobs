import Conteudo from "./Style";
import { Link } from "react-router-dom";

export default function Pagina1 (){
    return(
        <Conteudo>
                    <div className="faixa1">
                        <div className="cabecalho">
                            <div className="logo">
                                <img src="./assets/images/Cadastro e Login/logo.png" alt=""/>
                                Local<span className="dark">jobs</span>
                            </div>

                            <div className="user-interac">
                                <div className="pic">
                                    <img src="./assets/images/p1-Group 5.png" alt=""/>
                                    <Link to="/esqueceu-senha"><div className="login">Entrar</div></Link>
                                </div>
                                <div className="detalhe">&nbsp;</div>
                                <Link to="/cadastros"><button className="criar-conta">Criar Conta</button></Link>
                            </div>
                        </div>
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
                                        Cadastro para desempregados 
                                        <hr/>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="faixa-4">
                        <div className="f4-conteudo">

                            <div className="logo">
                                <img src="./assets/images/Cadastro e Login/logo.png" alt="" />
                                Local<span className="dark">jobs</span>
                            </div>
                            <div className="links">

                                <div className="nav">
                                    Navegação
                                    <div className="sobre">
                                        Sobre nós
                                    </div>

                                    <div className="perfil">
                                        Pefil
                                    </div>

                                    <div className="home">
                                        Home
                                    </div>

                                </div>
                                <div className="redes">
                                    Siga nossas redes

                                    <div className="insta"> 
                                        <img src="./assets//images/Cadastro e Login/p1-007-instagram-logo-white 1.png" alt="" />
                                        Instagram 
                                    </div>

                                    <div className="twitter">
                                        <img src="./assets/images/Cadastro e Login/p1-logo-twitter-png-fundo-transparente7 1.svg" alt="" /> 
                                        Twitter 
                                    </div>

                                    <div className="facebook">
                                        <img src="./assets/images/Cadastro e Login/p1-20673 1.svg" alt="" /> 
                                        Facebook 
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

        </Conteudo>
    );
}