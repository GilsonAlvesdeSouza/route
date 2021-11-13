import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Clientes, Home, Sobre } from "./pages";

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
              <Link to="/clientes/1">Clientes1</Link>
            </li>
            <li>
              <Link to="/clientes/2">Clientes2</Link>
            </li>
            <li>
              <Link to="/clientes/3">Clientes3</Link>
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
        </Routes>

        <Routes>
          <Route path="/clientes/:id" element={<Clientes />} />
        </Routes>

        <Routes>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      <footer>
        Todos os direitos reservados©️
      </footer>
    </BrowserRouter>
  );
}

export default App;