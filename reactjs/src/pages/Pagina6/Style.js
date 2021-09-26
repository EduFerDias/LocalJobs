import styled from "styled-components";

const Pagina6 = styled.div`

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

  background-color: #404756;

  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  color: #fff;

  font-family: Montserrat;
  min-height: 100vh;
  min-width: 1200px;

.cabecalho-t6 {
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  background: rgba(95, 103, 121, 0.7);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  height: 90px;

  padding: 0em 4em 0px 4em;
}

.divisao-t6 {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.logo-t6 img {
  width: 75px;
  height: 50px;
  cursor: pointer;
}

.logo-t6 {
  margin-right: 2em;
}

.nmSite-t6 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
}

.nmUsuario-t6 {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
  margin-right: 2em;
}

.imagenUsuario-t6 img {
  width: 75px;
  height: 75px;
  cursor: pointer;
}

.conteudo-t6 {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  min-height: 85vh;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
}

.nrErro-t6 {
  font-size: 120px;
}

.nmErro-t6 {
  font-size: 60px;
}

`

export default Pagina6;