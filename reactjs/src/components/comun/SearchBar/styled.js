import styled from "styled-components";

const Conteudo = styled.div`
display: flex;
flex-direction:column;
align-items: center;

.f10-pesquisa2 {
    justify-content: center;
    width: 860px;
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
    width: 100%;
    height: 50px;
    margin-bottom: 3rem;
}

select {
    background-color: white;
    outline: none;
    border-radius: 1px;
    border: none;
    font-family: Montserrat-Bold, sans-serif;
    font-size: 1.1rem;
    color:rgba(95, 103, 121, 1)
}
input {
    background-color: white;
    outline: none;
    border: none;
    width: 195px;
    font-family: Montserrat-Regular;
    font-size: 1.1rem;
}



.f10-cidade input {
    border-radius: 15px;
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

.f10-imagem img {
    height: 64px;
    width: auto;
    margin-left: 1em;
    margin-right: 3em;
    cursor: pointer;
}

hr {
    border: 0.2px solid #5F6779;
    margin: 1em;
    opacity: 80%;
    height: 30px;
}


`

export default Conteudo