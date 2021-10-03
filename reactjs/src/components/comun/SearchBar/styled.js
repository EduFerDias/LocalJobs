import styled from "styled-components";

const Conteudo = styled.div`

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
    width: 700px;
    height: 50px;
    margin-bottom: 3rem;
}

select {
    background-color: white;
    outline: none;
    border: none;
    font-family: Montserrat-Bold, sans-serif;
    font-size: 1.1em;
    color:rgba(95, 103, 121, 1)
}
input {
    background-color: white;
    outline: none;
    border: none;
    width: 195px;
    font-family: Montserrat-Bold, sans-serif;
    font-size: 1.1em;
}



.f10-cidade input {
    border-radius: 15px;
}

.f10-textofiltro {
    font-family: Montserrat-Bold, sans-serif;
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
    height: 30px;
    opacity: 80%;
}

`

export default Conteudo