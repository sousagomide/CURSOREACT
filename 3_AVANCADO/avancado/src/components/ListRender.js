import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Sara", "Kairos", "Rafaela", "Gomide"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Denecley", age: 31},
        {id: 2, name: "João", age: 28},
        {id: 3, name: "Pedro", age: 44}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <table border="1" style={{borderCollapse: "collapse"}}>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender