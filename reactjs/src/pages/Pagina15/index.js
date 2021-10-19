import Conteudo from "./style";
import Cabecalho from '../../components/comun/cabecalho3'
import Rodape from '../../components/comun/rodapé'

export default function Pagina15(){
    return(
    <Conteudo>
        <Cabecalho />
        <div class="container">
            <div class="cabecalho"> 
                <div class="cab-esquerda">
                    <div class="imagem-cabecalho">
                        <img src="./assets/images/Pagina15/imagemempresa.png" alt="asda"/>
                    </div>
                    <div class="informacoes-usuario">
                        <p class="nm">Profissão - área</p>
                        <p class="pr">Nome Empresa | Estado - Cidade</p>
                    </div>
                </div>
                <div class="email-telefone">
                    <div class="et">usuário@gmail.com</div>
                    <div class="et">11 - 99999-9999</div>
                </div>
            </div>

            <div class="painel-central">
                <h1>Dados da vaga</h1>

                <div class="painel-boxes">
                    <div class="paineis-esquerda">
                        <div class="esquerda-cima">
                            <div class="caracteristicas">
                                <h1>Descrição:</h1>
                                <p>
                                    Elaboração de demonstrações financeiras (BP, DRE, DMPL, notas explicativas etc.).<br />
                                    Análises, revisão/conciliação das contas patrimoniais e de resultado.<br />
                                    Apuração de impostos diretos e indiretos.<br />
                                    Elaboração de obrigações acessórias: ECD, ECF, SPED Contribuições, PER/DCOMP.<br />
                                    Atender as auditorias e fiscalizações internas e externas, observando cronograma estabelecido, prestando informações, fornecendo documentos, analisando e discutindo divergências e efetuando correções.<br />
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Qualificação:</h1>
                                <p>
                                    Experiência na área contábil.<br />
                                    Vivência em fechamentos contábeis mensais;<br />
                                    atuação no varejo de bens de consumo será um diferencial.<br />
                                    Conhecimento em ERP, sendo um diferencial Protheus (da TOTVS).<br />
                                    Conhecimentos no pacote Office e usuário intermediário no Excel.<br />
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Formação:</h1>
                                <p>
                                    Formação em ciências contábeis.
                                </p>
                            </div>
                            <div class="caracteristicas">
                                <h1>Local de trabalho:</h1>
                                <p>
                                    São Paulo / SP - <span className="caract-bold">1 vaga</span>
                                </p>
                            </div>
                        </div>
                        <div class="esquerda-baixo">
                            <div class="div-mensagem">
                                <h1>Mensagem</h1>
                                <div class="box-mensagem">
                                    <div class="usuario-chat">
                                        <img src="./assets/images/Pagina15/usuarioempresa.png" alt="img-chat"/>
                                        <h1>Empresa</h1>
                                    </div>
                                    <div class="box-mensagem-baixo">
                                        <input type="text" placeholder="Enviar Mensagem"/>
                                        <img src="./assets/images/Pagina15/enviar.png" alt="enviar"/>                   
                                    </div>            
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div class="paineis-direita">
                        <div class="descricao-direita">
                            <div class="caracteristicas-direita">
                                <h1>Salário:</h1>
                                <p>De R$ 5.001,00 a R$ 5.500,00</p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Tipo de Contratação:</h1>
                                <p>A Combinar</p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Benefícios:</h1>
                                <p>Vale Transporte</p>
                                <p>Vale Refeição</p>
                                <p>Assistência Médica</p>
                                <p>Assistência Odontológica</p>
                            </div>
                            <div class="caracteristicas-direita">
                                <h1>Horário de Trabalho:</h1>
                                <p>Seg á sex - horário comercial.</p>
                            </div>
                        </div>

                        <div class="dados-empresa">
                            <h1>Dados da Empresa</h1>
                            <div class="box-dados-empresa">
                                <p><span class="box-negrito">Nome:</span> Athena </p>
                                <p><span class="box-negrito">Ramo:</span> TI </p>
                                <p><span class="box-negrito">Descrição:</span> Fábrica de móveis </p>
                            </div>
                        </div>

                        <div class="enviar-curriculo-linkedin2">
                            Enviar Currículo
                        </div>

                        <div class="enviar-curriculo-linkedin">
                            Enviar Linkedin <img src="./assets/images/Pagina15/linkedin.png" alt="linkedin"/>
                        </div>

                    </div>
                </div>

            </div>
            
            
        </div>
        <Rodape />
    </Conteudo>    
    );
}