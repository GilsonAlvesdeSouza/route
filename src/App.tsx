import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Clientes, Home, NotFound, Sobre } from "./pages";

function App() {

 

  return (
    <BrowserRouter>
      <header>
        <h1>Meu Site</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clientes?pessoa=fisica">Clientes1</Link>
            </li>
            <li>
              <Link to="/clientes?pessoa=juridica">Clientes2</Link>
            </li>
            <li>
              <Link to="/clientes?pessoa=fisica">Clientes3</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/quem-somos" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        Todos os direitos reservados©️
      </footer>
    </BrowserRouter>
  );
}

export default App;