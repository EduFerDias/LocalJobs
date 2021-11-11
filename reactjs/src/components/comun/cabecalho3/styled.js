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

  .nmUsuario-t6{
    color: white;
  }

.divisao-t6 {
  display: flex;
  flex-direction: row;

  align-items: center;
}

.logo a{
  display: flex;
  align-items: center;
  color: white;
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

.logo {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo {
  color: #041632;
  font-size: 1.7em;
  font-family: Montserrat-Bold;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.logo img {
  width: 70px;
  margin-right: 0.5em;
}
.dark {
  color: #107ad1;
}

`

export default Conteudo