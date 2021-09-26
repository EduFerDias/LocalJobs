import Conteudo from "./Style";

export default function Pagina4 (){
    return(
    <Conteudo>
        <div class="cabecalho">
            <div class="logo">
                <img src="./assets/images/Cadastro e Login/logo.png" alt="" />
                Localjobs
            </div>

            <div class="user-interac">
                <div class="pic">
                    <div class="login">Login</div>
                </div>
            </div>
        </div>
        <div class="corpo">
            <div class="form">
                <div class="logo2">
                    <img src="./assets/images/Cadastro e Login/logo.png" alt="" />
                    <div class="nome">Local<span class="dark">jobs</span></div>    
                </div>
                <form>
                    <input type="text" placeholder="Nome"/>
                    <div class="f-double">
                        <span class="select-custom">
                            <select name="" id="" >
                                <option value="">Área</option>
                                <option value=""> TI </option>
                                <option value=""> Servidor </option>

                            </select>
                        </span>
                        <input type="text" placeholder="Profissão" class="tele"/> 
                    </div>

                    <input type="text" placeholder="Telefone"/>
                    <input type="text" placeholder="Estado - Cidade"/>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/> 
                    <input type="password" placeholder="Confirmar senha"/> 
                    <button class="button">Cadastrar</button>
                </form>
                <div class="f1-conta">
                    Já possui conta? &nbsp; <span> faça o login</span>
                    <div class="sobre">Sobre nós</div>
                </div>

            </div>
        </div>
    </Conteudo>


    );
}