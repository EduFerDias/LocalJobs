import { Link } from "react-router-dom";
import Conteudo from "./style"

export default function pagina (){
    return(
        <Conteudo>
            <div>
            <Link to="/paginas"><button>Home</button></Link>

            <Link to="/cadastro-empresa"><button>Cadastro Empresa</button></Link>
            <Link to="/cadastro-candidato"><button>Cadastro Candidato</button></Link>
            <Link to="/cadastros"><button>Cadastro</button></Link>

            <Link to='/login'><button>Login</button></Link>
            <Link to="/esqueceu-senha"><button>Esqueceu Senha</button></Link>
            <Link to="/codigo"><button>Codigo de recuperação</button></Link>
            <Link to="/recSenha"><button>Troca de Senha</button></Link>

            <Link to="/buscar-usu"><button>Busca(Empresa)</button></Link>
            <Link to="/buscar-empresa"><button>Busca(Candidato)</button></Link>
            <Link to="/home-empresa"><button>Home(Empresa)</button></Link>
            <Link to="/home-usu"><button>Home(Candidato)</button></Link>
            
            <Link to="/vaga"><button>Pagina 15 de vaga</button></Link>
            <Link to="/criar-vaga"><button>Pagina 16 de criar vaga</button></Link>

            <Link to="/config-usuario"><button>Pagina 13 de config de usuario</button></Link>
            <Link to="/config-empresa"><button>Pagina 19 de config de empresa </button></Link>

            <Link to="/empresa"><button>Pagina 18 da Empresa</button></Link>
            <Link to="/usuario"><button>Pagina 14 de Usuario</button></Link>
    
            <button><Link to="/*">404 Not Found</Link></button>
              
            </div>
        </Conteudo>
    );
}
