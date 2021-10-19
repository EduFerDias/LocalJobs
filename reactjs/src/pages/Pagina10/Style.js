import styled from "styled-components";

const Pagina10 = styled.div`
    background-color: #404756;

/* resto do codigo da página */ 

.f10-tudo {
    background-image: url("../../assets/images/pagina 9,10,11,12/f10-fundo.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 0%;
}

/* input e select do filtro */ 

.f10-textofiltro {
    font-family: Montserrat-Bold;
    font-size: 2.5em;
    color: white;
    margin-top: 3rem;
    margin-left: 6rem;
    text-shadow: 1px 1px 1px black;
}

hr {
    border: 0.2px solid #5F6779;
    margin: 1em;
    opacity: 80%;
}

/* box */ 



.f10-box {
    background-color: #5F6779;
    color: white;
    font-family: Montserrat-Bold;
}


.f10-filtro1 {
    color: white;
    font-family: Montserrat-Bold;
    margin-top: 1.5em;
    margin-left: 4em;
    font-size: 1.8em;
    margin-bottom: 1.5em;
    text-shadow: 1px 1px 1px black;
}


.f10-box {
    margin-left:2.5em;
    height: 8em;
    width: 20em;
    padding: 1em;
    border-radius: 8px;
    flex-direction: row;
    display: flex;
    align-items: center;
    text-shadow: 0px 2px 2px  black;
    line-height: -1;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.f10-cidade {
    font-family: Montserrat-regular;
}

.f10-data {
    font-family: Montserrat-regular ;
}

.f10-profissao {
    justify-content: row;
    display: flex;
}

.f10-barra {
    margin-left: 10px;
    margin-right: 10px;
}

.carousel-container {
    width: 100%;
    height: 21em;
  }
  

.f10-fotofiltro img {
    margin-right: 2rem;
    height: 3.5rem;
    width: auto;
    background-color:#7F8694 ;
    border-radius: 100%;
    padding: 1rem;
    margin-left: 1rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.f10-boxes {
    flex-direction: row;
    display: flex;
    margin-left: 4.5em;
}

.f10-boxes {
    margin-top: 2.5rem;
}


.f10-redesbaixo img {
    height: 20px;
    width: auto;
}

.f10-redesbaixo {
    font-size: 1rem;
    font-family: Montserrat-regular;
    color: white;
}

.f10-navegacao {
    font-size: 1rem;
    font-family: Montserrat-Bold;
    color: white;
    flex-direction: column;
    display: flex;
}

.f10-navegacaobaixo {
    font-size: 1rem;
    font-family: Montserrat-regular;
    color: white;
    
}

.f10-redes {
    margin-bottom: 2rem;
    margin-left: 3rem;
}

.f10-imagembaixo {
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.f10-textobaixo {
    margin-left: 2rem;
    font-size: 1.5rem;
    font-family: Montserrat-Bold;
    color: white;
}

.f10-rodape {
    margin-top: 3rem;
    margin-left: 3rem;
}

.f10-rodape2 {
   flex-direction: row;
   display: flex;
}

.f10-navegacao2{
    margin-bottom: 3rem;
    font-size: 1.5rem;
    font-family: Montserrat-Bold;
    color: white;
    flex-direction: column;
    display: flex;
}

.f10-redes2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-family: Montserrat-Bold;
    color: white;
    flex-direction: column;
    display: flex;
    
}

`
export default Pagina10;