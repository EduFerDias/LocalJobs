import Conteudo from './Style'
import Rodape from '../../components/comun/rodapé';
import UserBox from '../../components/comun/UserBox';
import Cabecalho from "../../components/comun/cabecalho pesquisa"
import Api from '../../services/Api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useList } from '../../Contexts/searchContext';
import { useCidade } from '../../Contexts/cidadeContext';
import { useArea } from '../../Contexts/areaContext';
import { useCargo } from '../../Contexts/cargoContext';

let api = new Api();


export default function Pagina9 (){
    const[usuario, setUsuario] = useState([])

    const {list} = useList();
    const {cidade} = useCidade();
    const {area} = useArea();
    const {cargo} = useCargo();



let encontrarEmrpesa = async ()=> {
    let y = await api.buscaUsu(area, cargo, cidade);
    setUsuario(y)
}


useEffect(() =>{
    encontrarEmrpesa();
},[list])


    return(
        <Conteudo>
                <div class="f10-tudo">
                    <Cabecalho onde={'empresa'} pg={false}/>

                    <div class="f10-filtro1">Resultado:⠀  <div>Desenvolvedor</div></div>
                
                    <div class="f10-areas">

                        <div class="f10-setas">
                            <div class="f10-boxes">                            
                                {usuario.map ((item) => {
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