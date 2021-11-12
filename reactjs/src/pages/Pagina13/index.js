import Conteudo from './styled'
import Rodape from '../../components/comun/rodapé';
import Cabecalho from "../../components/comun/cabecalho3"
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'
import { useEffect, useState } from 'react';
import Api from '../../services/Api';

let api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('id_usu');

    if (logado == null) {
        return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}
    

export default function Pagina13(props){
    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation) || {};
    
    const [id, setId] = useState(usuarioLogado.id);

    const[nome, setNm] = useState('');
    const[cargo, setCargo] = useState('');
    const[area, setRamo] = useState('');
    const[telefone, setTele]= useState('');
    const[email, setEmail] = useState('');
    const[cidade, setCidade] = useState('');

    const[sobre, setSobre] = useState('');
    const[linkimg, setImg] = useState('')
    const[link2, setImgF] = useState('');
    const[idioma1, setIdioma1] = useState('');
    const[idioma2, setIdioma2] = useState('');
    const[idioma3, setIdioma3] = useState('');
    const[linkdin, setLinked] = useState('');
    const[instagram, setInsta] = useState('');
    const[twitter, setTwitter] = useState('');
    const[vaga_interesse1, setVagaInt1] = useState('')
    const[vaga_interesse2, setVagaInt2] = useState('')
    const[vaga_interesse3, setVagaInt3] = useState('')
    const[experiencias, setExp] = useState('');
    const[formacao, setFormacao] =  useState('');

    async function buscarInfo(){

        let r = await api.buscaUsuId(id)
        let f = await api.buscaUsuConfigId(id) 

        setNm(r.nm_nome)
        setRamo(r.ds_area)
        setCargo(r.ds_cargo)
        setTele(r.nr_telefone)
        setEmail(r.ds_email)
        setCidade(r.ds_estado_cidade)
        setImg(f.ds_link_imagem)
        setImgF(f.ds_link_imagem)


        setSobre(f.ds_sobre)
        setIdioma1(f.ds_idioma1)
        setIdioma2(f.ds_idioma2)
        setIdioma3(f.ds_idioma3)
        setLinked(f.ds_linkedin)
        setInsta(f.ds_instagram)
        setTwitter(f.ds_twiter)
        setVagaInt1(f.ds_vagas_interesse1)
        setVagaInt2(f.ds_vagas_interesse2)
        setVagaInt3(f.ds_vagas_interesse3)
        setExp(f.ds_esperiencias)
        setFormacao(f.ds_formacoes_academicas)

    }

    async function altDados(){
        let r = await api.alterarUsu(id, nome, area, cargo, telefone, cidade, email);
        let f = await api.alterarUsuConfig(id, sobre, idioma1, idioma2, idioma3, linkdin, instagram, twitter, vaga_interesse1, vaga_interesse2, vaga_interesse3, experiencias, formacao,linkimg);

        return toast.success('deu', r, f)
    }

    useEffect(() => {
        buscarInfo()
    }, [])

    return(
        <Conteudo>
            <ToastContainer />
            <div class="tela13" >
                <Cabecalho></Cabecalho>
                <div class="conteudo-tela13">
                    <div class="faixas-tela13">
                        <div class="faixa1">
                            <div class="f1-foto">
                            <img src={link2} alt="" />
                            </div>
                            <div class="f1-nomes">
                            <div class="nomesf1"> Nome: </div>
                            <div class="nomesf1"> Profissão: </div>
                            <div class="nomesf1"> Área: </div>
                            </div>
                            <div class="f1-campos">
                            <div class="f1campo"> <input value={nome} onChange={e => setNm(e.target.value)}/> </div>
                            <div class="f1campo"> <input value={cargo} onChange={e => setCargo(e.target.value)}/> </div>
                            <div class="f1campo"> <select name="" id="" value={area} onChange={e => setRamo(e.target.value)}>
                                <option value="" disabled selected hidden> </option>
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
                            </select> </div>
                            </div>
                        </div>
                        <div class="faixa2">
                            <div class="f2Caixa1">
                            <div class="nomesf2"> Telefone: </div>
                            <div class="campof2"> <input value={telefone} onChange={e => setTele(e.target.value)}/> </div>
                            </div>
                            <div class="f2Caixa2">
                            <div class="nomesf2"> URL Foto de Perfil: </div>
                            <div class="campof2"> <input  value={linkimg} onChange={e=> setImg(e.target.value)}/> </div>
                            </div>
                            <div class="f2Caixa3">
                            <div class="nomesf2"> Cidade: </div>
                            <div class="campof2"> <input value={cidade} onChange={ e => setCidade(e.target.value)}/> </div>
                            </div>
                        </div>
                        <div class="faixa3">
                            <div class="sobrf3"> Sobre: </div>
                            <div class="campotextt13"> <textarea value={sobre} onChange={e => setSobre(e.target.value)}> </textarea> </div>
                        </div>
                    </div>
                    <div class="faixa4">
                            <div class="f4Caixa1">
                                <div class="nomes1f4"> Idiomas: </div>
                                <div class="campocx1f4"> <input value={idioma1} onChange={e => setIdioma1(e.target.value)}/> </div>
                                <div class="nomes2f4"> Linkdin: </div>
                                <div class="campocx1f4"> <input value={linkdin} onChange={e => setLinked(e.target.value)}/> </div>
                                <div class="nomes3f4"> Vagas de Interese:</div>
                                <div class="campocx1f4"> <input value={vaga_interesse1} onChange={e => setVagaInt1(e.target.value)}/> </div>
                            </div>
                            <div class="f4Caixa2">
                                <div class="campokio2f4"> <input value={idioma2} onChange={e => setIdioma2(e.target.value)}/> </div>
                                <div class="nomes2f4"> Instagram: </div>
                                <div class="campoinstaf4"> <input value={instagram} onChang={e => setInsta(e.target.value)}/> </div>
                                <div class="campovags2f4"> <input value={vaga_interesse2} onChange={e => setVagaInt2(e.target.value)}/> </div>
                            </div>
                            <div class="f4Caixa3">
                                <div class="campoidio3f4"> <input  value={idioma3} onChange={e => setIdioma3(e.target.value)}/> </div>
                                <div class="nomes2f4"> Twitter: </div>
                                <div class="campotwttf4"> <input value={twitter} onChange={e => setTwitter(e.target.value)}/> </div>
                                <div class="campovags3f4"> <input value={vaga_interesse3} onChange={e => setVagaInt3(e.target.value)}/> </div>
                            </div>
                    </div>

                    <div class="faixa5">
                        <div class="expf5"> Experiencias: </div>
                        <div class="campotextt13"> <textarea value={experiencias} onChange={e => setExp(e.target.value)}> </textarea> </div>
                        <div class="formsf5"> Formações Academicas: </div>
                        <div class="campotextt13"> <textarea value={formacao} onChange={e=> setFormacao(e.target.value)}> </textarea> </div>
                    </div>

                    <div class="faixa6">
                        <div class="btdelf6"> <button> Deletar úsuario </button> </div>
                        <div class="btsavef6"> <button onClick={altDados}> Salvar </button> </div>
                    </div>

                </div>
                <Rodape></Rodape>
            </div>
        </Conteudo>


    );
}