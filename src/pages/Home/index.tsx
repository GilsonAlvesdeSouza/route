import { useNavigate } from "react-router";
function Home() {

    let navigate = useNavigate();

    return (
        <div>
            <h1>Seja bem vindo!...</h1>
            <button onClick={() => {setTimeout(() => navigate("/sobre"),2000)}}>ir para a página sobre</button>
        </div>
    );
}

export default Home;