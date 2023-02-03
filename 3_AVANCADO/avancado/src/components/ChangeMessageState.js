const ChangeMessageState = ({handleMessage}) => {
    const messages = ["Puta que pariu", "Toma no cú", "Se fude", "Perdeu playboy"];
    
    function changeNumber() {
        return Math.floor(Math.random() * 4);
    }

    return (
        <div>
            <button onClick={() => handleMessage(messages[changeNumber()])}>Clique único</button>
            {/* 
            <button onClick={() => handleMessage(messages[0])}>1</button>
            <button onClick={() => handleMessage(messages[1])}>2</button>
            <button onClick={() => handleMessage(messages[2])}>3</button>
            <button onClick={() => handleMessage(messages[3])}>4</button>
            */}
        </div>
    )
}

export default ChangeMessageState