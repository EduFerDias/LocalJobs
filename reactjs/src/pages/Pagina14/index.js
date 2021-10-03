import Conteudo from "./style"
import Cabecalho3 from "../../components/comun/cabecalho3";
import Rodape from "../../components/comun/rodapé";

export default function Pagina14 () {
    return(
    <Conteudo>  
        <div class="container">
            <Cabecalho3/>
            <div class="cabecalho"> 
                <div class="cab-esquerda">
                    <div class="imagem-cabecalho">
                        <img src="./assets/images/Pagina14/imagem-usuario.png" alt="asda"/>
                    </div>
                    <div class="informacoes-usuario">
                        <p class="nm">Nome</p>
                        <p class="pr">Profissão - área</p>
                        <p class="es">Estado - Cidade</p> 
                    </div>
                </div>
                <div class="email-telefone">
                    <div class="et">usuário@gmail.com</div>
                    <div class="et">11 - 99999-9999</div>
                </div>
            </div>
            <div class="painel-central">
                <div class="informacoes-painel">
                    <h1>Sobre</h1>
                    <p>sobre mim...</p>
                </div>
                <div class="informacoes-painel">
                    <h1>Experiências</h1>
                    <p>experiencias...</p>
                </div>
                <div class="informacoes-painel">
                    <h1>Formações acadêmicas</h1>
                    <p>formação...</p>
                </div>
                <div class="baixo-painel">
                    <div class="redes-sociais">
                        <p>Redes Sociais</p>
                        <div class="rede-social"><img src="./assets/images/Pagina14/linkedin.png" alt="linkedin" /> <div>/candidatousuario</div></div>
                        <div class="rede-social"><img src="./assets/images/Pagina14/instagram.png" alt="instagram" /><div>@candidatousuario</div></div>
                        <div class="rede-social"><img src="./assets/images/Pagina14/twitter.png" alt="twitter" /><div>@candidatousuario</div></div>
                    </div>
                    <div class="idiomas">
                        <h1>Idiomas</h1>
                        <h2>Inglês</h2>
                        <h2>Espanhol</h2>
                        <h2>Português</h2>
                    </div>
                </div>
            </div>
            <div class="div-vagas-interesse">
                <h1>Vagas de interesse</h1>
                <div class="vagas">
                    <div class="vaga">Vaga</div>
                    <div class="vaga">Vaga</div>
                    <div class="vaga">Vaga</div>
                </div>
                
            </div>
            <div class="div-mensagem">
                <h1>Mensagem</h1>
                <div class="box-mensagem">
                    <div class="usuario-chat">
                        <img src="./assets/images/Pagina14/img-chat.png" alt="img-chat"/>
                        <h1>Usuário</h1>
                    </div>
                    <div class="box-mensagem-baixo">
                        <input type="text" placeholder="Enviar Mensagem" />
                        <img src="./assets/images/Pagina14/enviar.png" alt="enviar" />                   
                    </div>            
                </div>
                
            </div>
        </div>
        <Rodape />
    </Conteudo>
    );
}