import styled from "styled-components";

const Pagina9 = styled.div`

background-color: #404756;

@font-face {
    font-family: Montserrat;
    src: url(./assets/fonts/Montserrat-Bold.ttf);
  }
  
  @font-face {
    font-family: Regular;
    src: url(./assets/fonts/Montserrat-Regular.ttf);
}


.f10-cabecario {
    display: flex;
    flex-direction: row;
    font-family: Montserrat;
    font-size: 1.3em;
    color: white;
    justify-content: space-between;
    align-content: center;
    background-color: rgba(95, 103, 121, 0.7);
    padding: 0.8rem;
    align-content: center;
    align-content: center;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}


.f10-parte1 {
    flex-direction: row;
    display: flex;
    align-items: center;
}

.f10-parte2 {
    flex-direction: row;
    display: flex;
    align-items: center;
}

.f10-logo img {
    height: 50px;
    width: auto;
    margin-left: 3em;
    margin-right: 1em;
    cursor: pointer;
}
.f10-imagem img {
    height: 25px;
    width: auto;
    border-radius: 100%;
    margin-left: 1em;
    margin-right: 3em;
    background-color:#7F8694 ;
    border-radius: 100%;
    padding: 1rem;
    cursor: pointer;
}

.f10-nome {
    cursor: pointer;
}


/* input e select do filtro */ 

.f10-pesquisa2 {
    justify-content: center;
    display: flex;
}

.f10-pesquisa {
    justify-content: center;
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding-left: 5px;
    align-items: center;
    width: 680px;
    height: 50px;
}

select {
    background-color: white;
    outline: none;
    border: none;
    font-family: Montserrat;
    font-size: 0.8em;
    color:rgba(95, 103, 121, 1)
}
input {
    background-color: white;
    outline: none;
    border: none;
    width: 195px;
    font-family: Montserrat;
    font-size: 0.8em;
}



.f10-cidade input {
    border-radius: 15px;
}

.f10-textofiltro {
    font-family: Montserrat;
    font-size: 1.5em;
    color: white;
    margin-top: 3rem;
    margin-left: 6rem;
    text-shadow: 1px 1px 1px black;
}

.f10-filtrosimg img {
    width: 29px;
    height: 29px;
    margin-right: 1em;
}

.f10-lupa img {
    margin-top: 6px;
    width: 29px;
    height: 29px;
    margin-right: 1em;
    cursor: pointer;
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
    font-family: Montserrat;
}


.f10-filtro1 {
    color: white;
    font-family: Montserrat;
    margin-top: 1.5em;
    margin-left: 5.7em;
    font-size: 1.2em;
    margin-bottom: 1.5em;
    text-shadow: 1px 1px 1px black;
    flex-direction: row;
    display: flex;
}


.f10-box {
    margin-left:2.5em;
    margin-bottom: 2.5em;
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
    font-family: Regular;
}

.f10-data {
    font-family: Regular ;
    cursor: pointer;
}

.f10-profissao {
    justify-content: row;
    display: flex;
    cursor: pointer;
}

.f10-barra {
    margin-left: 10px;
    margin-right: 10px;
}
.f10-filtronome {
    cursor: pointer;
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
    cursor: pointer;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    margin-top: -5em;
    width: auto;
    margin-left: 5.5rem;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.prev {
    background: #2A3244 url("../../assets/images/pagina 9,10,11,12/f10-seta1.png") no-repeat center;
    background-size: 120%;
    transform: rotate(180deg);
    border-radius: 100%;
    padding: 1.2rem;
    
}

.next  {
    background: #2A3244 url("../../assets/images/pagina 9,10,11,12/f10-seta1.png") no-repeat center;
    background-size: 120%;
    transform: rotate(0deg);
    border-radius: 100%;
    padding: 1.2rem;
    margin-left: 90vw;
}

.prev img,.next img {
    height: 3rem;
    width: auto;
    background-color: #2A3244;
    border-radius: 100%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.f10-boxes {
    flex-wrap: wrap;
    display: flex;
    margin-left: 4.5em;
}

.f10-boxes {
    margin-top: 2rem;
}

hr {
    height:5px;
    border-width:0;
    color:#5F6779;
    margin-left: 0px;
    margin-right: 0px;
    margin-top:4em;
    background-color:#5F6779;
}

.f10-redesbaixo img {
    height: 20px;
    width: auto;
}

.f10-redesbaixo {
    font-size: 1rem;
    font-family: Regular;
    color: white;
    cursor: pointer;
}

.f10-navegacao {
    font-size: 1rem;
    font-family: Montserrat;
    color: white;
    flex-direction: column;
    display: flex;
    cursor: pointer;
}

.f10-navegacaobaixo {
    font-size: 1rem;
    font-family: Regular;
    color: white;
    cursor: pointer;
    
}

.f10-redes {
    margin-bottom: 2rem;
    margin-left: 3rem;
    cursor: pointer;
}

.f10-imagembaixo {
    flex-direction: row;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    cursor: pointer;
}

.f10-textobaixo {
    margin-left: 2rem;
    font-size: 1.5rem;
    font-family: Montserrat;
    color: white;
    cursor: pointer;
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
    font-family: Montserrat;
    color: white;
    flex-direction: column;
    display: flex;
}

.f10-redes2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-family: Montserrat;
    color: white;
    flex-direction: column;
    display: flex;
    
}`

export default Pagina9;