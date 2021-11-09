import { Link } from "react-router-dom";
import Conteudo from "./styled";


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

export default function Cabecalho3(props) {
    return(
        <Conteudo>
            <div class="divisao-t6">
            <Link to={{ pathname: '/home-empresa', state: props }}>
                <div class="logo-t6">  <Link to="/"><img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> </Link></div>
                <div class="nmSite-t6"> LocalJobs </div>
            </Link>    
            </div>
            <div class="divisao-t6">
                <div class="nmUsuario-t6"> Empresa </div>
                <div class="imagenUsuario-t6"> <img src="../../assets/images/Pagina14/Group 20.png" alt="" /> </div>
            </div>
        </Conteudo>
    );
}