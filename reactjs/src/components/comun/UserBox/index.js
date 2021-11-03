import Conteudo from "./styled";

import { Link } from 'react-router-dom'

import { useState,useEffect } from 'react'

import Api from '../../../services/Api';
const api = new Api();

export default function UsuBox (props) {

    const [vaga, setVagas] = useState([]);
    const [empresa, setEmpresa ] = useState([]);

    const id = props.id

    console.log(id)
    console.log(vaga)
    console.log(empresa)

    async function ListarEmpresaID() {
        const x = await api.ListarEmpresaID(id)
        setEmpresa(x)
    }

    async function ListarVagas() {
        const x = await api.listarVagasIDempresa(id)
        setVagas(x)
    }


    useEffect(() => {
        ListarVagas();
        ListarEmpresaID();
    });


    let imagem = '';

    if(props.bt_empresa === true){
        imagem = 'f10-empresa.png'
    } else{
        imagem = 'f10-fotoperfil.png'
    }

    let path =  `../../assets/images/pagina 9,10,11,12/${imagem}`

    return(
                
        <Conteudo> 
            <div class="f10-fotofiltro"><img src={path} alt=""/> </div>

            <div class="f10-texto">
                <div class="f10-filtronome"><Link to={{ pathname: '/empresa', state: props }}> {empresa.nm_nome} </Link> </div>

                <div class="f10-cidade">{props.cidade}</div>
                
                
                <Link to={{ pathname: '/vaga', state: props}}>

                    <div class="f10-profissao">{props.profissao != null && props.profissao.length > 15 ? props.profissao.substr(0, 15) + '...' : props.profissao}

                    <div class="f10-barra">
                        -</div><div class="f10-filtroarea">{empresa.nm_ramo}</div>
                    </div>
        
                    <div class="f10-data">{`R$ ${props.salario}`}</div>

                </Link>

                <div class="vazio"> {props.descricao}</div>
                <div class="vazio"> {props.cnpj}</div>
                <div class="vazio"> {props.ramo}</div>
            </div>   
        </Conteudo>
    );
}