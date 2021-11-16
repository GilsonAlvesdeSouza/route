import { useHistory } from "react-router-dom";
function Home() {

    const history = useHistory();

    const handleButton = () => {
        history.replace("/sobre");
    };

    return (
        <div>
            <h1>Seja bem vindo!...</h1>
            <button onClick={() => setTimeout(handleButton, 2000) }>ir para a página sobre</button>
        </div>
    );
}

export default Home;