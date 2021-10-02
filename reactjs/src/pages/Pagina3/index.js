import { Link } from "react-router-dom";
import Logo2 from "../../components/comun/Logo2";
import Conteudo from "./Style"
import Cabecalho2 from "../../components/comun/cabecalho1";


export default function Pagina3(){
    return(
        <Conteudo>
            <Cabecalho2 />
            <div class="corpo">
                <div class="form">
                    <Logo2 />
                    <form>
                        <input type="text" placeholder="Empresa"/>
                        <input type="text" placeholder="CNPJ" />

                        <div class="f-double">
                            <span class="select-custom">
                                <select name="" id="" >
                                    <option value="">Ramo</option>
                                    <option value=""> TI </option>
                                    <option value=""> Servidor </option>

                                </select>
                            </span>
                            <input type="text" placeholder="Telefone" class="tele"/> 
                        </div>

                        <input type="text" placeholder="Estado - Cidade"/>
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/> 
                        <input type="password" placeholder="Confirmar senha"/> 
                        <Link to="/page10"><button class="button">Cadastrar</button></Link>
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