import Conteudo from "./styled"; 
import { Link } from "react-router-dom";
import Logo from "../Logo1";

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import  { useEffect} from 'react'
import { useState, useRef } from 'react';


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_empre');

    console.log(logado)
    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}




export default function Cabecalho1 (){

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    console.log(usuarioLogado)

    function Verificar(){
        if (usuarioLogado.tp_conta == "id_empr") {
            navigation.push('/home-empresa')
        }
        else if (usuarioLogado.tp_conta === "id_usu" ) {
            navigation.push('/home-usu')
        }
    }

    console.log(Verificar())
    
    let a = ""

    const [empresa, setEmpresa] = useState(usuarioLogado.nome);


    return(
        <Conteudo>
            <Logo />
            <div className="user-interac">
                <div className="pic">
                    <img src="./assets/images/p1-Group 5.png" alt=""/>
                    <Link to="/login"><div className="login" Onclick={Verificar}>Entrar</div></Link>
                </div>
                <div className="detalhe">&nbsp;</div>
                <Link to="/cadastros"><button className="criar-conta"> Criar Conta</button></Link>
            </div>
        </Conteudo>

    );
}