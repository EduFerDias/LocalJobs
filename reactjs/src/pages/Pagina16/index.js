import Conteudo from "./styled";
import Rodape from "../../components/comun/rodapé";
import Cabecalho3 from "../../components/comun/cabecalho3";
import LoadingBar from 'react-top-loading-bar'

import  { useEffect} from 'react'
import React, { useState, useRef  } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../services/Api';
const api = new Api();




export default function Pagina15(props){

    const [vagaesp, setVagaEspecifica] = useState(17)

    const [vaga, setVaga] = useState([])
    const [profissao, setProfissao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qualificacao, setQualificacao] = useState('');
    const [formacoes, setFormacoes] = useState('');
    const [local, setLocal] = useState('');
    const [salario_a, setSalario_a] = useState('');
    const [salario_de, setSalario_de] = useState('');
    const [tipodecontrato, setTipoDeContratacao] = useState('');
    const [beneficios, setBeneficios] = useState('');
    const [horario, setHorario] = useState('');

    const loading = useRef(null)

    var id = 5

    async function inserirVaga() { 

        let a = profissao === '' || descricao === '' || qualificacao === '' || formacoes === '' || local === '' || salario_a === '' || salario_de === ''  || beneficios === '' || horario === ''
        const time = "08:00"


        if(a === true) {
            toast.error('Todos os campos devem estar preenchidos!');
        }

        else if(salario_a < salario_de) {
            toast.error('O Salario DE: ' + salario_de + " Deve ser menor que A: " + salario_a);
        }

        else if(horario > time){
            toast.error('Horario deve ser menor que 8 horas');
        }
        else if(vagaesp > 0) {
            loading.current.continuousStart(); 
            toast.success('Vaga Editada')
            let x = await api.EditarVaga(vagaesp,id,profissao,descricao,qualificacao,formacoes,local,salario_a,salario_de,tipodecontrato,beneficios,horario)
            loading.current.complete()      
            console.log(x)      
        }
        else{
            loading.current.continuousStart(); 
            toast.success('Vaga Cadastrada')
            let x = await api.inserirVaga(id,profissao,descricao,qualificacao,formacoes,local,salario_a,salario_de,tipodecontrato,beneficios,horario)
            toast.success('Vaga Cadastrada')
            loading.current.complete()      
            console.log(x)
        }
        

    }

    async function DeletarVaga() {
        confirmAlert({
            title: 'Remover vaga',
            message: `Tem certeza que deseja remover essa Vaga?`,
            buttons: [
              {
                label: 'Sim',
                onClick: async () => {
                    let r = await api.DeletarVaga(vagaesp)
                    if (r.erro)
                        toast.error(`${r.erro}`);
                    else {
                        toast.dark('Vaga Deletada');
                    }
                }
              },
              {
                label: 'Não'
              }
            ]
          });

    }

    async function ListarVagasEspecifica(){
        let a = await api.listarVagasID(5,17)
        setVaga(a);
    }

    
    async function Editar() {
        setProfissao(vaga.ds_profissao)
        setDescricao(vaga.ds_descricao)
        setQualificacao(vaga.ds_qualificacao)
        setFormacoes(vaga.ds_formacao)
        setLocal(vaga.ds_local_trabalho)
        setSalario_a(vaga.ds_salario_a)
        setSalario_de(vaga.ds_salario_de)
        setTipoDeContratacao(vaga.ds_tipo_contratacao)
        setBeneficios(vaga.ds_beneficios)
        setHorario(vaga.ds_hora_trabalho)
    }

    useEffect(() => {
        ListarVagasEspecifica();
        Editar();
    });
    
    console.log(vagaesp)
    console.log(vaga)

    return(
        
    <Conteudo>
        <ToastContainer/>
        <LoadingBar color='#f11946' ref={loading} />
        <div class="tudo">
            <Cabecalho3> </Cabecalho3>
                <div class="f16-configuracoes">Configurações de Vaga:</div>

                    <div class="f16-textarea">
                        <div class="textarea1">
                            
                            <div class="inputs">
                                <div class="f16-profissao">Profissão:</div>
                                <input type="text" maxlength="30" value={ profissao } onChange={e => setProfissao(e.target.value)} placeholder="⠀Profissão" /> 

                                <div class="f16-descricao">Descrição:</div>
                                <textarea name="" maxlength="250" value={ descricao } onChange={e => setDescricao(e.target.value)}  id="" cols="55" rows="10"></textarea>

                                <div class="f16-descricao">Qualificação:</div>
                                <textarea name="" maxlength="250" value={ qualificacao } onChange={e => setQualificacao(e.target.value)} id="" cols="55" rows="10"></textarea>

                                <div class="f16-descricao">Formações</div>
                                <textarea name="" maxlength="250"  value={ formacoes } onChange={e => setFormacoes(e.target.value)} id="" cols="55" rows="10"></textarea>

                                <div class="f16-Local">Local de trabalho</div>
                                <input class="trabalho"  maxlength="30" value={ local } onChange={e => setLocal(e.target.value)}  type="text" placeholder="⠀Local de trabalho"/>
                            </div>

                            <div class="mensagemaviso"><h2>Mensagens: <span>2</span></h2></div>
                            <div class="f16-mensagens">
                                <div class="imagem"><img src="./assets/images/pagina 9,10,11,12/f10-fotoperfil.png" alt=""/> <span class="uso">úsuario</span></div>
                                <div class="mensagem">Oi </div> 

                                <div class="escrever"><input type="text"  placeholder="⠀responder..."/><button><img src="./assets/images/pagina 9,10,11,12/f16-enviar.png" alt=""/></button></div> 
                            </div>
                            
                        </div>


                        <div class="textarea2">
                            
                            <div class="salarioinput">
                                <div class="salario"> Sálario</div>
                                <div class="salarios"> 
                                    <div class="salariode">
                                        <div class="de"> De
                                        <input type="number" maxlength="7"  value={ salario_de } onChange={e => setSalario_de(e.target.value)} placeholder="⠀De"/></div>
                                    </div>

                                    <div class="salarioa">
                                        <div class="a"> a
                                        <input type="number" maxlength="7" min="0" max="1000000" placeholder="⠀A"  value={ salario_a } onChange={e => setSalario_a(e.target.value)} /> </div>
                                    </div> 
                                </div>

                            
                                <div class="tipodecontrato"> <div class="tipo">Tipo de contratação</div>
                                    <select name="select" value={ tipodecontrato } onChange={e => setTipoDeContratacao(e.target.value)} >
                                        <option value="CLT" selected>CLT</option>
                                        <option value="Estágio"> Estágio</option>
                                        <option value="Jovem Aprendiz"> Jovem Aprendiz</option>
                                        <option value="Terceirização"> Terceirização</option>
                                        <option value="Trabalho remoto"> Trabalho remoto</option>
                                        <option value="Trainee"> Trainee</option>
                                    </select>
                                </div>

                                <div class="beneficios">Beneficios </div>
                                <textarea name="" id="" cols="55" maxlength="250" rows="10" value={ beneficios } onChange={e => setBeneficios(e.target.value)}></textarea>

                                <div class="hora">Horas Trabalhadas</div>
                                <input class="inputhoras" type="time" min="01:00" max="8:00" placeholder="⠀Horário de trabalho" value={ horario } onChange={e => setHorario(e.target.value)}/>
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

                                    <button class={ vagaesp === 0 ? "nodelete" : "nodelete" } onClick={() => DeletarVaga(vagaesp)} > Deletar Vaga </button> 


                                <button class="save" onClick={ inserirVaga } > Salvar </button>

                            </div>

                        </div>

                    </div>
            <Rodape> </Rodape>
            </div>
        
        </Conteudo>    
    );
}