/*import { Link } from "react-router-dom";*/
import Logo2 from "../../components/comun/Logo2";
import Conteudo from "./Style"
import Cabecalho2 from "../../components/comun/cabecalho1";


/*import { confirmAlert } from 'react-confirm-alert'; */
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*import  { useEffect} from 'react'*/
import React, { useState, useRef  } from 'react';

import Api from '../../services/Api';
const api = new Api();


export default function Pagina3(){

    /*const [empresa, setEmpresa ] = useState([]);*/

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [nome, setNome] = useState('');
    const [ramo, setRamo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [idAlterado, setIdAlterado] = useState(0);
    
    const estado_cidade = cidade + ", " + estado;

    console.log(nome,cnpj,ramo,telefone,estado_cidade,email,senha)

    const loading = useRef(null)

    const ValidarResposta = (x) => {
        console.log(x)
        if (!x.erro)
            return true;
            toast.error(`${x.erro}`)

        return false;

    }

    async function inserirEmpresa() {    

        let a = nome === '' || cnpj === '' || ramo === '' || telefone === '' ||cidade === '' || email === '' || senha === '' || senha2 === ''
        let Negativos = cnpj < 0  || telefone < 0 

        if(a === true ) {
            toast.error('Todos os campos devem estar preenchidos!'); 
        }
        else if (isNaN(cnpj) === true && isNaN(telefone) === true){
            toast.error('Os campos telefone e CNPJ devem conter números'); 
        }
        else if (isNaN(cnpj) === true) {
            toast.error('O campo CNPJ deve conter números'); 
        }
        else if (isNaN(telefone) === true) {
            toast.error('O campo telefone deve conter números'); 
        }
        else if (cnpj < 0 && telefone < 0) {
            toast.error('Os campos telefone e CNPJ devem conter números positivos'); 
        }
        else if (cnpj < 0) {
            toast.error('O campo CNPJ deve conter números positivos'); 
        }
        else if (telefone < 0) {
            toast.error('O campo telefone deve conter números positivos'); 
        }
        else if (senha !== senha2) {
            toast.error('Senhas diferentes'); 
        }
        else if (telefone.length !== 11) {
            toast.error('O campo telefone deve conter 11 números e incluir o DDD'); 
        }
        else if (cnpj.length === 18) {
            toast.error('O campo CNPJ deve conter 14 números'); 
        }
        else if (isNaN(cidade) === false) {
            toast.error('O campo cidade deve conter letras não números'); 
        }
        else if (senha.lenght < 8) {
            toast.error('sua senha deve conter mais de 8 caracteres'); 
        }
        else if(Negativos === true){
            toast.error('Os numeros de telefone ou cpf não podem ser negativos')
        }

        else if (idAlterado === 0) {
            loading.current.continuousStart(); 
            let x = await api.inserirEmpresa(nome,cnpj,ramo,telefone,estado_cidade,email,senha)
            console.log(x)
            if (!ValidarResposta(x)){
                loading.current.complete()
                return  
            }   
            toast.success('Conta Empresarial Criada.')  
            loading.current.complete()

        }
        
        setIdAlterado(0);       
    }


    return(
       
        <Conteudo>
        <ToastContainer />
            <Cabecalho2 />
            <LoadingBar color='#f11946' ref={loading} />
            <div class="corpo">
                <div class="form">
                    <Logo2 />
                    <form>
                        <input type="text" maxlength="100" value={ nome } onChange={e => setNome(e.target.value)} placeholder="Empresa"/>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxlength="14" value={ cnpj } onChange={e => setCNPJ(e.target.value)} placeholder="CNPJ" />

                        <div class="f-double">
                            <span class="select-custom">
                                <select name="" value={ ramo } onChange={e => setRamo(e.target.value)} id="" >
                                    <option value="" disabled selected hidden>Ramos</option>
                                    <option value="Alimentos e Bebidas">Alimentos e Bebidas </option>
                                    <option value="Arte e Antiguidades">Arte e Antiguidades </option>
                                    <option value="Artigos Religiosos">Artigos Religiosos </option>
                                    <option value="Assinaturas e Revistas">Assinaturas e Revistas </option>
                                    <option value="Automóveis e Veículos">Automóveis e Veículos </option>
                                    <option value="Bebês e Cia">Bebês e Cia </option>
                                    <option value="Blu-Ray">Blu-Ray </option>
                                    <option value="Brinquedos e Games">Brinquedos e Games </option>
                                    <option value="Casa e Decoração">Casa e Decoração </option>
                                    <option value="CDs e DVDs">CDs e DVDs </option>
                                    <option value="Colecionáveis">Colecionáveis </option>
                                    <option value="Compras Coletivas">Compras Coletivas </option>
                                    <option value="Construção e Ferramentas">Construção e Ferramentas </option>
                                    <option value="Cosméticos e Perfumaria">Cosméticos e Perfumaria</option> 
                                    <option value="Cursos e Educação">Cursos e Educação </option>
                                    <option value="Discos de Vinil">Discos de Vinil </option>
                                    <option value="Distribuição de Jornais">Distribuição de Jornais</option>
                                    <option value="Eletrodomésticos">Eletrodomésticos </option>
                                    <option value="Eletrônicos">Eletrônicos </option>
                                    <option value="Emissoras">Emissoras </option>
                                    <option value="Empregos">Empregos </option>
                                    <option value="Telemarketing">Telemarketing </option>
                                    <option value="Esporte e Lazer">Esporte e Lazer </option>
                                    <option value="Cestas e Presentes">Cestas e Presentes </option>
                                    <option value="Fotografia">Fotografia </option>
                                    <option value="Instituições Religiosas">Instituições Religiosas</option>  
                                    <option value="Indústria e Comércio">Indústria e Comércio</option>
                                    <option value="Infláveis Promocionais">Infláveis Promocionais</option>
                                    <option value="Informática / Tecnologia">Informática</option>
                                    <option value="Ingressos">Ingressos</option>
                                    <option value="Instrumentos Musicais">Instrumentos Musicais</option>
                                    <option value="Joalheria">Joalheria</option>
                                    <option value="Lazer">Lazer</option>
                                    <option value="Livros">Livros</option>
                                    <option value="Moda e Acessórios">Moda e Acessórios</option>
                                    <option value="Música Digital">Música Digital</option>
                                    <option value="Natal">Natal</option>
                                    <option value="Negócios e Oportunidades">Negócios e Oportunidades</option>
                                    <option value="Serviços de Avaliação">Serviços de Avaliação</option>
                                    <option value="Papelaria e Escritório">Papelaria e Escritório</option>
                                    <option value="Páscoa">Páscoa</option>
                                    <option value="Pet Shop">Pet Shop</option>
                                    <option value="Saúde">Saúde</option>
                                    <option value="Serviço Advocaticios">Serviço Advocaticios</option>
                                    <option value="Distribuição de Jornais">Distribuição de Jornais</option>
                                    <option value="Serviços Administrativos">Serviços Administrativos</option>
                                    <option value="Serviços Artísticos">Serviços Artísticos</option>
                                    <option value="Serviços de Abatedouros">Serviços de Abatedouros</option>
                                    <option value="Serviços de Aeroportos">Serviços de Aeroportos</option>
                                    <option value="Serviços de Agências">Serviços de Agências</option>
                                    <option value="Serviços de Aluguel">Serviços de Aluguel</option>
                                    <option value="Serviços de Armazenagem">Serviços de Armazenagem</option>
                                    <option value="Serviços de Assessorias">Serviços de Assessorias</option>
                                    <option value="Serviços de Assistência Técnica ">Serviços de Assistência Técnica </option>
                                    <option value="Serviços de Associações">Serviços de Associações</option>
                                    <option value="Serviços de Bancos de Sangue">Serviços de Bancos de Sangue</option>
                                    <option value="Serviços de Bibliotecas">Serviços de Bibliotecas</option>
                                    <option value="Serviços de Cartórios">Serviços de Cartórios</option>
                                    <option value="Serviços de Casas Lotéricas">Serviços de Casas Lotéricas</option>
                                    <option value="Serviços de Confecções">Serviços de Confecções</option>
                                    <option value="Serviços de Consórcios">Serviços de Consórcios</option>
                                    <option value="Serviços de Consultorias">Serviços de Consultorias</option>
                                    <option value="Serviços de Cooperativas">Serviços de Cooperativas</option>
                                    <option value="Serviços de Despachante">Serviços de Despachante</option>
                                    <option value="Serviços de Engenharia">Serviços de Engenharia</option>
                                    <option value="Serviços de Estacionamentos">Serviços de Estacionamentos</option>
                                    <option value="Serviços de Estaleiros">Serviços de Estaleiros</option>
                                    <option value="Serviços de Importação">Serviços de Importação</option>
                                    <option value="Serviços de Geólogos">Serviços de Geólogos</option>
                                    <option value="Serviços de joalheiros">Serviços de joalheiros</option>
                                    <option value="Serviços de Leiloeiros">Serviços de Leiloeiros</option>
                                    <option value="Serviços de limpeza">Serviços de limpeza</option>
                                    <option value="Serviços de Loja de Conveniência">Serviços de Loja de Conveniência</option>
                                    <option value="Serviços de Mão de Obra">Serviços de Mão de Obra</option>
                                    <option value="Serviços de Órgão Públicos">Serviços de Órgão Públicos</option>
                                    <option value="Serviços de Portos">Serviços de Portos</option>
                                    <option value="Serviços de Saúde">Serviços de Saúde</option>
                                    <option value="Serviços de Seguradoras">Serviços de Seguradoras</option>
                                    <option value="Serviços de Segurança">Serviços de Segurança</option>
                                    <option value="Serviços de Sinalização">Serviços de Sinalização</option>
                                    <option value="Serviços de Sindicatos">Serviços de Sindicatos </option>
                                    <option value="Serviços de Transporte">Serviços de Transporte</option>
                                    <option value="Serviços de Utilidade Pública">Serviços de Utilidade Pública</option>
                                    <option value="Serviços em Agricultura">Serviços em Agricultura</option>
                                    <option value="Serviços em Alimentação">Serviços em Alimentação</option>
                                    <option value="Serviços em Arte">Serviços em Arte</option>
                                    <option value="Serviços em Cine / Foto / Som">Serviços em Cine / Foto / Som</option>
                                    <option value="Serviços em Comunicação">Serviços em Comunicação</option>
                                    <option value="Serviços em Construção">Serviços em Construção</option>
                                    <option value="Serviços em Ecologia">Serviços em Ecologia</option>
                                    <option value="Serviços em Eletroeletrônica">Serviços em Eletroeletrônica</option>
                                    <option value="Serviços em Festas / Eventos">Serviços em Festas / Eventos</option>
                                    <option value="Serviços em Informática">Serviços em Informática</option>
                                    <option value="Serviços em Internet">Serviços em Internet</option>
                                    <option value="Serviços em Jóias">Serviços em Jóias</option>
                                    <option value="Serviços em Telefonia">Serviços em Telefonia</option>
                                    <option value="Serviços em Veículos">Serviços em Veículos</option>
                                    <option value="Serviços Financeiros">Serviços Financeiros</option>
                                    <option value="Serviços Funerários">Serviços Funerários</option>
                                    <option value="Serviços Gerais">Serviços Gerais</option>
                                    <option value="Serviços Editoriais">Serviços Editoriais</option>
                                    <option value="Serviços para Animais">Serviços para Animais</option>
                                    <option value="Serviços para Deficientes">Serviços para Deficientes</option>
                                    <option value="Serviços para Escritórios">Serviços para Escritórios</option>
                                    <option value="Serviços para Roupas">Serviços para Roupas</option>
                                    <option value="Serviços Socias">Serviços Socias</option>
                                    <option value="Shopping Centers">Shopping Centers</option>
                                    <option value="Tarifas Bancárias">Tarifas Bancárias</option>
                                    <option value="Telefonia">Telefonia</option>
                                    <option value="Turismo">Turismo</option>
                                </select>
                            </span>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxlength="11" value={ telefone } onChange={e => setTelefone(e.target.value)} placeholder="Telefone" class="tele"/> 
                        </div>               
                        <div class="double">
                                <select class="estado" value={ estado } onChange={e => setEstado(e.target.value)} >
                                    <option value="" disabled selected hidden>Estados</option>
                                    <option value="Acre">Acre</option>
                                    <option value="Alagoas">Alagoas</option>
                                    <option value="Amapá">Amapá</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Bahia">Bahia</option>
                                    <option value="Ceará">Ceará</option>
                                    <option value="Distrito Federal">Distrito Federal</option>
                                    <option value="Espírito Santo">Espírito Santo</option>
                                    <option value="Goiás">Goiás</option>
                                    <option value="Maranhão">Maranhão</option>
                                    <option value="Mato Grosso">Mato Grosso</option>
                                    <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                                    <option value="Minas Gerais">Minas Gerais</option>
                                    <option value="Pará">Pará</option>
                                    <option value="Paraíba">Paraíba</option>
                                    <option value="Paraná">Paraná</option>
                                    <option value="Pernambuco">Pernambuco</option>
                                    <option value="Piauí">Piauí</option>
                                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                                    <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                                    <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                                    <option value="Rondônia">Rondônia</option>
                                    <option value="Roraima">Roraima</option>
                                    <option value="Santa Catarina">Santa Catarina</option>
                                    <option value="São Paulo">São Paulo</option>
                                    <option value="Sergipe">Sergipe</option>
                                    <option value="Tocantins">Tocantins</option>
                                </select>

                                <input class="cidade" maxlength="28"  value={ cidade } onChange={e => setCidade(e.target.value)} placeholder="Cidade" /> 
                        </div>

                        <input type="text"  maxlength="50" value={ email } onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        <input type="password" maxlength="30" value={ senha } onChange={e => setSenha(e.target.value)} placeholder="Senha"/> 
                        <input type="password" maxlength="30" value={ senha2 } onChange={e => setSenha2(e.target.value)} placeholder="Confirmar senha"/> 
                        <button class="button" type="button" onClick={ inserirEmpresa }>Cadastrar</button>
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