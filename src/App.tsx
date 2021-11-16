import { BrowserRouter, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { Clientes, Home, NotFound, Sobre } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu Site</h1>
        <nav>
          <ul>
            <li>
              <Link className={"link"} to="/">Home</Link>
            </li>
            <li>
              <Link className={"link"} to="/clientes?pessoa=fisica">Clientes1</Link>
            </li>
            <li>
              <Link className={"link"} to="/clientes?pessoa=juridica">Clientes2</Link>
            </li>
            <li>
              <Link className={"link"} to="/clientes?pessoa=fisica">Clientes3</Link>
            </li>
            <li>
              <Link className={"link"} to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/clientes" >
          <Clientes />
        </Route>
        <Route path="/sobre" >
          <Sobre />
        </Route>
        <Route path="/quem-somos">
          <Redirect to="/sobre" />
        </Route>
        <Route path="*" >
          <NotFound />
        </Route>
      </Switch>
      <footer>
        Todos os direitos reservados©️
      </footer>
    </BrowserRouter>
  );
}

export default App;