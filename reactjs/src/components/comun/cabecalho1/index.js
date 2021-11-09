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
        if (usuarioLogado.tp_conta == "empresarial") {
            navigation.push('/home-empresa')
        }
        else if (usuarioLogado.tp_conta === "pessoal" ) {
            navigation.push('/home-usu')
        }
    }
    

    console.log(Verificar())

    
    let a = ""

    function Verificar2(){
        if(usuarioLogado.tp_conta == "empresarial" ) {
            return
        }
        if (usuarioLogado.tp_conta === "pessoal" ) {
            return
        }
        else {
            a = "Criar Conta"
        }
    }

    useEffect(() => {
        Verificar2();
    }, [])




    return(
        <Conteudo>
            <Logo />
            <div className="user-interac">
                <div className="pic">
                    <img src="./assets/images/p1-Group 5.png" alt=""/>
                    <div className="login" Onclick={Verificar}>Entrar</div>
                </div>
                <div className="detalhe">&nbsp;</div>
                <Link to="/cadastros"><button className="criar-conta">{a}</button></Link>
            </div>
        </Conteudo>

    );
}