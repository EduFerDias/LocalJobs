import Conteudo from "./styled";
import { Link } from "react-router-dom";

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import  { useEffect} from 'react'
import { useState, useRef } from 'react';


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_empre');

    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}



export default function Header5 (props){

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};


    const [empresa, setEmpresa] = useState(usuarioLogado.nome);

    const [empresarial,setEmpresarial] = useState([])

    console.log(usuarioLogado)

    return(
        <Conteudo>
            <div class="logo">
            <Link to={{ pathname: '/home-empresa', state: props }}>
                <img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> 
                <span className="local">Localjobs</span>
            </Link>
        </div>

            <div class="divisao-t6">
            <Link to={{ pathname: '/config-empresa', state: props }}>
                <div class="nmUsuario-t6"> {empresa} </div>
            </Link>
<<<<<<< HEAD
            <Link to={{ pathname: '/config-empresa', state: props }}>
                <div class="imagenUsuario-t6"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div>
            </Link>
=======
            <Link to='/config-empresa'>  <div class="imagenUsuario-t6"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div> </Link>
>>>>>>> 3fe0e81c194b2b9a4c7f6a5bf548b3e82b4e944a
            </div>
        
        </Conteudo>
    );
}