import Conteudo from './style'
import Logo from '../Logo1'


export default function rodape(){
    return(
        <Conteudo>
            <div className="f4-conteudo">
                <Logo />


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
                            <img src="./assets/images/Cadastro e Login/p1-007-instagram-logo-white 1.png" alt="" />
                            Instagram 
                        </div>

                        <div className="twitter">
                            <img src="../assets/images/pagina 9,10,11,12/f10-twitter.png" alt="" /> 
                            Twitter 
                        </div>

                        <div className="facebook">
                            <img src="./assets/images/pagina 9,10,11,12/f10-face3.png" alt="" /> 
                            Facebook 
                        </div>

                    </div>
                </div>
            </div>

        </Conteudo>

    );
}