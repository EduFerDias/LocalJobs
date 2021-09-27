import styled from "styled-components"

const Pagina14 = styled.div`

 background-color: #404756;
 font-family: Montserrat-regular;

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
    max-width: 50em;
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
    margin-top: 5em;
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
    font-family: Montserrat-Bold;
}

.cab-esquerda{
    display: flex;
    flex-direction: row;
}

.painel-central{
    background-color: #2A3244;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 2em 2em 2em 3em;
    margin-top: 10em;
}

.nm{
    font-family: Montserrat-Bold;
    font-size: 60px;
}

.pr{
    font-family: Montserrat-regular;
    font-size: 40px;
}

.es{
    font-family: Montserrat-semiBold;
    font-size: 50px;
}

.baixo-painel{
    display: flex;
    flex-direction: row;
    align-content: center;
}

.informacoes-painel{
    min-height: 25em;
}

.informacoes-painel h1{
    font-size: 60px;
    font-family: Montserrat-Bold;
    line-height: 1px;
}

.redes-sociais{
    font-size: 60px;
    font-family: Montserrat-Bold;
    line-height: 1px;
}

.rede-social{
    font-size: 30px;
    font-family: Montserrat-regular;
    display: flex;
    align-items: center;
}

.rede-social img{
    width: 55px;
}

.idiomas h1{
    font-size: 60px;
    font-family: Montserrat-Bold;
    margin-bottom: 1.2em;
    margin-top: 1em;
}

.idiomas h2{
    font-size: 50px;
    font-family: Montserrat-regular;
}

.idiomas{
    line-height: 7px;
    margin-left: 15em;
}

.div-vagas-interesse h1{
    font-size: 60px;
    font-family: Montserrat-Bold;
}

.div-vagas-interesse{
    display: flex;
    flex-direction: column;
}

.vagas{
    display: flex;
    flex-direction: row;
}

.vaga{
    font-size: 50px;
    font-family: Montserrat-regular;
    background-color: #107AD1;
    border-radius: 40px;
    text-align: center  ;
    min-width: 15%;
    margin-right: 0.5em;
}

.div-mensagem{
    font-size: 60px;
    font-family: Montserrat-Bold;
    margin-top: 3em;
}

.usuario-chat img{
    width: 120px;
    height: 120px;
}

.usuario-chat h1{
    font-size: 50px;
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
    min-height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.box-mensagem-baixo{
   display: flex;
   flex-direction: row;
   align-items: center;
   margin: 0em 0em 0.8em 0.8em;
}

.box-mensagem-baixo img{
    margin-left: 0.5em;
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
`

export default Pagina14;