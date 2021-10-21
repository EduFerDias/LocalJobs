import { Link } from 'react-router-dom';
import Conteudo from './styled';

export default function S_Header(props){
    let nome = ''
    let image = ''

    if(props.bt_empresa === true){
        nome = 'Empresa'
        image = '../../assets/images/pagina 9,10,11,12/f10-empresa.png'
    }
    else {
        nome = 'Úsuario'
        image = '../../assets/images/pagina 9,10,11,12/f10-fotoperfil.png'

    }

    return(
    <Conteudo>
    <div class="f10-parte1">
        <div class="f10-logo"><Link to="/"><img src="../../assets/images/pagina 9,10,11,12/f10-logo.png" alt=""/></Link></div>
        <div class="f10-nome">LocalJobs</div>
    </div>

    <div class="f10-pesquisa2">
        <div class="f10-pesquisa">
                <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-cargo.png" alt=""/></div>

                <select name="select" >
                    <option value="valor1" selected>Todas áreas</option>
                    <option value="valor2"> </option>
                </select>
                <hr />
                <input class="f10-cargo" type="search" placeholder="Digite Um Cargo" />
                <hr/>
                <div class="f10-filtrosimg"><img src="../../assets/images/pagina 9,10,11,12/f10-localidade.png" alt=""/></div>
                <input class="f10-cidade" type="search" placeholder="Digite Uma Cidade" />
                <div class="f10-lupa"><img src="../../assets/images/pagina 9,10,11,12/f10-lupa.png" alt=""/></div>
        </div>
    </div>

    <div class="f10-parte2">
        <div class="f10-nome">{nome}</div>
        <div class="f10-imagem"><img src={image} alt=""/></div>
    </div>
</Conteudo>
)
}