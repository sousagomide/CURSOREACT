const UserDetails = ({listPeople}) => {
    
    function isHabilitacao(age){
        if(age < 18)
            return <font color="#FF0000"><b>NÃO PERMITIDO</b></font>;
        else
            return <font color="#00AA00"><b>PERMITIDO</b></font>;
    }
    
    return (
        <div>
            <div className="divTable">
                <div className="divTableBody">
                    <div className="divTableRow">
                        <div className="divTableCell"><b>Nome</b></div>
                        <div className="divTableCell"><b>Idade</b></div>
                        <div className="divTableCell"><b>Profissão</b></div>
                        <div className="divTableCell"><b>Habilitado CNH?</b></div>
                    </div>
                    {listPeople.map((user) => (
                        <div className="divTableRow" key={user.id}>
                            <div className="divTableCell">{user.name}</div>
                            <div className="divTableCell">{user.age}</div>
                            <div className="divTableCell">{user.profession}</div>
                            <div className="divTableCell">{isHabilitacao(user.age)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserDetails