import styled from "styled-components"

const Pagina1 = styled.div`

button Link{
    text-decoration: none;
}

.faixa1{
    background-image: url("./assets/images/Cadastro e Login/p1-carteira-de-trabalho-primeiro-emprego-contratar-contratacao-1608066576426_v2_1920x1280\ 2.png");
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
    padding-left: 99px;
    padding-top: 102px;
    padding-bottom: 147px;
}
.f1-text{
    background-color: #374957B3;
    border-radius: 1em;
    width: 460px;
    padding: 0px 0px 0px 2em;
    padding-top: 33px;
    padding-bottom: 72px;
}
.f1-titulo{
    font-family: Montserrat-Bold;
    color: white;
    font-size: 2.3em;
    margin-bottom: 0.312em;
}
.f1-paragraph{
    font-family: Montserrat-regular;
    color: white;
    font-size: 1.7em;
}
.faixa2{
    background-color: #374957;
    display: flex;
    flex-direction: row;
    padding-top: 100px;
    justify-content: space-evenly;
}

.f2-text{
    border-radius: 1em;
    width: 460px;
    padding: 0px 0px 0px 2em;
    padding-bottom: 72px;
    color: white;

}
.f2-titulo{
    font-family: Montserrat-Bold;
    font-size: 2.3em;
    margin-bottom: 0.312em;
}
.f2-paragraph{
    font-family: Montserrat-regular;
    padding-right: 3.125em;
    padding-bottom: 2.625em;
    font-size: 1.7em;
}
.f2-button {
    background-color: #107AD1;    
    color: white;
    font-family: Montserrat-Bold;
    font-size: 1.5em;
    padding: 0.5em 1.25em;
    border: none;
    border-radius: 9px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.f2-img img{
    width: 540px;
}

.faixa-3{
    background-image: url("./assets/images/Cadastro e Login/p1-Rectangle\ 17.png");
}
.botoes{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 95px 0px;
}
.login-usu, .login-empre{
    display: flex;
    flex-direction: row;

    padding: 28px 21px 25px 16px;

    background-color: #374957B3;
    width: 25rem;

    color: white;
    border:none;
    border-radius: 15px;
    text-decoration: none;

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

.faixa-4{
    background-color: #374957;
    padding-top: 104px;
}
.f4-conteudo{
    border-top: #5F6779 solid 5px;
    padding: 60px 100px 60px 100px;
}
.links{
    display: flex;
    flex-direction: row;
    color: white;
    padding-top: 37px;
}
.redes, .nav{
    font-family: Montserrat-Bold;
    font-size: 1.7em;
    width: 7em;
}

.insta, .twitter, .facebook, .sobre, .perfil, .home{
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: Montserrat-regular;
    font-size: 1.4rem;
}
.sobre, .perfil, .home{
    padding:3px 0px;
}
.sobre{
    padding-top: 2.3rem;
}
.twitter img{
    height: 16px;
    padding-right: 15px;
}
.facebook img{
    height: 16px;
    padding-right: 21px;
}
.insta img{
    padding-top: 10px;
    padding-right: 10px;
}

`
export default Pagina1;