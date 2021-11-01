import Conteudo from "./styled";



export default function Vagas (props) {
    return(
        <Conteudo>
            <div class="tit-bloco-dtl">{props.profissao}</div>
            <div class="desc-bloco-dtl">{props.descrição}<span class="veja-mais">Veja Mais</span>
            </div>
            <div class="vagas-bloco-dtl"><span>| {props.cidade} | </span> | <span> De {props.salariode} A {props.salarioa} </span>
            </div>
        </Conteudo>

    );
}