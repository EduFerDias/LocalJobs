import styled from "styled-components";

const Pagina2 = styled.div`
.faixa1{
    background-image: url("./assets/images/Cadastro e Login/p1-estaiada.png");
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100vw;
    background-attachment:fixed;
}
.cabecalho, .user-interac, .pic{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.cabecalho{
    background-color: #374957B3;
    padding: 20px 30px 20px 50px;
}
.logo{
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.logo{
    color: #041632;
    font-size: 1.7em;
    font-family: Montserrat-Bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.logo img{
    width: 70px;
    margin-right: 0.5em;
}
.dark{
    color: #107AD1;
}
.pic img{
    width: 70px;
    margin-right: 1em;
}
.login{
    font-family: Montserrat-Bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.5em;
    color: white;
}
.detalhe{
    background-color: white;
    width: 2px;
    height: 40px;
    margin: 0px 30px 0px 30px;
}
.criar-conta{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #107AD1;    
    color: white;
    font-family: Montserrat-Bold;
    font-size: 1.5em;
    padding:8px 20px;
    border: none;
    border-radius: 9px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.corpo{
    display: flex;
    flex-direction: row;
    height: 85%;
    align-items: center;
    justify-content: space-around;

}
.botoes{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 5.9em 12.5em 5.9em 11em;
}
.login-usu, .login-empre{
    display: flex;
    flex-direction: row;

    padding: 18px 11px 15px 16px;

    background-color: #374957B3;
    width: 25rem;

    color: white;
    border:none;
    border-radius: 15px;
}
.login-empre img, .login-usu img{
    height: 108px;
}
.button-text{
    font-family: Montserrat-Bold;
    text-align: left;
    font-size: 2em;
    padding-top: 1rem;
    margin-left: 0.625em;

}

.button-text hr{
    border: 2.5px solid white;
    background-color: white;
    border-radius: 4px;
    margin-bottom: 0px;
}
`
export default Pagina2;