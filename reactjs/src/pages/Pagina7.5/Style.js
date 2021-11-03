import styled from "styled-components";

const Pagina7 = styled.div`

@font-face {
  font-family: Montserrat;
  src: url(./assets/fonts/Montserrat-Bold.ttf);
}

@font-face {
  font-family: Montserrat-Regular;
  src: url(./assets/fonts/Montserrat-Regular.ttf);
}

* {
  box-sizing: border-box;
  cursor: default;
}

  display: flex;
  flex-direction: column;

  background-image: url("../../assets/images/pagina 5,6,7/ImagemFundo-t5.png");
  background-size: cover;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;

  color: #fff;

  font-family: Montserrat;
  min-height: 100vh;
  min-width: 1200px;

.cabecalho-t7 {
  display: flex;
  flex-direction: row;

  align-items: center;

  justify-content: space-between;

  background: rgba(95, 103, 121, 0.7);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  height: 90px;

  padding: 0em 4em 0px 4em;
}

.just-t7 {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.logo-t7 img {
  width: 75px;
  height: 50px;
  cursor: pointer;
}

.logo-t7 {
  margin-right: 2em;
}

.DirecionarLogin-t7 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
}

.NomeSite-t7 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
}

.conteudo-t7 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 85vh;
}

.CaixaAlerta-t7 {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background: rgba(5, 0, 0, 0.6);
  width: 370px;
  height: max-content;
  padding: 1em 0px;
  border-radius: 12px;
}

.cadeado-t7 {
  text-align: center;
}

.cadeado-t7 img {
  width: 110px;
  height: 110px;

  text-align: center;
}

.TituloConteudo-t7 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 1.7em;

  text-align: center;

  color: #ffffff;
}

.TextoConteudo-t7 {
  font-family: Montserrat-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 0.85em;
  line-height: 15px;
  text-align: center;

  margin: 0px 0px 10px 0px;

  color: #ffffff;

  width: 260px;
}

.reenviar-t7 {
  font-family: Montserrat-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  text-align: center;

  color: #fff;

  margin: 0px 0px 20px 0px;
}

b {
  cursor: pointer;
}

input {
  width: 300px;
  height: 50px;

  background: #31343e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  margin: 0px 0px 7px 0px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  color: #ffffff;

  border: none;

  cursor: text;
}
.codigo-t7{
  display: flex;
  flex-direction: column;
}
.codigo-t7 span{
  display: flex;
  align-items: center;
  padding-left: 8em;
  padding-top:0.5em;
  padding-bottom: 0.5em;
  flex-direction: row;
}
.checkbox{
  height: 1em;
  width: 1em;
  margin:0.5em;

  color:white;
  background-color: #31343e;
}

.cfmrCodigo-t7 button {
  width: 300px;
  height: 50px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  text-align: center;

  color: #ffffff;

  background: #107ad1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  cursor: pointer;

  border: none;
}

.cfmrCodigo-t7 {
  margin: 0px 0px 10px 0px;
}

.sumi{
  display:none;
}
`

export default Pagina7