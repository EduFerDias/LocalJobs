import Conteudo from "./styled";
import Cabecalho3 from "../../components/comun/cabecalho2";
import { Link, useHistory } from "react-router-dom";
import { useState, useRef } from "react";

import { toast, ToastContainer } from "react-toastify";
import LoadingBar from 'react-top-loading-bar'

import Api from "../../services/Api";
import Cookies from "js-cookie";

let api = new Api();

export default function Pagina8(){
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    const nav =  useHistory();
    let loadin = useRef(null);

    async function enviarEmail(){ 
        let r = await api.enviarEmail(email);

        let js = {
            email:email
        }
        Cookies.set('recSenha', JSON.stringify(js));        

        if(r.erro){
          toast.error(r.erro);
          return;
        }
        nav.push('/esqueceu-senha');
        return;
      }

    async function logar(){
        loadin.current.continuousStart();
        let r = await api.login(email, senha)

        if(r.status === 'error'){

            toast.error(r.mensagem)
            loadin.current.complete()
            return;
        };
        if(r.tp_conta === 'pessoal'){
            loadin.current.complete()
            nav.push('/home-usu')
            Cookies.set('id_usu', JSON.stringify(r))
        }
        else if(r.tp_conta === 'empresarial'){
            loadin.current.complete()
            Cookies.set('id_empre', JSON.stringify(r))
            nav.push('/home-empresa')
        }
        return;
    }



    return(
        <Conteudo>
            <ToastContainer theme="dark"/>
            <LoadingBar color='#f3f3f3' ref={loadin}/>
            <div class="container-login">
            <Cabecalho3 />

            <div class="conteudo-login">
                <div class="box-conteudo">

                <div class="logo-conteudo-box">
                    <div class="img-conteudo">
                    <img src="./assets/images/pagina 5,6,7/logo.png" alt=""/>
                    </div>
                    <div class="titulo-conteudo-login">
                    <h1 class="local">Local</h1>
                    <h1 class="jobs">Jobs</h1>
                    </div>
                </div>

                <div class="inputs-login">
                    <input class="inputs-1-login" value={email} type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    <input class="inputs-1-login" value={senha} type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
                </div>

                <div class="botao-entrar">
                    <button onClick={logar}>Entrar</button>
                </div>

                <div class="botoes2">
                    <div class="botoes-cima">
                    <button class="conta-login">
                        <span class="sem-conta">não tem conta?</span>
                        <span><Link to="/cadastros" class="crie-aqui">crie aqui</Link></span>
                    </button>
                        <button onClick={enviarEmail} class="senha-login">esqueci minha senha</button>
                    </div>

                    <div class="botao-baixo">.
                        <Link to="/paginas">
                            <button >Sobre nós</button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </Conteudo>
    );
}