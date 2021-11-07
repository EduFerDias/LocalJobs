import { Link } from "react-router-dom";
import Conteudo from "./style"

export default function pagina (){
    return(
        <Conteudo>
            <div>
                <button><Link to="/paginas">Home</Link></button>

                <button><Link to="/cadastro-empresa">Cadastro Empresa</Link></button>
                <button><Link to="/cadastro-candidato">Cadastro Candidato</Link></button>
                <button><Link to="/cadastros">Cadastro</Link></button>

                <button><Link to='/login'>Login</Link></button>
                <button><Link to="/esqueceu-senha">Esqueceu Senha</Link></button>
                <button><Link to="/codigo">Codigo de recuperação</Link></button>
                <button><Link to="/recSenha">Troca de Senha</Link></button>

                <button><Link to="/buscar-usu">Busca(Empresa)</Link></button>
                <button><Link to="/buscar-empresa">Busca(Candidato)</Link></button>

                <button><Link to="/home-empresa">Home(Empresa)</Link></button>
                <button><Link to="/home-usu">Home(Candidato)</Link></button>
                

                <button><Link to="/vaga">Pagina 15 de vaga</Link></button>
                <button><Link to="/criar-vaga">Pagina 16 de criar vaga</Link></button>
 
                <button><Link to="/config-usuario">Pagina 13 de config de usuario</Link></button>
                <button><Link to="/config-empresa">Pagina 19 de config de empresa </Link></button>
  
                <button><Link to="/empresa">Pagina 18 da Empresa</Link></button>
                <button><Link to="/usuario">Pagina 14 de Usuario</Link></button>

        
                <button><Link to="/*">404 Not Found</Link></button>
              
            </div>
        </Conteudo>
    );
}
