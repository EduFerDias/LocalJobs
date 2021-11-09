import Conteudo from "./styled";
import { Link } from 'react-router-dom'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_empr');
    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}



export default function Header6 (props){

    console.log(lerUsuarioLogado)

    return(
        <Conteudo>
            <div className="logo">
            <Link to={{ pathname: '/home-empresa', state: props }}>
                <img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> 
                Local<span className="dark">jobs</span>
            </Link>
        </div>
            <div className="divisao-t6">
                <Link to={{ pathname: '/config-empresa', state: props }}>
                    <div className="nmUsuario-t6"> Empresa </div>
                </Link>
                    <div className="imagenUsuario-t6"> <img src="../../assets/images/Pagina18/Group 8.png" alt="" /> </div>
            </div>
        </Conteudo>
    );
}