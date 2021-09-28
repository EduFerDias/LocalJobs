import styled from "styled-components";

const Conteudo= styled.div`

@font-face {
    font-family: Montserrat;
    src: url(./assets/fonts/Montserrat-Bold.ttf);
  }
  
  @font-face {
    font-family: Regular;
    src: url(./assets/fonts/Montserrat-Regular.ttf);
}


body {
    margin: 0px;
}

* {
    box-sizing: border-box;
    cursor: default;
}
  
div {
    justify-content:
    display: flex;
    flex-direction: column;

    background-image: url("./assets/images/Cadastro e Login/p1-estaiada.png");
    background-size: cover;
    background-repeat: no-repeat;

    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background-color: #fff;

    align-items: center;
}
  
button {
    width: 300px;
    height: 25px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;

    text-align: center;

    color: #ffffff;

    background: #107ad1;
    border-radius: 12px;

    cursor: pointer;

    border: none;

    margin-top: 0.5em;
}
  
button:hover {
    background-color: rgba(0, 85, 255, 1);
}
  
`

export default Conteudo