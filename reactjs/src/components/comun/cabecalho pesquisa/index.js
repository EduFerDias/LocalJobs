import { Link } from "react-router-dom";
import Searchbar from "../SearchBar";
import Conteudo from './styled';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import  { useEffect} from 'react'
import imagem from "../../src/Group 5.png"

import { useState, useRef } from 'react';
import Api from '../../../services/Api';
let api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_usu');
    console.log(logado)

    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}



export default function Cabecalho2 (props){

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [link2, setImg] = useState('');
    const [nome, setNome] = useState(usuarioLogado.nome);

    async function buscarInfo(){
        let f = await api.buscaUsuConfigId(usuarioLogado.id)
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
            <div class="f10-cabecario">
                <div class="oi">
                    <div class="f10-logo">  <Link to="/home-usu"><img src="../../assets/images/pagina 5,6,7/logo.png" alt="" /> </Link></div>
                    <div class="f10-nome"> LocalJobs </div>
                </div>

                <div className="barra">
                    <Searchbar ondeestoy={props.onde} pg={props.pg}/>
                </div>
                <Link to="/config-usuario">
                    <div class="f10-parte2">
                        <div class="f10-nome2"> {nome} </div>
                        <div class="f10-imagem"> <img src={link2} alt="" /> </div>
                    </div>
                </Link>
            </div>
        </Conteudo>

    );
}