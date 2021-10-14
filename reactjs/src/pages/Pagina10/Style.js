import styled from "styled-components";

const Pagina10 = styled.div`
    background-color: #404756;


    .f10-cabecario {
    display: flex;
    flex-direction: row;
    font-family: Montserrat-Bold;
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

.f10-textofiltro {
    font-family: Montserrat-Bold, sans-serif;
    font-size: 2.5em;
    color: white;
    margin-top: 3rem;
    margin-left: 6rem;
    text-shadow: 1px 1px 1px black;
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
}



/* resto do codigo da página */ 

.f10-tudo {
    background-image: url("../../assets/images/pagina 9,10,11,12/f10-fundo.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 0%;
}

/* input e select do filtro */ 

.f10-pesquisa2 {
    justify-content: center;
    display: flex;
}

.f10-pesquisa {
    justify-content: center;
    display: flex;
    margin-top: 4rem;
    background-color: white;
    border-radius: 8px;
    padding-left: 30px;
    padding-right: 10px;
    align-items: center;
    width: 800px;
    height: 50px;
    margin-bottom: 3rem;
}

select {
    background-color: white;
    outline: none;
    border: none;
    font-family: Montserrat-Bold;
    font-size: 1.1em;
    color:rgba(95, 103, 121, 1)
}
input {
    background-color: white;
    outline: none;
    border: none;
    width: 195px;
    font-family: Montserrat-Bold;
    font-size: 1.1em;
}



.f10-cidade input {
    border-radius: 15px;
}

.f10-textofiltro {
    font-family: Montserrat-Bold;
    font-size: 2.5em;
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
    flex-direction: row;
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