import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);
    const [name, setName] = useState("Gomide");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}
            <h1>IF Ternário</h1>
            {name === "Gomide" ? (
                <div><p>O nome é Gomide</p></div>
            ) : (
                <div><p>Nome não encontrado!</p></div>
            )}
            <button onClick={() => setName("Pedro")}>Clique aqui!</button>
        </div>
    )
}

export default ConditionalRender