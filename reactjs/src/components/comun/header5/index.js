import Conteudo from "./styled";
import { Link } from "react-router-dom";

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import Api from '../../../services';
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_empr');
    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

console.log(lerUsuarioLogado)


export default function Header5 (){
    return(
        <Conteudo>
            <div class="logo">
            <Link to={{ pathname: '/home-empresa', state: props }}>
                <img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> 
                Local<span class="dark">jobs</span>
            </Link>
        </div>
            <div class="divisao-t6">
            <Link to={{ pathname: '/home-empresa', state: props }}>
                <div class="nmUsuario-t6"> Úsuario </div>
            </Link>
                <div class="imagenUsuario-t6"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div>
            </div>
        </Conteudo>
    );
}