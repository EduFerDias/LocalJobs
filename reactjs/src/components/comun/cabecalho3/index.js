import Conteudo from "./styled";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import  { useEffect} from 'react'
import { useState, useRef } from 'react';

import Api from '../../../services/Api';
let api = new Api();



function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_usu');

    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}




export default function Header5 (props){

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    console.log(usuarioLogado)

    const[link2, setImg] = useState('');
    const [empresa, setEmpresa] = useState(usuarioLogado.nome);
    const [empresarial,setEmpresarial] = useState([])

    async function buscarInfo(){
        let f = await api.buscaUsuConfigId(usuarioLogado.id)
        let imagem = `../../assets/images/Pagina15/imagemempresa.png`

        if (f.ds_link_imagem == "") {
            setImg(imagem)
        }
        else {
            setImg(f.ds_link_imagem)
        }
    }

    useEffect(() => {
        buscarInfo()
    }, [])


    return(
        <Conteudo>
            <div class="logo">
            <Link to={{ pathname: '/home-usu', state: props }}>
                <img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> 
                <span className="local">Localjobs</span>
            </Link>
        </div>

            <div class="divisao-t6">
            <Link to={{ pathname: '/config-usuario', state: props }}>
                <div class="nmUsuario-t6"> {empresa} </div>
            </Link>

            <Link to={{ pathname: '/config-usuario', state: props }}>
                <div class="imagenUsuario-t6"> <img src={link2} alt="" /> </div>
            </Link>

            </div>
        </Conteudo>
    );
}