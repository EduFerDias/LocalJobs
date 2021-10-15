import styled from "styled-components";

const Conteudo = styled.div`
    background-color: #5F6779;
    color: white;
    font-family: Montserrat-Bold, sans-serif;
    
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

`

export default Conteudo;