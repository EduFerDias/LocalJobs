import Conteudo from "./Style";
import { useHistory } from "react-router-dom";
import Logo2 from "../../components/comun/Logo2";
import Cabecalho2 from "../../components/comun/cabecalho1";

import Api from "../../services/Api";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
let api = new Api();


export default function Pagina4 (){

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [ramo, setRamo] = useState('');
    const [telefone, setTele] = useState()
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('')
    const [confSenha, setConf]= useState('')

    let nav = useHistory();
    let loading = useRef(null);
    

    async function cadastrarUsu(){
        loading.current.continuousStart();
        let estado_cidade = `${cidade}, ${estado}`;

        if(senha !== confSenha){
            toast.error("Ambas as senhas não sao iguais");
            return;
        } else if(!nome || nome === ''){
            toast.error('O campo de nome é obrigatorio')
            return;
        }else if(!ramo || ramo === ''){
            toast.error('O campo de area é obrigatorio')
            return;
        }else if(!cargo || cargo === ''){
            toast.error('O campo de Profissão é obrigatorio')
            return;
        }else if(!telefone || telefone === ''){
            toast.error('O campo de telefone é obrigatorio')
            return;
        }else if(!cidade || cidade === '' || !estado || estado === ''){
            toast.error('O campo de estado e cidade é obrigatorio')
            return;
        }else if(!email || email === ''){
            toast.error('O campo de email é obrigatorio')
            return;
        }else if(!senha || senha === ''){
            toast.error('O campo de senha é obrigatorio')
            return;
        }else if(!(email.includes('@') && email.includes('.com'))){
            toast.error('O campo de email é invalido')
            return;
        }
        
        
        let r = await api.inserirUsuario(nome, ramo, cargo, telefone, estado_cidade, email, senha, confSenha);
        loading.current.complete();
        nav.push('/home-usu');
        return r;
    }



    return(
    <Conteudo>
        <LoadingBar color='red' ref={loading}/>
        <Cabecalho2/>
        <ToastContainer limit="2" />

        <div class="corpo">
            <div class="form">
                <Logo2 />
                <form>
                    <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                    <div class="f-double">
                        <span class="select-custom">
                            <select name="" id="" value={ramo} onChange={e => setRamo(e.target.value)}>
                                <option value="" disabled selected hidden>Áreas</option>
                                <option value="Administração">Administração</option>
                                <option value="Antropologia">Antropologia</option>
                                <option value="Arquitetura e Urbanismo">Arquitetura e Urbanismo</option>
                                <option value="Arquivologia">Arquivologia</option>
                                <option value="Artes Cênicas">Artes Cênicas</option>
                                <option value="Artes Plásticas">Artes Plásticas</option>
                                <option value="Astronomia">Astronomia</option>
                                <option value="Biblioteconomia">Biblioteconomia</option>
                                <option value="Biofísica">Biofísica</option>
                                <option value="Bioquímica">Bioquímica</option>
                                <option value="Ciência da Computação">Ciência da Computação</option>
                                <option value="Ciência Política"> Ciência Política</option>
                                <option value="Ciências Biológicas">Ciências Biológicas</option>
                                <option value="Ciências Contábeis">Ciências Contábeis</option>
                                <option value="Cinema">Cinema</option>
                                <option value="Dança">Dança</option>
                                <option value="Design de Interiores">Design de Interiores</option>
                                <option value="Design Gráfico">Design Gráfico</option>
                                <option value="Direito"> Direito</option>
                                <option value="Ecologia">Ecologia</option>
                                <option value="Economia">Economia</option>
                                <option value="Educação Física">Educação Física</option>
                                <option value="Enfermagem">Enfermagem</option>
                                <option value="Engenharia Aeroespacial">Engenharia Aeroespacial</option>
                                <option value="Engenharia Biomédica">Engenharia Biomédica</option>
                                <option value="Engenharia Civil">Engenharia Civil</option>
                                <option value="Engenharia de Materiais">Engenharia de Materiais</option>
                                <option value="Engenharia de Minas">Engenharia de Minas</option>
                                <option value="Engenharia de Produção">Engenharia de Produção</option>
                                <option value="Engenharia de Transportes">Engenharia de Transportes</option>
                                <option value="Engenharia Elétrica">Engenharia Elétrica</option>
                                <option value="Engenharia Mecânica">Engenharia Mecânica</option>
                                <option value="Engenharia Metalúrgica">Engenharia Metalúrgica</option>
                                <option value="Engenharia Naval">Engenharia Naval</option>
                                <option value="Engenharia Nuclear">Engenharia Nuclear</option>
                                <option value="Engenharia Oceânica">Engenharia Oceânica</option>
                                <option value="Engenharia Química">Engenharia Química</option>
                                <option value="Engenharia Sanitária">Engenharia Sanitária</option>
                                <option value="Estatística">Estatística</option>
                                <option value="Farmácia">Farmácia</option>
                                <option value="Filosofia">Filosofia</option>
                                <option value="Física">Física</option>
                                <option value="Fisioterapia">Fisioterapia</option>
                                <option value="Fisioterapia">Fisioterapia</option>
                                <option value="Fonoaudiologia">Fonoaudiologia</option>
                                <option value="Fotografia">Fotografia</option>
                                <option value="Geofísica">Geofísica</option>
                                <option value="Geografia">Geografia</option>
                                <option value="Geologia">Geologia</option>
                                <option value="História">História</option>
                                <option value="Jornalismo">Jornalismo</option>
                                <option value="Letras">Letras</option>
                                <option value="Linguística">Linguística</option>
                                <option value="Matemática">Matemática</option>
                                <option value="Medicina">Medicina</option>
                                <option value="Meteorologia">Meteorologia</option>
                                <option value="Moda">Moda</option>
                                <option value="Museologia">Museologia</option>
                                <option value="Música">Música</option>
                                <option value="Oceanografia">Oceanografia</option>
                                <option value="Odontologia">Odontologia</option>
                                <option value="Psicologia">Psicologia</option>
                                <option value="Publicidade e Propaganda">Publicidade e Propaganda</option>
                                <option value="Química">Química</option>
                                <option value="Rádio e TV">Rádio e TV</option>
                                <option value="Relações Internacionais">Relações Internacionais</option>
                                <option value="Relações Públicas">Relações Públicas</option>
                                <option value="Saúde Coletiva">Saúde Coletiva</option>
                                <option value="Serviço Social">Serviço Social</option>
                                <option value="Sociologia">Sociologia</option>
                                <option value="Teatro">Teatro</option>
                                <option value="Teologia">Teologia</option>
                                <option value="Terapia Ocupacional">Terapia Ocupacional</option>
                                <option value="Tradução e Interpretação">Tradução e Interpretação</option>
                                <option value="Turismo">Turismo</option>
                            </select>
                        </span>
                        
                        <input type="text" placeholder="Profissão" class="tele" value={cargo} onChange={e => setCargo(e.target.value)}/> 
                    </div>

                    <input type="text" placeholder="Telefone" value={telefone} onChange={e => setTele(e.target.value)}/>
                    <div class="double">
                        <select class="estado" name="estados-brasil" value={estado} onChange={e => setEstado(e.target.value)}>
                            <option value="" disabled selected>Estados</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>

                        <input class="cidade"  placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)}/> 
                    </div>
                    <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/> 
                    <input type="password" placeholder="Confirmar senha" value={confSenha} onChange={e => setConf(e.target.value)}/> 
                    <button class="button" type="button" onClick={ cadastrarUsu }>Cadastrar</button>
                </form>
                <div class="f1-conta">
                    Já possui conta? &nbsp; <span>faça o login</span>
                    <div class="sobre">Sobre nós</div>
                </div>

            </div>
        </div>
    </Conteudo>

    );
}