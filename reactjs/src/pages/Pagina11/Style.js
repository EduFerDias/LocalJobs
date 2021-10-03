import styled from "styled-components";

const Pagina11 = styled.div`

background-color: #404756;

    background-image: url("../../assets/images/pagina 9,10,11,12/f10-fundo.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0% 0%;




.f10-filtro1 {
    color: white;
    font-family: Montserrat-Bold, sans-serif;
    margin-top: 1.5em;
    margin-left: 4em;
    font-size: 1.8em;
    margin-bottom: 1.5em;
    text-shadow: 1px 1px 1px black;
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

export default Pagina11