import Conteudo from "./Style";
import Cabecalho2 from "../../components/comun/cabecalho1";
import Api from "../../services/Api";

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

import { useRef, useState} from "react";

import Cookies from 'js-cookie'

import { useHistory } from "react-router";

import LoadingBar from 'react-top-loading-bar'



let api = new Api();

export default function Pagina7 (){

    const [codigo, setCodigo] = useState("")

    const loading = useRef(null);
    let nav = useHistory();

    async function enviarEmail(){ 
      let r = await api.enviarEmail('diasdu2011@hotmail.com');
      if(r.erro){
        toast.error(r.erro);
        return;
      }
      return;
    }

    async function validarCodigo() {
      loading.current.continuousStart();
      
      let co = Cookies.get('recSenha')
      let cookie = JSON.parse(co);
      
      let r = await api.validarCodigo(cookie.email, codigo)
      let processo =  {
        email: cookie.email,
        code:codigo
      };
      if(r.erro){
        toast.error(r.erro);
        loading.current.complete()
        return;
      }
      Cookies.set('recSenha', JSON.stringify(processo))
      toast.success('codigo certo')

      loading.current.complete()
      nav.push('/recSenha')
      return;
    }


    return(
        <Conteudo>
        <Cabecalho2/>

        <ToastContainer theme="dark"/>
        <LoadingBar color='#f11946' ref={loading} />

        <div class="conteudo-t7">
          <div class="CaixaAlerta-t7">
            <div class="cadeado-t7">
              <img src="../../assets/images/pagina 5,6,7/cadeado-t5.png" alt=""/>
            </div>
            <div class="TituloConteudo-t7">Problema para entrar?</div>
            <div class="TextoConteudo-t7">
              Enviaremos um código para o seu numero de telefone ou seu email para
              que possa voltar a acessar a sua conta.
            </div>
            <div class="reenviar-t7" onClick={enviarEmail}>
              Não recebeu? clique aqui para <b>Reenviar</b>
            </div>
            <div class="codigo-t7">
              <input type="text" name="nome" value={codigo} onChange={e => setCodigo(e.target.value)} placeholder="Código" />
            </div>
            <div class="cfmrCodigo-t7">
              <button onClick={validarCodigo}>Confirmar Código</button>
            </div>
          </div>
        </div>
      </Conteudo>
  
    );
}