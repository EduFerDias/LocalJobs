import { Link } from "react-router-dom";
import Cabecalho2 from "../../components/comun/cabecalho1";
import Conteudo from "./Style";

export default function Pagina5 (){
    return(
        <Conteudo>
          <Cabecalho2 />

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
              <Link to="/codigo">  <button>Enviar código no email</button> </Link>
            </div>
          </div>
        </div>
      </Conteudo>
  
    );
}