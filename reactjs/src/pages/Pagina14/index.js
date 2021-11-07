import Conteudo from "./style"
import Cabecalho3 from "../../components/comun/header4";
import Rodape from "../../components/comun/rodapé";
import { useEffect, useState } from "react";
import Api from "../../services/Api";
let api  = new Api();

export default function Pagina14 (props) {
    let usuario = props.location.state;

    const[userConfig, setUsuC] = useState([]);
    const[usuInfo, setUsuI] = useState([])

    async function listarUsu() {
        let r = await api.buscaUsuConfigId(usuario)
        let y = await api.buscaUsuId(usuario)

        console.log(usuario)

        setUsuC(r)
        setUsuI(y)
    }

    useEffect(() => {
        listarUsu();
    })




    return(
    <Conteudo>
        <Cabecalho3/>  
        <div class="container">
            <div class="cabecalho"> 
                <div class="cab-esquerda">
                    <div class="imagem-cabecalho">
                        <img src="./assets/images/Pagina14/imagem-usuario.png" alt="asda"/>
                    </div>
                    <div class="informacoes-usuario">
                        <p class="nm">{usuInfo.nm_nome}</p>
                        <p class="pr">{usuInfo.ds_cargo} - {usuInfo.ds_area}</p>
                        <p class="es">{usuInfo.ds_estado_cidade}</p> 
                    </div>
                </div>
                <div class="email-telefone">
                    <div class="et">{usuInfo.ds_email}</div>
                    <div class="et">{usuInfo.nr_telefone}</div>
                </div>
            </div>
            <div class="painel-central">
                <div class="informacoes-painel">
                    <h1>Sobre</h1>
                    <p> {userConfig.ds_sobre}</p>
                </div>
                <div class="informacoes-painel">
                    <h1>Experiências</h1>
                    <p>{userConfig.ds_esperiencias}</p>
                </div>
                <div class="informacoes-painel">
                    <h1>Formações acadêmicas</h1>
                    <p>{userConfig.ds_formacoes_academicas}</p>
                </div>
                <div class="baixo-painel">
                    <div class="redes-sociais">
                        <p>Redes Sociais</p>
                        <div class="rede-social"><img src="./assets/images/Pagina14/linkedin.png" alt="linkedin" /> <div>{userConfig.ds_linkedin}</div></div>
                        <div class="rede-social"><img src="./assets/images/Pagina14/instagram.png" alt="instagram" /><div>{userConfig.ds_instagram}</div></div>
                        <div class="rede-social"><img src="./assets/images/Pagina14/twitter.png" alt="twitter" /><div>{userConfig.ds_twiter}</div></div>
                    </div>
                    <div class="idiomas">
                        <h1>Idiomas</h1>
                        <h2>{userConfig.ds_idioma1}</h2>
                        <h2>{userConfig.ds_idioma2}</h2>
                        <h2>{userConfig.ds_idioma3}</h2>
                    </div>
                </div>
            </div>
            <div class="div-vagas-interesse">
                <h1>Vagas de interesse</h1>
                <div class="vagas">
                    <div class="vaga">{userConfig.ds_vagas_interesse1}</div>
                    <div class="vaga">{userConfig.ds_vagas_interesse2}</div>
                    <div class="vaga">{userConfig.ds_vagas_interesse3}</div>
                </div>
                
            </div>
            <div class="div-mensagem">
                <h1>Mensagem</h1>
                <div class="box-mensagem">
                    <div class="usuario-chat">
                        <img src="./assets/images/Pagina14/img-chat.png" alt="img-chat"/>
                        <h1>{usuInfo.nm_nome}</h1>
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