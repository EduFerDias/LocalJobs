import Conteudo from "./styled";
import { Link } from "react-router-dom";


export default function Logo2 (){
    return(
        <Conteudo>
            <Link to="/"><img src="./assets/images/Cadastro e Login/logo.png" alt="" /></Link>
            <div class="nome">Local<span class="dark">jobs</span></div>    
        </Conteudo>

    );
}