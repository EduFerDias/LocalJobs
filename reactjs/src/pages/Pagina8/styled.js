import styled from "styled-components";

const Conteudo = styled.div`
height: 100vh;


.container-login {
  margin: auto; 
  padding: 0px;
  background-image: url("./assets/images/Cadastro\ e\ Login/p1-estaiada.png");
    background-attachment:fixed;
  height: 100vh;
}

/* .titulo1-login {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  font-weight: bolder;
  color: white;
} 
   .logo-login {
  display: flex;
  flex-direction: row;
  margin-left: 15px;
  padding-top: 25px;
} */

.conteudo-login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 87.5%;
}

.logo-conteudo-box{
    display: flex;
    flex-direction:column;
    align-items: center;
}

.box-conteudo {
    display: flex;
    flex-direction: column;
    justify-content: center;

  background: rgba(5, 0, 0, 0.6);
  border-radius: 20px;

  padding-bottom: 50px;
  padding-top: 50px;

  height: min-content;
  width: 30vw;
}

.inputs-login {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  justify-content: center;
  align-items: center;
}

.inputs-login input {
  background-color: #31343e;
  font-family: Montserrat-Bold;
  border-radius: 5px;
  border: none;
  padding-top: 10px;
  font-size: 1.2em;
  height: 4vh;
}

.inputs-1-login {
  padding-bottom: 10px;
  margin-bottom: 15px;
  width: 80%;
  padding-left: 10px;
  color: white;
}

.botao-entrar{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.botao-entrar button {
  background-color: #287bbb;
  font-family: Montserrat-Bold;
  color: white;
  border: none;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1.5em;
  font-weight: bolder;
  width: 82.675%;
  cursor: pointer;

}

.botoes-cima button {
  display: flex;
  flex-direction: row;
  background: none;
  border: none;
  font-family: Montserrat-Bold;
  font-size: 0.9vw;
  font-weight: bolder;
  color: white;
  padding-left: 0px;
}

.botoes-cima {
  display: flex;
  flex-direction: row;
  padding: 0px 0.5em;
}

.conta-login{
    align-items: baseline;
}

.sem-conta {
  color: #aaadb0;
  font-size: 0.9vw;
  padding-right: 2px;
}

.crie-aqui {
  color: white;
  font-size: 0.9vw;
  cursor: pointer;
}
.crie-aqui:hover{
    text-decoration: underline;
}
.conta-login{
    padding: 10px 0px;
}

.senha-login {
  padding-top: 10px;
  padding-left: 0px;

  cursor: pointer;

  color: #aaadb0;
}
.senha-login:hover{
    text-decoration: underline;
}


.titulo-conteudo-login {
  font-family: Montserrat-Bold;
  font-weight: bolder;
  display: flex;
  flex-direction: row;
}

.local {
  font-size: 30px;
  color: #041632;
}

.jobs {
  font-size: 30px;
  color: #107ad1;
}

.botoes-cima{
    padding: 1em 9%;
    display: flex;
    justify-content: space-between;
}


.botao-baixo button {
  border: none;
  background: none;
  font-size: 0.9vw;
  color: white;

  padding:0px;

  font-family: Montserrat-Bold;
  font-weight: bolder;

  cursor: pointer;

}

.botao-baixo {
    display: flex;
    flex-direction: row-reverse;
    padding:10px 9%;
}
.botao-baixo button:hover{
    text-decoration: underline;
}

.imagem-cabecalho-login img {
  width: 60px;
}

.imagem-cabecalho-login {
  padding-right: 25px;
  padding-bottom: 5px;
}

.img-conteudo img {
  width: 150px;
}

/* .img-conteudo {
  padding-left: 148px;
  padding-top: 20px;
} */

`

export default Conteudo