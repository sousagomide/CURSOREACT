import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 25;
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "#0000FF", padding: "25px", borderTop: "2px solid red"}}>Esse elemento foi estilizado de forma inline</p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      {/* CSS Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título possui classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className="my_title">TESTE</h2>
    </div>
  );
}

export default App;
