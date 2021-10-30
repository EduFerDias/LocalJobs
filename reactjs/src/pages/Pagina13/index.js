
import Conteudo from './styled'
import Rodape from '../../components/comun/rodapé';
import Cabecalho from "../../components/comun/cabecalho3"

export default function Pagina13(){
    return(

        <Conteudo>
            <div class="tela13">
                <Cabecalho></Cabecalho>
                <div class="conteudo-tela13">
                    <div class="faixas-tela13">
                        <div class="faixa1">
                            <div class="f1-foto">
                            <img src="./assets/images/Pagina14/imagem-usuario.png" alt="" />
                            </div>
                            <div class="f1-nomes">
                            <div class="nomesf1"> Nome: </div>
                            <div class="nomesf1"> Profissão: </div>
                            <div class="nomesf1"> Área: </div>
                            </div>
                            <div class="f1-campos">
                            <div class="f1campo"> <input/> </div>
                            <div class="f1campo"> <input/> </div>
                            <div class="f1campo"> <input/> </div>
                            </div>
                        </div>
                        <div class="faixa2">
                            <div class="f2Caixa1">
                            <div class="nomesf2"> Telefone: </div>
                            <div class="campof2"> <input /> </div>
                            </div>
                            <div class="f2Caixa2">
                            <div class="nomesf2"> Email: </div>
                            <div class="campof2"> <input /> </div>
                            </div>
                            <div class="f2Caixa3">
                            <div class="nomesf2"> Cidade: </div>
                            <div class="campof2"> <input /> </div>
                            </div>
                        </div>
                        <div class="faixa3">
                            <div class="sobrf3"> Sobre: </div>
                            <div class="campotextt13"> <textarea> </textarea> </div>
                        </div>
                    </div>
                    <div class="faixa4">
                            <div class="f4Caixa1">
                                <div class="nomes1f4"> Idiomas: </div>
                                <div class="campocx1f4"> <input/> </div>
                                <div class="nomes2f4"> Linkdin: </div>
                                <div class="campocx1f4"> <input/> </div>
                                <div class="nomes3f4"> Vagas de Interese:</div>
                                <div class="campocx1f4"> <input/> </div>
                            </div>
                            <div class="f4Caixa2">
                                <div class="campoidio2f4"> <input/> </div>
                                <div class="nomes2f4"> Instagram: </div>
                                <div class="campoinstaf4"> <input/> </div>
                                <div class="campovags2f4"> <input/> </div>
                            </div>
                            <div class="f4Caixa3">
                                <div class="campoidio3f4"> <input/> </div>
                                <div class="nomes2f4"> Twitter: </div>
                                <div class="campotwttf4"> <input/> </div>
                                <div class="campovags3f4"> <input/> </div>
                            </div>
                    </div>

                    <div class="faixa5">
                        <div class="expf5"> Experiencias: </div>
                        <div class="campotextt13"> <textarea> </textarea> </div>
                        <div class="formsf5"> Formações Academicas: </div>
                        <div class="campotextt13"> <textarea> </textarea> </div>
                    </div>

                    <div class="faixa6">
                        <div class="btdelf6"> <button> Deletar úsuario </button> </div>
                        <div class="btsavef6"> <button> Salvar </button> </div>
                    </div>

                </div>
                <Rodape></Rodape>
            </div>
        </Conteudo>


    );
}