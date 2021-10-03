import Header from "../../components/comun/SearchHeader";
import Conteudo from "./Style";
import UserBox from "../../components/comun/SearchUserBox";
import Rodape from "../../components/comun/rodapé";

const Boxes = [
    {empresa:"Pedri Alonso",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Desenvolvedor"},
    {empresa:"Louis Leclerc",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
    {empresa:"Maximilian Verstappen",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
    {empresa:"Felipe Silva",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Desenvolvedor"},
    {empresa:"José Barros",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
    {empresa:"Louís Oliveira",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
]



export default function Pagina9 (){
    return(
        <Conteudo>
                <div class="f10-tudo">
                   <Header bt_empresa={true}/>

                    <div class="f10-filtro1">Resultado:⠀  <div>Desenvolvedor</div></div>
                
                    <div class="f10-areas">

                        <div class="f10-setas">
                            <div class="f10-boxes">                            
                                {Boxes.map ((item) => {
                                    return(
                                        <UserBox empresa={item.empresa != null && item.empresa.length > 19 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={false}/>
                                    );
                                })};
                            </div>
                        </div>

                    </div> 
                    <Rodape />
                </div>

        </Conteudo>
    );
}