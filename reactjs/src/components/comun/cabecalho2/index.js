import { Link } from "react-router-dom";
import Pagina8 from "../../../pages/Pagina8";
import Logo3 from "../Logo3";
import Conteudo from './styled'

export default function cabecalho2 (){
    return(
        <Conteudo>
            <Logo3/>
            <div class="user-interac">
                <div class="pic">
                    <Link to="/login"><div class="login">Login</div></Link>
                </div>
            </div>
        </Conteudo>

    );
}