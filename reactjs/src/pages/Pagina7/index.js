import Conteudo from "./Style";
import Cabecalho2 from "../../components/comun/cabecalho2";

export default function Pagina7 (){
    return(
        <Conteudo>
        <Cabecalho2/>

        <div class="conteudo-t7">
          <div class="CaixaAlerta-t7">
            <div class="cadeado-t7">
              <img src="../../assets/images/pagina 5,6,7/cadeado-t5.png" alt=""/>
            </div>
            <div class="TituloConteudo-t7">Problema para entrar?</div>
            <div class="TextoConteudo-t7">
              Enviaremos um código para o seu numero de telefone ou seu email para
              que possa voltar a acessar a sua conta.
            </div>
            <div class="reenviar-t7">
              Não recebeu? clique aqui para <b>Reenviar</b>
            </div>
            <div class="codigo-t7">
              <input type="text" name="nome" value="" placeholder="⠀Código" />
            </div>
            <div class="cfmrCodigo-t7">
              <button>Confirmar Código</button>
            </div>
          </div>
        </div>
      </Conteudo>
  
    );
}