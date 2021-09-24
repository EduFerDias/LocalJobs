import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

function Rotas (){
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </BrowserRouter>
}