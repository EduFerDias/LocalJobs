import styled from "styled-components";

const Conteudo = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  background: rgba(95, 103, 121, 0.7);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  height: 90px;

  padding: 0em 4em 0px 4em;
  color: white;

.divisao-t6 {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.logo-t6 img {
  width: 75px;
  height: 50px;
  cursor: pointer;
}

.logo-t6 {
  margin-right: 2em;
}

.nmSite-t6 {
  font-family: Montserrat-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
}

.nmUsuario-t6 {
  font-family: Montserrat-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;

  cursor: pointer;
  margin-right: 2em;
}

.imagenUsuario-t6 img {
  width: 75px;
  height: 75px;
  cursor: pointer;
}

a{
  color: white;
  display: flex;
  flex-direction: row;
  align-items:center; 
}

`
export default Conteudo