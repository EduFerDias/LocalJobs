import Conteudo from "./styled";
import { Link } from 'react-router-dom'

import Cookies, { set } from 'js-cookie'
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import Api from "../../../services/Api";
let api = new Api();


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_empre');

    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function Header6 (props){
    const{link, setLink} = useState();

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    console.log(usuarioLogado)

    let getIMG = ( ) =>{
        let y = api.buscaUsuConfigId(usuarioLogado.id)
        setLink(y.ds_link_imagem)
    }


    const [empresa, setEmpresa] = useState(usuarioLogado.nome);

    const [empresarial,setEmpresarial] = useState([])

    return(
        <Conteudo>
            <div className="logo">
            <Link to={{ pathname: '/empresa-config', state: props }}>
                <img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> 
                <span className="local">Local<span className="dark">jobs</span></span>
            </Link>
        </div>
            <div className="divisao-t6">
                <Link to={{ pathname: '/login', state: props }}>
                    <div className="nmUsuario-t6"> Empresa </div>
                </Link>
                    <div className="imagenUsuario-t6"> <img src={link} alt="" /> </div>
            </div>
        </Conteudo>
    );
}