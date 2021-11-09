import styled from "styled-components"

const Pagina14 = styled.div`

 background-color: #404756;
 font-family: Montserrat-regular;

.container{
    margin: 2em 4em 4em 5em;
    color: white;
}

.cabecalho{
    background-color: #107AD1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 1em 1em 1em;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    min-height: 7em;
    align-items: center;
}

.informacoes-usuario{
    max-width: 50em;
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 13em;
    line-height: 1.5em;
}

.informacoes-usuario p{
    margin: 5px;
}

.imagem-cabecalho img{
    width: 150px;
}
.imagem-cabecalho{
    margin-right: 2em;
    position: absolute;
    margin-top: 4em;
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
    padding-top: 1em;
    min-width: 6.5em;
    font-size: 14px;
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
    font-size: 30px;
}

.pr{
    font-family: Montserrat-regular;
    font-size: 20px;
}

.es{
    font-family: Montserrat-semiBold;
    font-size: 25px;
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
    font-size: 40px;
    font-family: Montserrat-Bold;
    line-height: 1px;
}
.informacoes-painel textarea{
    height: 20em;
    width: 100%;
    font-family: Montserrat-regular;
    border:none;
    resize: none;
    background-color: transparent;
    color: white;
}
.informacoes-painel textarea::placeholder{
    color:white;
    font-size: 1em;
}
.redes-sociais{
    font-size: 30px;
    font-family: Montserrat-Bold;
    line-height: 1px;
}

.rede-social{
    font-size: 20px;
    font-family: Montserrat-regular;
    display: flex;
    align-items: center;
}

.rede-social img{
    width: 40px;
}

.idiomas h1{
    font-size: 30px;
    font-family: Montserrat-Bold;
    margin-bottom: 1.2em;
    margin-top: 1em;
}

.idiomas h2{
    font-size: 25px;
    font-family: Montserrat-regular;
    font-weight: 500;
}

.idiomas{
    line-height: 7px;
    margin-left: 9em;
}

.div-vagas-interesse h1{
    font-size: 40px;
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
    font-size: 32px;
    font-family: Montserrat-regular;
    background-color: #107AD1;
    padding: 0.2em;
    border-radius: 40px;
    text-align: center  ;
    min-width: 10%;
    margin-right: 0.5em;
}

.div-mensagem{
    font-size: 20px;
    font-family: Montserrat-Bold;
    margin-top: 3em;
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
    max-width: 35vw;
    min-height: 350px;
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
    height: 60px
}

.box-mensagem-baixo input{
    border-radius: 50px;
    border: none;
    background-color: #107AD1;
    width: 400px;
    height: 60px;
    color: white;
    font-size: 30px;
    font-family: Montserrat-regular;
    padding-left: 20px;
}

.box-mensagem-baixo input::placeholder{
    color: white;
}
`

export default Pagina14;