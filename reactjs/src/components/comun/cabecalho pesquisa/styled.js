import styled from "styled-components"

const conteudo = styled.div`

.f10-cabecario {
    display: flex;
    flex-direction: row;
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
    width: auto;
}
.f10-imagem img {
    height: 25px;
    width: auto;
    border-radius: 100%;
    background-color:#7F8694 ;
    border-radius: 100%;
}

.f10-pesquisa {
    width: 825px;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 0.3em;
}

.f10-pesquisa2 {
    width: 800px;
}

.f10-imagem {
    margin: 0px;
}

.f10-nome2 {
    margin-left: 0em;
}

.f10-lupa {
    margin: 0px;
}

.f10-lupa img {
    margin-left: 10px;
    cursor: pointer;
}

.f10-lupa {
    cursor: pointer;
}

.f10-filtrosimg {
    margin-right: 0.5em;
}
`

export default conteudo;