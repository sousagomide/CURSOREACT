import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Denecley", email: "denecley.alvim@gmail.com", bio: "Desenvolvedor de TI", role: "ADMIN"}}/>
    </div>
  );
}

export default App;
