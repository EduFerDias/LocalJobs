import { Link } from "react-router-dom";
import Conteudo from "./style"

export default function pagina (){
    return(
        <Conteudo>
            <div>
                <button><Link to="/home">Home</Link></button>
                <button><Link to="/cadastro-empresa">Cadastro Empresa</Link></button>
                <button><Link to="/cadastro-candidato">Cadastro Candidato</Link></button>
                <button><Link to="/cadastros">Cadastro</Link></button>
                <button><Link to="/esqueceu-senha">Esqueceu Senha</Link></button>
                <button><Link to="/pagina7">Codigo de recuperação</Link></button>
                <button><Link to="/page9">Busca(Empresa)</Link></button>
                <button><Link to="/page10">Home(Empresa)</Link></button>
                <button><Link to="/page11">Home(Candidato)</Link></button>
                <button><Link to="/page12">Busca(Candidato)</Link></button>
                <button><Link to="/*">404 Not Found</Link></button>
            </div>
        </Conteudo>
    );
}
/*
*/