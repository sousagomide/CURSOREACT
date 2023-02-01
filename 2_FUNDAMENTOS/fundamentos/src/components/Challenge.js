const Challenge = () => {

  const x = 15;
  const y = 25;

  const somar = (e) => {
    console.log(x + y);
  }

  return (
    <div>
      <h1>X: {x} e Y: {y}</h1>
      <button onClick={somar}>Somatório</button>
    </div>
  );

}

export default Challenge