import Conteudo from './styled'
import { Link } from "react-router-dom";

export default function Logo (){
    return(
        <Conteudo>
            <Link to="/"><img src="./assets/images/Cadastro e Login/logo.png" alt="" /></Link>
            Local<span className="dark">jobs</span>
        </Conteudo>

    );
}