import Conteudo from "./styled";
import { Link } from 'react-router-dom'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'



export default function Header6 (props){

    return(
        <Conteudo>
            <div className="logo">
            <Link to={{ pathname: '/paginas', state: props }}>
                <img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> 
                <span className="local">Local<span className="dark">jobs</span></span>
            </Link>
        </div>
            <div className="divisao-t6">
                <Link to={{ pathname: '/login', state: props }}>
                    <div className="nmUsuario-t6"> Empresa </div>
                </Link>
                    <div className="imagenUsuario-t6"> <img src="../../assets/images/Pagina18/Group 8.png" alt="" /> </div>
            </div>
        </Conteudo>
    );
}