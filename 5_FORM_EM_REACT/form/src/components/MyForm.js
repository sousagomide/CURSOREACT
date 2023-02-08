import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        //console.log(e.target.value);
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return (
    <div>
        {/* Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>
            {/* Label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* Textarea */}
            <label>
                <span>Digite sua biografia</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="USER">Usuário</option>
                    <option value="EDITOR">Editor</option>
                    <option value="ADMIN">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
    )
}

export default MyForm