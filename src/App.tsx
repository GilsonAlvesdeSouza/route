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
              <Link to="/clientes">Clientes</Link>
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
          <Route path="/clientes" element={<Clientes />} />
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