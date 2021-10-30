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
                <Link to="/pagina7">Codigo de recuperação</Link>
                <Link to="/page9">Busca(Empresa)</Link>
                <Link to="/page10">Home(Empresa)</Link>
                <Link to="/page11">Home(Candidato)</Link>
                <Link to="/page12">Busca(Candidato)</Link>
                <Link to="/page14">Pagina 14</Link>
                <Link to="/page15">Pagina 15</Link>
                <Link to="/page16">Pagina 16</Link>
                <Link to="/page13">Pagina13</Link>
                <Link to="/page18">Pagina da Empresa</Link>
                <Link to="/page19">Pagina19</Link>
                <Link to="/*">404 Not Found</Link>
            </div>
        </Conteudo>
    );
}
