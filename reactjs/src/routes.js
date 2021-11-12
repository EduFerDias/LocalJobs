import { BrowserRouter, Switch, Route } from "react-router-dom";

//import Pagina from "./pages/paginass";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/Pagina3";
import Pagina4 from "./pages/Pagina4";
import Pagina5 from "./pages/Pagina5";
import Pagina6 from "./pages/Pagina6";
import Pagina7 from "./pages/Pagina7";
import Pagina8 from "./pages/Pagina8";
import Pagina9 from "./pages/Pagina9";
import Pagina10 from "./pages/Pagina10";
import Pagina11 from "./pages/Pagina11";
import Pagina12 from "./pages/Pagina12";
import Pagina14 from "./pages/Pagina14";
import Pagina15 from "./pages/Pagina15";
import Pagina16 from "./pages/Pagina16";
import Pagina18 from './pages/Pagina18'
import Pagina19 from "./pages/Pagina19";

import Pagina13 from "./pages/Pagina13";
import Pagina7_5 from "./pages/Pagina7.5";
import ListProvider from "./Contexts/searchContext";
import AreaProvider from "./Contexts/areaContext";
import CargoProvider from "./Contexts/cargoContext";
import CidadeProvider from "./Contexts/cidadeContext";
/*
As pgs 15 e 14 Precisam de uma revisão
*/

export default function Rotas (){


    return(
        <BrowserRouter>
            <Switch>
            <ListProvider>
                <Route path="/" component={Pagina1} exact={true}/>

                <Route path="/cadastros" component={Pagina2} />

                <Route path="/cadastro-empresa" component={Pagina3} />

                <Route path="/cadastro-candidato" component={Pagina4} />

                <Route path="/login" component={Pagina8} />

                <Route path="/esqueceu-senha" component={Pagina5} />

                <Route path="/codigo" component={Pagina7} />


                <Route path="/recSenha" component={Pagina7_5} />

                
                    <AreaProvider>
                        <CargoProvider>
                            <CidadeProvider >
                                <Route path="/buscar-usu" component={Pagina9} />

                                <Route path="/home-empresa" component={Pagina10} />

                                <Route path="/home-usu" component={Pagina11} />

                                <Route path="/buscar-empresa" component={Pagina12} />
                            </CidadeProvider >
                        </CargoProvider>
                    </AreaProvider>

                    

                <Route path="/usuario" component={Pagina14} />

                <Route path="/vaga" component={Pagina15} />

                <Route path="/criar-vaga" component={Pagina16} />

                <Route path="/empresa" component={Pagina18} />

                <Route path="/config-empresa" component={Pagina19} />

                <Route path="/config-usuario" component={Pagina13} />
            </ListProvider>

                <Route path="/login" component={Pagina8} />


                <Route path="*" component={Pagina6}/>
                
            </Switch>
        </BrowserRouter>
    );
}
