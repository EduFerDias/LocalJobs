import Conteudo from './Style'
import Rodape from '../../components/comun/rodapé';
import UserBox from '../../components/comun/SearchUserBox';
import Cabecalho from "../../components/comun/cabecalho3"


const Boxes = [
    {  empresa:"Marie Soluções tecnológicas",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Desenvolvedor"},
    {  empresa:"Padoca do Tobias",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
    {  empresa:"St. Louis Studios",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
    {  empresa:"Marie Soluções tecnológicas",cidade: "São Paulo", area:"TI", salario:1000, profissao: "Desenvolvedor"},
    {  empresa:"Padoca do Tobias",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
    {  empresa:"St. Louis Studios",cidade: "São Paulo", area:"TI", salario: 1000, profissao: "Desenvolvedor"},
]


export default function Pagina12 (){
    return(
        <Conteudo>
            <div class="f10-tudo">
                
                <Cabecalho/>

                <div class="f10-filtro1">Resultado:⠀  <div>Desenvolvedor</div></div>

                <div class="f10-areas">


                <div class="f10-setas">
                    <div class="f10-boxes">
                        {Boxes.map ((item) => {
                            return(
                            <UserBox empresa={item.empresa != null && item.empresa.length > 25 ?item.empresa.substr(0, 15) + '...' :item.empresa} cidade={item.cidade} area={item.area} salario={item.salario} profissao={item.profissao != null && item.profissao.length > 15 ?item.profissao.substr(0, 15) + '...' :item.profissao} bt_empresa={true}/>
                            );
                        })}

                    </div>
                        
                </div>



                </div> 

                <Rodape/>
            </div>
    </Conteudo>

    );
}