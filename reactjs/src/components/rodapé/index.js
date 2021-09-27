import Conteudo from './style'


export default function rodape(){
    return(
        <Conteudo>
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

        </Conteudo>

    );
}