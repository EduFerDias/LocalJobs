import styled from "styled-components"

const conteudo = styled.div`
.user-interac, .pic{
    display: flex;
    flex-direction: row;
    align-items: center;
}
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: #374957B3;
    padding: 20px 30px 20px 50px;
    
.pic img{
    width: 70px;
    margin-right: 1em;
}

.criar-conta {
    cursor: pointer;
}
.login{
    font-family: Montserrat-Bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 1.5em;
    color: white;
    cursor: pointer;
}
.detalhe{
    background-color: white;
    width: 2px;
    height: 40px;
    margin: 0px 30px 0px 30px;
}
.criar-conta{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #107AD1;    
    color: white;
    font-family: Montserrat-Bold;
    font-size: 1.5em;
    padding:8px 20px;
    border: none;
    border-radius: 9px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

`

export default conteudo;