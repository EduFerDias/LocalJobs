import Conteudo from './Style'
import Rodape from '../../components/comun/rodapé';
import UserBox from '../../components/comun/UserBox';
import Cabecalho from "../../components/comun/cabecalho pesquisa"
import Api from '../../services/Api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'; 
import { useList } from '../../Contexts/searchContext';
import { useCidade } from '../../Contexts/cidadeContext';
import { useArea } from '../../Contexts/areaContext';
import { useCargo } from '../../Contexts/cargoContext';
import Cookies, { set } from 'js-cookie';

let api = new Api();


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado');
    if (logado == null) {
        navigation.push('/');
        return null;
    }
    
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}


export default function Pagina9 (){
    const[usuario, setUsuario] = useState([])
    const navigation = useHistory();
    const {list} = useList();
    const {cidade} = useCidade();
    const {area} = useArea();
    const {cargo} = useCargo();

    let usuarioLogado = lerUsuarioLogado(navigation) || {};


let encontrarEmrpesa = async ()=> {
    console.log(area)
    console.log(cargo)
    console.log(cidade)
    let y = await api.buscaUsu(area, cargo, cidade);
    console.log(y)
    setUsuario(y)

}


useEffect(() =>{
    encontrarEmrpesa();
},[list])


    return(
        <Conteudo>
                <div class="f10-tudo">
                    <Cabecalho onde={'empresa'} pg={false}/>

                    <div class="f10-filtro1">Resultado:⠀  <div>{cargo}</div></div>
                
                    <div class="f10-areas">

                        <div class="f10-setas">
                            <div class="f10-boxes">                            
                                {usuario.map ((item) => {
                                    return(
                                        <UserBox 
                                        nome={item.nm_nome != null && item.nm_nome.length > 15 ?item.nm_nome.substr(0, 15) + '...' :item.nm_nome} 
                                        cidade={item.ds_estado_cidade} 
                                        area={item.ds_area != null && item.ds_area.length > 7 ?item.ds_area.substr(0,7) + '...' :item.ds_area} 
                                        profissao={item.ds_cargo != null && item.ds_cargo.length > 15 ?item.ds_cargo.substr(0, 15) + '...' :item.ds_cargo} 
                                        bt_empresa={false}
                                        info={item.id_pessoal}
                                    />                                    );
                                })};
                            </div>
                        </div>

                    </div> 
                    <Rodape />
                </div>

        </Conteudo>
    );
}