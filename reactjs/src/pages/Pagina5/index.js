import { Link } from "react-router-dom";
import Conteudo from "./Style";

export default function Pagina5 (){
    return(
        <Conteudo>
        <div class="cabecalho-t5">
          <div class="just-t5">
            <div class="logo-t5">
            <Link to="/">  <img src="./assets/images/pagina 5,6,7/logo.png" alt="" /></Link>
            </div>
            <div class="NomeSite-t5">LocalJobs</div>
          </div>
            <div class="DirecionarLogin-t5">Login</div>
        </div>
  
        <div class="conteudo-t5">
          <div class="CaixaAlerta-t5">
            <div class="cadeado-t5">
              <img src="./assets/images/pagina 5,6,7/cadeado-t5.png"  alt="" />
            </div>
            <div class="TituloConteudo-t5">Problema para entrar?</div>
            <div class="TextoConteudo-t5">
              Enviaremos um código para o seu numero de telefone ou seu email para
              que possa voltar a acessar a sua conta.
            </div>
            <div class="EnviarNoNumero">
              <Link to="/pagina7">  <button>Enviar código no numero de celular</button> </Link>
            </div>
            <div class="EnviarNoEmail">
              <Link to="/pagina7">  <button>Enviar código no email</button> </Link>
            </div>
          </div>
        </div>
      </Conteudo>
  
    );
}