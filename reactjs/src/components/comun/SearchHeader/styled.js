import styled from "styled-components";

const Conteudo = styled.div`

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
    margin-left: 1em;
    margin-right: 3em;
    border-radius: 100%;
    background-color:#7F8694 ;
    padding: 1rem;
    cursor: pointer;
}

.f10-nome {
    cursor: pointer;
}

/*INPUTS E SELECTs*/
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
    height: 50px;
}

select {
    background-color: white;
    outline: none;
    border-radius: 1px;
    border: none;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 0.8em;
    color:rgba(95, 103, 121, 1)
}
input {
    background-color: white;
    outline: none;
    border: none;
    width: 195px;
    font-family: 'Montserrat-Bold', sans-serif;
    font-size: 0.8em;
}



.f10-cidade input {
    border-radius: 15px;
}
.f10-cidade::placeholder{
    font-family: Montserrat-regular;
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