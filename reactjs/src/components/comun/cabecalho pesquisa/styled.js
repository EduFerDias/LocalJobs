import styled from "styled-components"

const Conteudo = styled.div`

.f10-cabecario {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3em;
    color: white;
    justify-content: space-between;
    align-content: center;
    background-color: rgba(95, 103, 121, 0.7);
    padding: 0.8rem;
    align-content: center;
}

.f10-cargo {
    font-family: Montserrat-regular;
}

.oi {
    display: flex;
    flex-direction: row;
    font-family: Montserrat-Bold;
    font-size: 1em;
    color: white;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    cursor: pointer;
}

.f10-parte2 {
    font-family: Montserrat-Bold;
}

.f10-filtrosimg img {
    margin:0px;
}

.f10-cargo input {
    width: 80px;
}

f10-nome {
    font-family: Montserrat-Bold;
    cursor: pointer;
    margin-left: 2em;
}

f10-nome2 {
    margin-right: 2em;
    cursor: pointer;
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
    margin: 0px 1em;
    width: auto;
}
.f10-imagem img {
    height: 64px;
    width: auto;
    margin-left: 1em;
    margin-right: 3em;
    cursor: pointer;
}
.f10-pesquisa2 {
    justify-content: center;
    display: flex;
}

.f10-pesquisa {
    justify-content: center;
    display: flex;
    background-color: white;
    border-radius: 8px;
    padding-left: px;
    align-items: center;
    height: 50px;
}


select {
    background-color: white;
    outline: none;
    border-radius: 1px;
    border: none;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 0.8em;
    color:rgba(95, 103, 121, 1);
    margin-left: 0.8em;
}
input {
    background-color: white;
    outline: none;
    border: none;
    width: 170px;
    font-family: Montserrat-regular;
    font-size: 0.8em;
}



.f10-cidade input {
    border-radius: 15px;
}

.f10-textofiltro {
    font-family: 'Montserrat-Bold', sans-serif;
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
    margin-right: 0.8em;
}


`

export default Conteudo;