import { Link } from "react-router-dom";
import Conteudo from "./styled";
import  { useEffect} from 'react'
import { useState, useRef } from 'react';

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import Api from '../../../services/Api';
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_empre');

    console.log(logado.id)
    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}



export default function Cabecalho3(props) {

    

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};


    const [empresa, setEmpresa] = useState(usuarioLogado.nome);

    const [empresarial,setEmpresarial] = useState([])


    return(
        <Conteudo>
            <div class="divisao-t6">
            <Link to={{ pathname: '/home-empresa', state: props }}>
                <div class="logo-t6">  <Link to="/home-empresa"><img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> </Link></div>
                <div class="nmSite-t6"> LocalJobs </div>
            </Link>    
            </div>
            <div class="divisao-t6">
                <Link to={{ pathname: '/config-empresa', state: props }}>    
                    <div class="nmUsuario-t6"> {empresa}  </div>
                    <div class="imagenUsuario-t6"> <img src="../../assets/images/Pagina14/Group 20.png" alt="" /> </div>
                </Link> 
            </div>   
        </Conteudo>
    );
}