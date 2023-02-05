import './App.css';
import UserDetails from './components/UserDetails';

function App() {

  const peoples = [
    {id: 1, name: "Denecley Alvim", age: 35, profession: "UBER"},
    {id: 2, name: "Juvenal Cara de Pau", age: 41, profession: "Biologo"},
    {id: 3, name: "Filipinho", age: 14, profession: "NDA"},
    {id: 4, name: "Andarilho", age: 39, profession: "Streamer"},
    {id: 5, name: "Nando Moura", age: 42, profession: "Mestre do Capitalismo"},
    {id: 6, name: "Olavo de Carvalho", age: 82, profession: "Filosofo de Buteco"},
    {id: 7, name: "Paula Marisa", age: 48, profession: "Pseudo-influenciadora"},
    {id: 8, name: "Regina Duarte", age: 65, profession: "Ex-ministra Terra planista"}
  ];


  return (
    <div className="App">
      <UserDetails listPeople={peoples}/>
    </div>
  );
}

export default App;
