import Conteudo from "./style";
import Rodape from '../../components/comun/rodapé'
import Header6 from "../../components/comun/header5";
import LoadingBar from 'react-top-loading-bar'
import { JobsHolder } from "../../components/styled/JobHolder/styled";
import { InfoHolder } from "../../components/styled/JobHolder/infoholder";
import { Link } from 'react-router-dom'
import  { useEffect} from 'react'
import React, { useState, useRef  } from 'react';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import Api from '../../services/Api';
const api = new Api();


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_empre');

    if (logado == null) {
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function Pagina19 (props){
    const [vaga, setVagas] = useState([]);

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};

    const [id, setId] = useState(usuarioLogado.id);

    console.log(id)

    const [empresaconfig, setEmpresaConfig] = useState([])
    const [empresa, setEmpresa] = useState([])
    

    const [nome, setNome ] = useState("");
    const [ramo, setRamo ] = useState("");
    const [porte, setPorte ] = useState("");
    const [site, setSite ] = useState("");
    const [descricao, setDescricao ] = useState("");
    const [linkedin, setLinkdin ] = useState("");
    const [insta, setInsta ] = useState("");
    const [twitter, setTwitter ] = useState("");
    const [telefone, setTelefone ] = useState("");
    const [funcionarios, setFuncionarios] = useState("");


    async function ListarVagas() {

        const x = await api.listarVagasIDempresa(id)
        console.log(x)
        if (x.length == 0) {
            console.log("Oi")
        } else {
            setVagas(x)
        }
    }

    async function ListarEmpresa() {
        const a = await api.ListarEmpresaID(id)
        const x = await api.listarEmpresaConfigID(id)
        setEmpresaConfig(x)
        setEmpresa(a)
        setDescricao(x.ds_descricao_empresa);
        setLinkdin(x.ds_linkdin_empresa)
        setInsta(x.ds_instagram_empresa)
        setTwitter(x.ds_twitter_empresa)
        setPorte(x.ds_porte)
        setSite(x.ds_site)
        setFuncionarios(x.qtd_funcionarios)
        setRamo(a.nm_ramo)
        setNome(a.nm_nome)
        setTelefone(a.nr_telefone)
        console.log(a)
        console.log(x)
    }

    console.log(descricao)

    const loading = useRef(null)

    async function SalvarConfig() {
        loading.current.continuousStart(); 
        const x = await api.InserirConfigEmpresa(id,descricao,linkedin,insta,twitter,porte,site,funcionarios)
        const a = await api.alterarEmpresa(id,nome,ramo,telefone)
        console.log(a)
        console.log(x)
        ListarEmpresa();
        loading.current.complete()   
    }

    const logoff = () => {
        Cookies.remove('id_empre');
        navigation.push('/');
    }

    useEffect(() => {
        ListarVagas();
        ListarEmpresa();
    }, []);



    return(
        <Conteudo>
             <LoadingBar color='#f11946' ref={loading} />
            <Header6 />
                <div>
                    <div className="p19-form">
                        <form>
                            <div className="l1"> 
                                <span className="l1-image">
                                    <img src="./assets/images/Pagina18/Group 8.png" alt=""/>
                                </span>
                                <span className="l1-interac">
                                    <span className="l1-input">
                                        <label>Nome:</label>
                                        <input  name="name" value={ nome } onChange={e => setNome(e.target.value)}/>
                                    </span>
                                    <span className="l1-select">
                                        <label>Ramo:</label>
                                        <select id=""  value={ ramo } onChange={e => setRamo(e.target.value)} >
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
                                            <option value="Informática">Informática</option>
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

                                </span>
                            </div>
                            <div className="l2">
                                <div className="l2-interac"> 
                                    <label>Porte:</label>
                                    <select value={ porte } onChange={e => setPorte(e.target.value)}>
                                        <option value="Pequeno"> Pequeno </option>
                                        <option value="Médio"> Médio </option>
                                        <option value="Grande"> Grande </option>
                                    </select>
                                </div>
                                <div className="l2-interac"> 
                                    <label>Site</label>
                                    <input  value={ site } onChange={e => setSite(e.target.value)}/>
                                </div>
                                <div className="l2-interac"> 
                                    <label>Telefone</label>
                                    <input  value={ telefone } onChange={e => setTelefone(e.target.value)}/>
                                </div>
                                <div className="l2-interac"> 
                                    <label>Funcionários</label>
                                    <input  value={ funcionarios } onChange={e => setFuncionarios(e.target.value)}/>
                                </div>
                            </div>
                            <div className="l3">
                                <div className="l3-desc"> 
                                    <label>Descrição</label>
                                    <textarea value={ descricao } onChange={e => setDescricao(e.target.value)}></textarea>
                                </div>
                                <div className="l3-inputs">
                                    <span className="l3-input">
                                        <label>LinkedIn</label>
                                        <input  value={ linkedin } onChange={e => setLinkdin(e.target.value)}/>
                                    </span>

                                    <span className="l3-input">
                                        <label>Instagram</label>
                                        <input value={ insta } onChange={e => setInsta(e.target.value)}/>
                                    </span>

                                    <span className="l3-input">
                                        <label>Twitter</label>
                                        <input  value={ twitter } onChange={e => setTwitter(e.target.value)}/>
                                    </span>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="chat-vagas">
                    <div className="vagasmsn">
                        <div className="vagas">
                            <div className="vagas-titulo"> <h1>Vagas da Athena TI</h1> 
                                <Link to={{ pathname: '/criar-vaga', state: id}}> <img src="./assets/images/Pagina19/Add.png" alt=""/></Link>
                            </div>
                            
                            <JobsHolder className="darkgrey-scroll">
                                {vaga.map(item => 
                                    
                                    <div className="box-vaga">
                                        <Link to={{ pathname: '/criar-vaga', state: item.id_vaga } }>
                                                <div className="box-titulo" > {item.ds_profissao != null && item.ds_profissao.length > 80 ?item.ds_profissao.substr(0, 15) + '...' :item.ds_profissao} </div>
                                        </Link>
                                        <div className="box-paragrafo"> 
                                            {item.ds_descricao != null && item.ds_descricao.length > 80 ?item.ds_descricao.substr(0, 15) + '...' :item.ds_descricao} <span className="veja-m">Veja Mais</span>
                                        </div>

                                        <div className="box-detalhes">
                                            <b>1 vaga | {item.ds_local_trabalho} |</b> De {item.ds_salario_de} a R$ {item.ds_salario_a}
                                        </div>
                                    </div>
                                
                                )}
                            </JobsHolder>
                        </div>


                        <div className="chat">
                            <div className="mensagens">
                                <div className="msg-titulo">Mensagens <span className="notificacao">4</span></div>
                                    <div className="box-mensagem">
                                        <span>
                                            <div className="usuario-chat">
                                                <img src="./assets/images/Pagina14/img-chat.png" alt="img-chat"/>
                                                <h1>Usuário</h1>
                                            </div>
                                            <div className="box-mensagem-meio">
                                                <span className="mensagem-mais-recente">Olá, tudo bem?</span>
                                            </div>
                                        </span>

                                        <div className="box-mensagem-baixo">
                                            <input  placeholder="Enviar Mensagem" />
                                            <img src="./assets/images/Pagina14/enviar.png" alt="enviar" />                   
                                        </div>            
                                    </div>
                                </div>
                        </div>

                    </div>

                    </div>
                    <div className="gerenc-perf">
                        <div className="recib">
                            <div className="linkedin">
                                <div className="lkn-titulo">LikedIn recibidos: 4</div>
                                <InfoHolder className="darkgrey-scroll">

                                    <div className="linkedin-box">
                                        <img src="./assets/images/Pagina19/LinkedIn (2).png" alt="" />
                                        <div className="nm-vaga">
                                            <div className="nome">Úsuario</div>
                                            <div className="vaga">Vagas</div>
                                        </div>
                                    </div>

                                    <div className="linkedin-box">
                                        <img src="./assets/images/Pagina19/LinkedIn (2).png" alt="" />
                                        <div className="nm-vaga">
                                            <div className="nome">Úsuario</div>
                                            <div className="vaga">Vagas</div>
                                        </div>
                                    </div>

                                </InfoHolder>
                            </div>
                            <div className="curriculo">
                                 <div className="cv-titulo">Curriculos Recibidos: 4</div>
                                 <InfoHolder className="darkergrey-scroll">

                                    <div className="curriculo-box">
                                        <img src="./assets/images/Pagina19/Resume (1).png" alt="" />
                                        <div className="nm-vaga">
                                            <div className="nome">Úsuario</div>
                                            <div className="vaga">Vagas</div>
                                        </div>
                                    </div>

                                    <div className="curriculo-box">
                                        <img src="./assets/images/Pagina19/Resume (1).png" alt="" />
                                        <div className="nm-vaga">
                                            <div className="nome">Úsuario</div>
                                            <div className="vaga">Vagas</div>
                                        </div>
                                    </div>

                                    <div className="curriculo-box">
                                        <img src="./assets/images/Pagina19/Resume (1).png" alt="" />
                                        <div className="nm-vaga">
                                            <div className="nome">Úsuario</div>
                                            <div className="vaga">Vagas</div>
                                        </div>
                                    </div>

                                    <div className="curriculo-box">
                                        <img src="./assets/images/Pagina19/Resume (1).png" alt="" />
                                        <div className="nm-vaga">
                                            <div className="nome">Úsuario</div>
                                            <div className="vaga">Vagas</div>
                                        </div>
                                    </div>

                                    <div className="curriculo-box">
                                        <img src="./assets/images/Pagina19/Resume (1).png" alt="" />
                                        <div className="nm-vaga">
                                            <div className="nome">Úsuario</div>
                                            <div className="vaga">Vagas</div>
                                        </div>
                                    </div>


                                </InfoHolder>
                            </div>
                        </div>
                        <div className="gerenc-buttons">
                            <button className="delete" onClick={logoff}>Sair</button>
                            <button className="save" onClick={() => SalvarConfig(id)}>Salvar</button>
                        </div>
                    </div>
                </div>

            <Rodape />
        </Conteudo>
    );
}