import Conteudo from './style'
import Logo from '../Logo1'
import { Link } from 'react-router-dom';

export default function rodape(){
    return(
        <Conteudo>
            <div className="f4-conteudo">
                <Logo />


                <div className="links">

                    <div className="nav">
                        Navegação
                        <div className="sobre">
                            <Link to="/paginas"> Sobre nós </Link>
                        </div>

                        <div className="perfil">
                            <Link to="/paginas">Perfil</Link>
                        </div>

                        <div className="home">
                            <Link to="/paginas">Home</Link>
                        </div> 

                    </div>
                    <div className="redes">
                        Siga nossas redes

                        <div className="insta"> 
                            <img src="./assets/images/Cadastro e Login/p1-007-instagram-logo-white 1.png" alt="" />
                            <a href="https://www.instagram.com/localjobs_empregadora/">Instagram</a>
                        </div>

                        <div className="twitter">
                            <img src="../assets/images/pagina 9,10,11,12/f10-twitter.png" alt="" /> 
                            <a href="">Twitter</a>
                        </div>

                        <div className="facebook">
                            <img src="./assets/images/pagina 9,10,11,12/f10-face3.png" alt="" /> 
                            <a href="https://www.facebook.com/profile.php?id=100074045963628">Facebook </a>
                        </div>

                    </div>
                </div>
            </div>

        </Conteudo>

    );
}