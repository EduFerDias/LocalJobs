import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pagina from "./pages/paginass";
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/Pagina3";
import Pagina4 from "./pages/Pagina4";
import Pagina5 from "./pages/Pagina5";
import Pagina6 from "./pages/Pagina6";
import Pagina7 from "./pages/Pagina7";
import Pagina9 from "./pages/Pagina9";
import Pagina10 from "./pages/Pagina10";
import Pagina11 from "./pages/Pagina11";
import Pagina12 from "./pages/Pagina12";
import Pagina14 from "./pages/Pagina14";
import Pagina15 from "./pages/Pagina15";

/*
As pgs 15 e 14 Presizam de uma revisao
*/

export default function Rotas (){
    return(
        <BrowserRouter>
            <Switch>
            <Route path="/" component={Pagina} exact={true}/>
                <Route path="/home" component={Pagina1} />
                <Route path="/cadastros" component={Pagina2} />
                <Route path="/cadastro-empresa" component={Pagina3} />
                <Route path="/cadastro-candidato" component={Pagina4} />
                <Route path="/esqueceu-senha" component={Pagina5} />
                <Route path="/pagina7" component={Pagina7} />
                <Route path="/page9" component={Pagina9} />
                <Route path="/page10" component={Pagina10} />
                <Route path="/page11" component={Pagina11} />
                <Route path="/page12" component={Pagina12} />
                <Route path="/page14" component={Pagina14} />
                <Route path="/page15" component={Pagina15} />
                <Route path="*" component={Pagina6}/>
            </Switch>
        </BrowserRouter>
    );
}
/*
*/