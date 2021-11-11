import styled from "styled-components"

const Pagina15 = styled.div`

    background-color: #404756; 
    font-family: Montserrat-regular;

.container{
    margin: 2em 6em 4em 5em;
    color: white;
}

.cabecalho{
    background-color: #107AD1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 2em 0px 2em;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    min-height: 10em;
    align-items: center;
}

.informacoes-usuario{
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10em;
    line-height: 2em;
}

.informacoes-usuario p{
    margin: 5px;
}

.imagem-cabecalho img{
    width: 125px;
}
.imagem-cabecalho{
    margin-right: 2em;
    position: absolute;
    margin-top: 3em;
}

.email-telefone{
    display: flex;
    flex-direction: column;

}

.et{
    background-color: #0D62A7;
    border-radius: 40px;
    width: 20vw;
    min-height: 3em;
    text-align: center;
    margin-top: 1em;
    padding-top: 0.5em;
    min-width: 13em;
    font-size: 13px;
    font-family: Montserrat-Bold;
}

.cab-esquerda{
    display: flex;
    flex-direction: row;
}

.nm{
    font-size: 30px;
    font-family: Montserrat-Bold;
}

.pr{
    font-size: 25px;
    font-family: Montserrat-semiBold;
}

.painel-central{
    margin-top: 10em;
}

.painel-central h1{
    font-family: Montserrat-Bold;
    font-size: 35px;
}

.caracteristicas h1{
    font-size: 25px;
    font-family: Montserrat-Bold;
}

.caracteristicas p{
    font-size: 20px;
    font-family: Montserrat-regular;
}
.caract-bold{
    font-family: Montserrat-Bold;
}
.esquerda-cima{
    width: 29em;
    background-color: #2A3244;
    max-width: 40vw;
    border-radius: 20px;
    padding: 1em 2em 1em 2em;
}

.painel-boxes{
    display: flex;
    flex-direction: row;
}


.descricao-direita{
    width: 29em;
    background-color: #2A3244;
    border-radius: 20px;
    padding: 1em 2em 1em 2em;
    margin-left: 3em;
}

.descricao-direita{
    line-height: 1em
}

.caracteristicas-direita{
    margin-top: 3em;
    line-height: 25px;
}

.caracteristicas-direita h1{
    font-family: Montserrat-Bold;
    font-size: 25px;
}

.caracteristicas-direita p{
    font-family: Montserrat-regular;
    font-size: 20px;
}


.box-dados-empresa{
    background-color: #2A3244;
    border-radius: 20px;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    line-height: 0em;
    padding: 1em 1em 1em 2em;
    font-size: 25px;
    font-family: Montserrat-regular;
}

.box-dados-empresa span{
    font-family: Montserrat-Bold;
}

.dados-empresa h1{
    font-size: 35px;
    font-family: Montserrat-Bold;
    margin-left: 3rem;
}


.div-mensagem {
    display: none;
    font-size: 20px;
    font-family: Montserrat-Bold;
    margin-top: 3em;
}
.div-mensagem h1{
    font-size: 45px;
}

.usuario-chat img{
    width: 80px;
    height: 80px;
}

.usuario-chat h1{
    font-size:40px;
    font-family: Montserrat-Bold;
    margin-left: 0.5em;
}

.usuario-chat{
    display: flex;
    flex-direction: row;
    padding: 0.5em 0em 0em 1em;
    align-items: center;
}

.box-mensagem{
    background-color: #2A3244;
    border-radius: 20px;
    max-width: 40vw;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0px;
}

.box-mensagem-baixo{
   display: flex;
   flex-direction: row;
   align-items: center;
   margin: 0em 0em 0.8em 0.8em;
}

.box-mensagem-baixo img{
    margin-left: 0.5em;
    height: 60px
}

.box-mensagem-baixo input{
    border-radius: 50px;
    border: none;
    background-color: #107AD1;
    width: 450px;
    height: 60px;
    color: white;
    font-size: 30px;
    font-family: Montserrat-regular;
    padding-left: 20px;
}

.box-mensagem-baixo input::placeholder{
    color: white;
}

.enviar-email{
    display: flex;
    flex-direction: row;
    background-color: #0D62A7;
    border-radius: 20px;
    margin-left: 3rem;
    font-size: 35px;
    font-family: Montserrat-Bold;
    text-align: center;
    margin-top: 1em;
    min-width: 10vw;
    min-height: 2em;
    align-items: center;
    justify-content: center;
}
.enviar-curriculo-linkedin2{
    display: none;
    flex-direction: row;
    background-color: #0D62A7;
    border-radius: 20px;
    margin-left: 3rem;
    font-size: 35px;
    font-family: Montserrat-Bold;
    text-align: center;
    margin-top: 0.5em;
    min-width: 10vw;
    min-height: 2em;
    align-items: center;
    justify-content: center;
}

`

export default Pagina15;