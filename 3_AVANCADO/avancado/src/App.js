import { useState } from 'react';
import './App.css';

import Img2 from './assets/img2.jpg';

import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';

function App() {
  
  const cars = [
    {id: 1, brand: "Ferrari", color: "#FF0000", km: 25000, novo:false},
    {id: 2, brand: "Ford", color: "#0000FF", km: 0, novo:true},
    {id: 3, brand: "Fiat", color: "#CAFF05", km: 10000, novo:false}
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  
  return (
    <div className="App">
      <h1>Iniciando na Seção 3</h1>
      <div>
        <img src="/img1.jpg" alt="Personagem com MOD" />
      </div>
      <div>
        <img src={Img2} alt="Personagem Vanilla" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Denecley Alvim" />
      <CarDetails brand="Ferrari" km={25000} color="RED" novo={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="BLUE" novo={true}/>
      <CarDetails brand="Fiat" km={10000} color="WHITE" novo={false}/>
      {/* Lista de carros */}
      <h1>Listagem de carros</h1>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} novo={car.novo} />
      ))}
      <Fragment propFragment="Teste"/>
      <Container myValue="TESTE">
        <p>Esse é o conteúdo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
