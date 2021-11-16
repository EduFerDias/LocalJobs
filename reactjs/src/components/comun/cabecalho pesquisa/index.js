import { Link, useHistory } from "react-router-dom";
import Searchbar from "../SearchBar";
import Conteudo from './styled';
import Cookies, { set } from 'js-cookie'
import  { useEffect} from 'react'
import imagem from "../../src/Group 5.png"

import { useState, useRef } from 'react';
import Api from '../../../services/Api';
let api = new Api();

function lerUsuarioLogado(navigation, ondeestoy) {
    let logado = ''
    if(ondeestoy === 'pessoal')
    logado = Cookies.get('id_usu');

    else if(ondeestoy === 'empresa')
    logado = Cookies.get('id_empre');

    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}



export default function Cabecalho2 (props){

    const navigation = useHistory();
    
    const [link2, setImg] = useState('');
    const [nome, setNome] = useState(usuarioLogado.nome);
    const [empresa, setEmpresa] = useState(usuarioLogado.nome);
    const [empresarial,setEmpresarial] = useState([])
    const[link, setLink ]= useState();
    const[home, setHome] = useState('');

    useEffect(() => {
        getIMG()
    }, [])

    let usuarioLogado = lerUsuarioLogado(navigation, props.onde) || {};


    let getIMG = ( ) =>{
        let y = api.buscaUsuConfigId(usuarioLogado.id)
        setLink(y.ds_link_imagem)
    }
    useEffect(()=>{

    if(props.onde === 'pessoal')
        setHome('/home-usu')
    else if(props.onde === 'empresa')
        setHome('/home-empresa')
    
    }, [])

    

    return (
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
                <div class="f10-parte2">
                    <div class="f10-nome2"> {empresa} </div>
                    <div class="f10-imagem"> <img src="../../assets/images/pagina 5,6,7/imgÚsuario.png" alt="" /> </div>
                </div>
            </div>
        </Conteudo>

    );
}