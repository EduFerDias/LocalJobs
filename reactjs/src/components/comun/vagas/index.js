import Conteudo from "./styled";

import { Link } from 'react-router-dom'

export default function Vagas (props) {

    console.log(props)
    
    return(
        <Conteudo>
            <div class="bloco">
                <Link to={{ pathname: '/vaga', state: props }}>

                    <div class="tit-bloco-dtl">{props.profissao != null && props.profissao.length > 25 ? props.profissao.substr(0, 15) + '...' : props.profissao}</div>

                    <div class="desc-bloco-dtl">{props.descricao != null && props.descricao.length > 25 ? props.descricao.substr(0, 15) + '...' : props.descricao }<span class="veja-mais">Veja Mais</span></div>

                    <div class="vagas-bloco-dtl"><span> 1 vaga | {props.cidade} | </span> | <span> De R$ {props.salariode} A R$ {props.salarioa} </span></div>
                    
                </Link>

            </div>

            
        </Conteudo>

    );
}