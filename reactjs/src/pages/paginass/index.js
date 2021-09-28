import { Link } from "react-router-dom";
import Conteudo from "./style"

export default function pagina (){
    return(
        <Conteudo>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/cadastro-empresa">Cadastro Empresa</Link>
                <Link to="/cadastro-candidato">Cadastro Candidato</Link>
                <Link to="/cadastros">Cadastro</Link>
                <Link to="/esqueceu-senha">Esqueceu Senha</Link>
                <Link to="/pagina7">Página 7</Link>
                <Link to="/page9">Página 9</Link>
                <Link to="/page10">Página 10</Link>
                <Link to="/page11">Página 11</Link>
                <Link to="/page12">Página 12</Link>
                <Link to="/*">404 Not Found</Link>
            </div>
        </Conteudo>
    );
}
/*
                <Link to="/page14">Pagina 14</Link>
                <Link to="/page15">Pagina 15</Link>
*/