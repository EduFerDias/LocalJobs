import styled from "styled-components";

const Pagina4 = styled.div`

    background-image: url("./assets/images/Cadastro\ e\ Login/p1-estaiada.png");
    background-repeat: no-repeat;
    background-attachment:fixed;


.corpo{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 4em;
    padding-bottom: 4em;
}
.form{
    background-color:#05000099;
    border-radius: 20px;
    padding:20px 50px;
}

.form input, .form select{
    color: white;
    background-color: #31343E;
    border: none;
    border-radius: 10px;
    padding: 1em 0.345em;
    margin: 0.625rem 0px;
    font-family: Montserrat-regular;
    font-size: 1em;
}
.form select{
    border: none;
}
.form select:hover{
    background-color: #31343E;
}
.form input::placeholder{
    color: white;
}
.form form{
    display: flex;
    flex-direction: column;
}
.select-custom{
    color: white;
    background-color: #31343E;
    border: none;
    border-radius: 10px;
    padding: 1em 0em 1em 0.345em;
    font-family: Montserrat-regular;
    font-size: 1em;


    background-image: url("./assets/images/Cadastro\ e\ Login/p1-1693755\ 1.png");
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: 20px center;
    padding-left: 60px;
    margin-right: 5px;
    padding-right: 5px;
}
.f-double select{
    background-image: url("./assets/images/Cadastros_Forms/p3-25243\ 1.png");
    background-repeat: no-repeat;
    background-position: right center;
    width: 10.5rem;
    background-size: 1rem 1rem;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
}
.f-double select:focus{
    background-image: url("./assets/images/Cadastros_Forms/p3-Rotacionador.png");
}

.f-double input{
    background-image: url("./assets/images/Cadastros_Forms/p3-prof.png");
    background-repeat: no-repeat;
    background-position: 10px center;
    width: 11.375rem;
    background-size: 1.5rem 1.5rem;
    padding-left: 2.5rem;
    margin: 0px 0px 0px 5px;
}
.button{
    background-color: #107AD1;    
    color: white;
    font-family: Montserrat-Bold;
    font-size: 1.5em;
    padding: 0.5em 1.25em;
    border: none;
    border-radius: 9px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 5px;
    width: 100%;
}

.button a{
    width: 100%;
}


.f1-conta{
    display: flex;
    flex-direction: row;

    font-family: Montserrat-Bold;
    font-size: 0.8em;

    padding: 2em 0em;

    color: #C1C1C1;
    cursor:default;
}
.f1-conta span{
    color: #fff;
    flex-grow: 1;
}
.f1-conta span:hover{
    text-decoration: underline;
}
`

export default Pagina4;