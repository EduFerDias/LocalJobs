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