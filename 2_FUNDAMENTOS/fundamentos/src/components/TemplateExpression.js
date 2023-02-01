const TemplateExpression = () => {

  const name = "Gomide";
  const data = {
    age: 31,
    job: "Programer"
  };

  return (
    <div>
      Olá {name}, tudo bem? Sua idade é {data.age} e trabalha como {data.job}.
      {console.log("Imprimindo no console")}
    </div>
  );

}

export default TemplateExpression