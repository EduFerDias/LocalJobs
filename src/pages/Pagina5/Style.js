import styled from "styled-components";

const Pagina5 = styled.div`

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

  background-image: url("./assets/images/pagina 5,6,7/ImagemFundo-t5.png");
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

.cabecalho-t5 {
  display: flex;
  flex-direction: row;

  align-items: center;

  justify-content: space-between;

  background: rgba(95, 103, 121, 0.7);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  height: 90px;

  padding: 0em 4em 0px 4em;
}

.just-t5 {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.logo-t5 img {
  width: 75px;
  height: 50px;
  cursor: pointer;
}

.logo-t5 {
  margin-right: 2em;
}

.DirecionarLogin-t5 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
}

.NomeSite-t5 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
}

.conteudo-t5 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 85vh;
}

.CaixaAlerta-t5 {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background: rgba(5, 0, 0, 0.6);
  width: 370px;
  height: 380px;
  border-radius: 12px;
}

.cadeado-t5 {
  text-align: center;
}

.cadeado-t5 img {
  width: 110px;
  height: 110px;

  text-align: center;
}

.TituloConteudo-t5 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;

  text-align: center;

  color: #ffffff;
}

.TextoConteudo-t5 {
  font-family: Montserrat-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  text-align: center;

  margin: 0px 0px 35px 0px;

  color: #ffffff;

  width: 260px;
}

.EnviarNoNumero button {
  width: 300px;
  height: 50px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;

  text-align: center;

  color: #ffffff;

  background: #107ad1;
  border-radius: 12px;

  cursor: pointer;

  border: none;
}

.EnviarNoEmail button {
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

.EnviarNoNumero {
  margin: 0px 0px 7px 0px;
}

.EnviarNoEmail {
  margin: 0px 0px 10px 0px;
}
`

export default Pagina5