import { useState } from 'react';
import './App.css';
import Car from './components/Car';

function App() {

  const [carList] = useState([
    {id: 1, name: "147", km: 0, color: "#9999ff"},
    {id: 2, name: "Argo", km: 25000, color: "#00802b"},
    {id: 3, name: "Brava", km: 35489, color: "#662999"},
    {id: 4, name: "Bravo", km: 3521, color: "#ffffff"},
    {id: 5, name: "City", km: 0, color: "#ffffff"},
    {id: 6, name: "Cronos", km: 9854, color: "#990000"},
    {id: 7, name: "Doblò", km: 1458, color: "#ffffff"},
    {id: 8, name: "Ducato", km: 256845, color: "#662999"},
    {id: 9, name: "Elba", km: 78000, color: "#ffff80"},
    {id: 10, name: "Fiorino", km: 0, color: "#000000"}
  ]);

  return (
    <div className="App">
      <h1>CARROS DA FIAT</h1>
      {/* Minha resolução */}
      {/* 
      <CarDetails list={carList} />
      */}
      {/* Resolução do professor */}
      <div className="car-container">
        {carList.map((car) => (
          <Car car={car}/>
        ))}
      </div>
    </div>
  );
}

export default App;
