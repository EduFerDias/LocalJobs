import styled from "styled-components";

const Rodape = styled.div`
    background-color: #404756;
    padding-top: 104px;

.f4-conteudo{
    border-top: #5F6779 solid 5px;
    padding: 60px 100px 60px 100px;
}
.links{
    display: flex;
    flex-direction: row;
    color: white;
    padding-top: 37px;
}
.redes, .nav{
    font-family: Montserrat-Bold;
    font-size: 1.7em;
    width: 7em;
}
.redes {
    cursor: pointer;
}
.insta, .twitter, .facebook, .sobre, .perfil, .home{
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: Montserrat-regular;
    font-size: 1.4rem;
}
.sobre, .perfil, .home{
    padding:3px 0px;
}

a {
    color: white;
}
.sobre{
    padding-top: 2.3rem;
}
.twitter img{
    height: 16px;
    padding-right: 15px;
}
.facebook img{
    height: 20px;
    padding-right: 17px;
}
.insta img{
    padding-top: 10px;
    padding-right: 10px;
}
`

export default Rodape