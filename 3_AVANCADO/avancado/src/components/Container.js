const Container = ({children, myValue}) => {
    return (
        <div>
            <h2>Este é o título do CONTAINER e a propriedade {myValue}</h2>
            {children}
        </div>
    )
}

export default Container