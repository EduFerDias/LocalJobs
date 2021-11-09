import Conteudo from "./styled"; 
import { Link } from "react-router-dom";
import Logo from "../Logo1";

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import  { useEffect} from 'react'
import { useState, useRef } from 'react';





export default function Cabecalho1 (){

    return(
        <Conteudo>
            <Logo />
            <div className="user-interac">
                <div className="pic">
                    <img src="./assets/images/p1-Group 5.png" alt=""/>
                    <div className="login" Onclick={''}>Entrar</div>
                </div>
                <div className="detalhe">&nbsp;</div>
                <Link to="/cadastros"><button className="criar-conta">{'Criar Conta'}</button></Link>
            </div>
        </Conteudo>

    );
}