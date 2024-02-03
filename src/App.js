import './App.css';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <h1>Adicione três elementos de cartão.</h1>
      <Card h2 = "Primeiro cartão h2" h3 = "Primeiro cartão h3"/>
      <Card h2 = "Segundo cartão h2" h3 = "Segundo cartão h3"/>
      <Card h2 = "Terceiro cartão h2" h3 = "Terceiro cartão h3"/>
    </div>
  );
};

export default App;
