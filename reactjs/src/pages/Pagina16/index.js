import Conteudo from "./styled";
import { Link } from 'react-router-dom';
import Rodape from "../../components/comun/rodapé";
import Cabecalho3 from "../../components/comun/cabecalho3";

export default function Pagina15(){
    return(
    <Conteudo>
        <div class="tudo">
            <Cabecalho3> </Cabecalho3>
                <div class="f16-configuracoes">Configurações de Vaga:</div>

                    <div class="f16-textarea">
                        <div class="textarea1">
                            
                            <div class="inputs">
                                <div class="f16-profissao">Profissão:</div>
                                <input type="text" placeholder="⠀Profissão" /> 

                                <div class="f16-descricao">Descrição:</div>
                                <textarea name="" id="" cols="55" rows="10"></textarea>

                                <div class="f16-descricao">Qualificação:</div>
                                <textarea name="" id="" cols="55" rows="10"></textarea>

                                <div class="f16-descricao">Formações</div>
                                <textarea name="" id="" cols="55" rows="10"></textarea>

                                <div class="f16-Local">Local de trabalho</div>
                                <input class="trabalho" type="text" placeholder="⠀Local de trabalho"/>
                            </div>

                            <div class="mensagemaviso"><h2>Mensagens: <span>2</span></h2></div>
                            <div class="f16-mensagens">
                                <div class="imagem"><img src="./assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> <span class="uso">úsuario</span></div>
                                <div class="mensagem">Oi </div> 

                                <div class="escrever"><input type="text" placeholder="⠀responder..."/><button><img src="./assets/images/pagina 9,10,11,12/f16-enviar.png" alt=""/></button></div> 
                            </div>
                            
                        </div>


                        <div class="textarea2">
                            
                            <div class="salarioinput">
                                <div class="salario">Sálario</div>
                                <div class="salarios"> 
                                    <div class="salariode">
                                        <div class="de"> De
                                        <input type="number"  placeholder="⠀De"/></div>
                                    </div>

                                    <div class="salarioa">
                                        <div class="a"> a
                                        <input type="number" min="1" max="7" placeholder="⠀A" /> </div>
                                    </div> 
                                </div>

                            
                                <div class="tipodecontrato"> <div class="tipo">Tipo de contratação</div>
                                    <select name="select" >
                                        <option value="valor1" selected>CLT</option>
                                        <option value="valor2"> Estágio</option>
                                        <option value="valor3"> Jovem Aprendiz</option>
                                        <option value="valor4"> Terceirização</option>
                                        <option value="valor5"> Trabalho remoto</option>
                                        <option value="valor5"> Trainee</option>
                                    </select>
                                </div>

                                <div class="beneficios">Beneficios</div>
                                <textarea name="" id="" cols="55" rows="10"></textarea>

                                <div class="hora">Horário de trabalho</div>
                                <input class="inputhoras" type="time"  placeholder="⠀Horário de trabalho"/>
                            </div>

                            <div class="currilosscrool">
                                <div class="curiculo">Currículos e Linkedin recebidos: <span>4</span> </div>

                                <div class="curiculos">

                                    <div class="linkcuriculo">
                                        <img src="../../assets/images/pagina 9,10,11,12/f10-linkdln.png" alt=""/>
                                        <div class="linkusuario"><h2>úsuario</h2></div>
                                    </div>

                                    <div class="linkcuriculo">
                                        <img src="../../assets/images/pagina 9,10,11,12/f10-linkdln.png" alt=""/>
                                        <div class="linkusuario"><h2>úsuario</h2></div>
                                    </div>

                                    <div class="linkcuriculo">
                                        <img src="../../assets/images/pagina 9,10,11,12/f10-linkdln.png" alt=""/>
                                        <div class="linkusuario"><h2>úsuario</h2></div>
                                    </div>

                                    <div class="linkcuriculo">
                                        <img src="../../assets/images/pagina 9,10,11,12/f10-linkdln.png" alt=""/>
                                        <div class="linkusuario"><h2>úsuario</h2></div>
                                    </div>

                                    <div class="linkcuriculo">
                                        <img src="../../assets/images/pagina 9,10,11,12/f10-linkdln.png" alt=""/>
                                        <div class="linkusuario"><h2>úsuario</h2></div>
                                    </div>

                                    <div class="linkcuriculo">
                                        <img src="../../assets/images/pagina 9,10,11,12/f10-linkdln.png" alt=""/>
                                        <div class="linkusuario"><h2>úsuario</h2></div>
                                    </div>

                                    <div class="linkcuriculo">
                                        <img src="../../assets/images/pagina 9,10,11,12/f10-linkdln.png" alt=""/>
                                        <div class="linkusuario"><h2>úsuario</h2></div>
                                    </div>

                                </div>
                            </div>

                            <div class="botoes">

                                <button class="delete">Deletar Vaga</button>
                                <button class="save">Salvar</button>
                            </div>

                        </div>

                    </div>
            <Rodape> </Rodape>
            </div>
        
        </Conteudo>    
    );
}