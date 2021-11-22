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


export default function Pagina12 (props){
        const[empresas, setEmpre] = useState([]);
        const[cargo2, setCargo2] = useState();
        const[vaga, setVaga] = useState([])

        const {list} = useList();
        const {cidade} = useCidade();
        const {area} = useArea();
        const {cargo} = useCargo();

        let Parametros = props.location.state;

    
    let encontrarEmrpesa = async ()=> {
        let y = await api.buscaEmpresa(area, cargo, cidade);
        setEmpre(y)
        setCargo2(cargo);
        if(cargo = ''){
            setCargo2(undefined)
        }
        ListarVagas();
    }

    let ListarVagas = async () =>{
        if(empresas.erro){
            toast.error(empresas.erro)
            return;
        }
        let vaha = await api.listarVagas();
        console.log('as')     
        setVaga(vaha)
    }

    useEffect(() =>{
        encontrarEmrpesa();
    },[list])


    return(
        <Conteudo>
            <div class="f10-tudo">
                
                <Cabecalho onde={'pessoal'} pg={false}/>

                <div class="f10-filtro1">   Resultados para:{cargo2}⠀  <div>{list}</div></div>

                <div class="f10-areas">


                <div class="f10-setas">
                    <div class="f10-boxes">
                    {vaga.filter(e =>{
                        for(var i = 0; i < empresas.length; i++){
                        if(String(e.id_empresa).includes(String(empresas[i].id_empresa)) || e.ds_profissao.includes(cargo2)){
                            console.log('5')     
                            return e;
                        }
                        }
                    }).map(item => 
                    <UserBox
                        descricao={item.ds_descricao} 
                        cidade={item.ds_local_trabalho != null && item.ds_local_trabalho.lenght > 20 ? item.ds_local_trabalho.substr(0, 20) :item.ds_local_trabalho} 
                        profissao={item.ds_profissao}
                        salario={item.ds_salario_de}
                        salarioa={item.ds_salario_a}
                        id={item.id_empresa}
                        vaga={item.vaga} 
                        idvaga={item.id_vaga}
                        formacao={item.ds_formacao}
                        qualificacao={item.ds_qualificacao}
                        tipocontrato={item.ds_tipo_contratacao}
                        beneficios={item.ds_beneficios}
                        hora={item.ds_hora_trabalho}
                        bt_empresa={true}
                    />
                    
                )}

                    </div>
                        
                </div>



                </div> 

                <Rodape/>
            </div>
    </Conteudo>

    );
}