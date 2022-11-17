import React from 'react';
import Header from './Header';
import './App.css';

function App() {
  return (
    <Header name="Meu React" links = {["Sobre", "Comprar", "Contato", "logar", "sair"]}></Header> //novo componente criado
  );
}

export default App;
