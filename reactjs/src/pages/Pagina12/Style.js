import styled from "styled-components";

const Pagina12 = styled.div`

    background-color: #404756;

/* input e select do filtro */ 
.f10-pesquisa{
    margin-top: 0px;
    margin-bottom: 0px;
}
.f10-filtro1 {
    color: white;
    font-family: Montserrat-Bold, sans-serif;
    margin-top: 1.5em;
    margin-left: 5em;
    font-size: 1.2em;
    margin-bottom: 1.5em;
    text-shadow: 1px 1px 1px black;
    flex-direction: row;
    display: flex;
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
    margin-left: 3.5em;
    padding-bottom: 4em;
}

.f10-boxes {
    margin-top: 2rem;
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

export default Pagina12