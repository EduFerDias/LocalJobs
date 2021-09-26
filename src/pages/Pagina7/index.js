import Conteudo from "./Style";

export default function Pagina7 (){
    return(
        <Conteudo>
        <div class="cabecalho-t7">
          <div class="just-t7">
            <div class="logo-t7">
              <img src="../../assets/images/pagina 5,6,7/logo.png" alt="" />
            </div>
            <div class="NomeSite-t7">LocalJobs</div>
          </div>
          <div class="DirecionarLogin-t7">Login</div>
        </div>
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