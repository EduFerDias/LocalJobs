import Conteudo from "./Style"

export default function Pagina2 (){
    return(
    <Conteudo>
        <div class="faixa1">
            <div class="cabecalho">
                <div class="logo">
                    <img src="./assets/images/Cadastro e Login/logo.png" alt=""/>
                    Local<span class="dark">jobs</span>
                </div>
    
                <div class="user-interac">
                    <div class="pic">
                        <img src="./assets/images/Cadastro e Login/p1-Group 5.png" alt=""/>
                        <div class="login">Entrar</div>
                    </div>
                    <div class="detalhe">&nbsp;</div>
                    <button class="criar-conta">Criar Conta</button>
                </div>
            </div>
            <div class="corpo">
                <div class="botoes">
                    <button class="login-empre">
                        <img src="./assets/images/Cadastro e Login/p1-client-company 1.png" alt="" />
    
                        <div class="button-text">
                            Cadastro para empresas
                            <hr/>
                        </div>
                    </button>
    
                    <button class="login-usu">
                        <img src="./assets/images/Cadastro e Login/p1-1693755 1.png" alt="" />
    
                        <div class="button-text">
                            Cadastro para desempregados 
                            <hr/>
                        </div>
                    </button>
                </div>
    
            </div>
        </div>        

    </Conteudo>
    );
}