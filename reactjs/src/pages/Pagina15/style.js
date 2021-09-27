import styled from "styled-components"

const Pagina15 = styled.div`

   background-color: #404756; 

.container{
    margin: 2em 3em 4em 3em;
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
    min-height: 14em;
    align-items: center;
}

.informacoes-usuario{
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 20em;
    line-height: 3em;
}

.informacoes-usuario p{
    margin: 5px;
}

.imagem-cabecalho img{
    width: 250px;
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
    width: 150px;
    min-height: 3em;
    text-align: center;
    margin-top: 1em;
    padding-top: 1em;
    min-width: 13em;
    font-size: 21px;
    font-family: Monteserrat-Bold;
}

.cab-esquerda{
    display: flex;
    flex-direction: row;
}

.nm{
    font-size: 60px;
    font-family: Monteserrat-Bold;
}

.pr{
    font-size: 50px;
    font-family: Montserrat-semiBold;
}

.painel-central{
    margin-top: 10em;
}

.painel-central h1{
    font-family: Monteserrat-Bold;
    font-size: 80px;
}

.caracteristicas h1{
    font-size: 50px;
    font-family: Monteserrat-Bold;
}

.caracteristicas p{
    font-size: 20px;
    font-family: Montserrat-regular;
}

.esquerda-cima{
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
}

.caracteristicas-direita h1{
    font-family: Monteserrat-Bold;
    font-size: 40px;
}

.caracteristicas-direita p{
    font-family: Montserrat-regular;
    font-size: 40px;
}


.box-dados-empresa{
    background-color: #2A3244;
    border-radius: 20px;
    margin-left: 1.3em;
    display: flex;
    flex-direction: column;
    line-height: 0.1em;
    padding: 1em 1em 1em 2em;
    font-size: 40px;
    font-family: Montserrat-regular;
}

.box-dados-empresa span{
    font-family: Monteserrat-Bold;
}

.dados-empresa h1{
    font-size: 60px;
    font-family: Monteserrat-Bold;
    margin-left: 1em;
}


.div-mensagem{
    font-size: 60px;
    font-family: Monteserrat-Bold;
    margin-top: 2em;
}

.usuario-chat img{
    width: 120px;
    height: 120px;
}

.usuario-chat h1{
    font-size: 50px;
    font-family: Monteserrat-Bold;
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
    min-height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.box-mensagem-baixo{
   display: flex;
   flex-direction: row;
   align-items: center;
   margin: 0em 0em 0.8em 0.5em;
}

.box-mensagem-baixo img{
    margin-left: 0.2em;
}

.box-mensagem-baixo input{
    border-radius: 50px;
    border: none;
    background-color: #107AD1;
    width: 580px;
    height: 72px;
    color: white;
    font-size: 40px;
    font-family: Montserrat-regular;
    text-align: center;
}

.box-mensagem-baixo input::placeholder{
    color: white;
}

.enviar-curriculo-linkedin{
    display: flex;
    flex-direction: row;
    background-color: #0D62A7;
    border-radius: 20px;
    margin-left: 1em;
    font-size: 70px;
    font-family: Monteserrat-Bold;
    text-align: center;
    margin-top: 1em;
    min-width: 44vw;
    min-height: 3em;
    align-items: center;
    justify-content: center;
}

.enviar-curriculo-linkedin img{
    width: 77px;
}`

export default Pagina15;