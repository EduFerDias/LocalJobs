import Conteudo from "./Style";
import Cabecalho2 from "../../components/comun/cabecalho1";
import Api from "../../services/Api";

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

import { useRef, useState } from "react";
import { useHistory } from 'react-router-dom'

import LoadingBar from 'react-top-loading-bar'
import Cookies from "js-cookie";



let api = new Api();

export default function Pagina7_5 (){

    const [senha, setSenha ] = useState("");
    const [confSenha, setConfirm] = useState("");

    const [vsenha, setVpass] = useState(0)
    const [v, setV] = useState("password")


    const loading = useRef(null);
    const nav = useHistory();


    async function trocarSenha() {
      loading.current.continuousStart(); 
      if(senha !== confSenha){
        toast.error("Ambas as senhas não sao iguais");
        loading.current.complete();
        return;
      }else if(senha === ""){
        toast.error("O campo de senha é obrigatório");
        loading.current.complete();
        return;
      }else if(confSenha === ""){
        toast.error("O campo da confirmação senha é obrigatório");
        loading.current.complete();
        return;
      }
      let i = Cookies.get('recSenha');

      let info = JSON.parse(i);

      let r = await api.trocarSenha(info.email,info.code,senha);

      if(r.erro){
        toast.error(r.erro);
        loading.current.complete();
        return;
      }

      toast.success(r.mensagem)
      loading.current.complete();

      Cookies.remove('recSenha')

      if(r.tp_conta === 'pessoal')
      nav.push('/home-usu')
      else if(r.tp_conta === 'empresarial')
      nav.push('/home-empresa')

      return;
    }

    function revelarSenha(){
      setVpass(vsenha + 1);

      if((vsenha%2) === 1)
      setV("password");
      else
      setV("text");

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
            <div class="TituloConteudo-t7">Falta Pouco!</div>
            <div class="TextoConteudo-t7">
              Por favor insira a nova senha que quer no seu perfil
            </div>

            <div class="codigo-t7">
              <input type={v} name="nome"  value={senha} onChange={e => setSenha(e.target.value)} placeholder="Nova Senha" />
              <input type={v} name="nome"  value={confSenha} onChange={e => setConfirm(e.target.value)} placeholder="Confirmar Nova Senha" />
              <span>
                <label name="mostrarSenha"  id="visu">Visualizar senha</label>
                <input onChange={revelarSenha} className="checkbox" id="visu" type="checkbox" name="mostrarSenha"/>
              </span>
            </div>
            <div class="cfmrCodigo-t7">
              <button onClick={trocarSenha}>Trocar Senha</button>
            </div>
          </div>
        </div>
      </Conteudo>
  
    );
}