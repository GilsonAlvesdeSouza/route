import {useParams} from "react-router-dom";

function Clientes() {
    let {id} = useParams();

    return (
        <div>
            Cliente: {id}
            <p>Lista de clientes</p>
            <ul>
                <li>Fulano</li>
                <li>Ciclano</li>
                <li>Beltrano</li>
            </ul>
        </div>
    );
}

export default Clientes;