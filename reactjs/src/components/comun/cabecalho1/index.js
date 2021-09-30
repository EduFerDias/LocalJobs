import Conteudo from "./styled"; 
import { Link } from "react-router-dom";
import Logo from "../Logo1";

export default function cabecalho1 (){
    return(
        <Conteudo>
            <Logo />
            <div className="user-interac">
                <div className="pic">
                    <img src="./assets/images/p1-Group 5.png" alt=""/>
                    <Link to="/esqueceu-senha"><div className="login">Entrar</div></Link>
                </div>
                <div className="detalhe">&nbsp;</div>
                <Link to="/cadastros"><button className="criar-conta">Criar Conta</button></Link>
            </div>
        </Conteudo>

    );
}