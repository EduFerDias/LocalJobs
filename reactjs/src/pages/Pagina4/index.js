import Conteudo from "./Style";
import { Link } from "react-router-dom";
import Logo2 from "../../components/comun/Logo2";
import Cabecalho2 from "../../components/comun/cabecalho1";

export default function Pagina4 (){
    return(
    <Conteudo>
        <Cabecalho2/>

        <div class="corpo">
            <div class="form">
                <Logo2 />
                <form>
                    <input type="text" placeholder="Nome"/>
                    <div class="f-double">
                        <span class="select-custom">
                            <select name="" id="" >
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
                        
                        <input type="text" placeholder="Profissão" class="tele"/> 
                    </div>

                    <input type="text" placeholder="Telefone"/>
                    <div class="double">
                        <select class="estado" name="estados-brasil" >
                            <option value="Acre" disabled selected>Estados</option>
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

                        <input class="cidade"  placeholder="Cidade" /> 
                    </div>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/> 
                    <input type="password" placeholder="Confirmar senha"/> 
                    <Link to="/page11"><button class="button">Cadastrar</button></Link>
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