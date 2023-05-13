import { FiSearch } from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';

function App() {
  return (
    <div className="container">

      <h1 className="title">
        BUSCADOR CEP
        </h1>

      <div class="containerInput">
      
      <input
      type="text"
      placeholder="Digite seu CEP"      
      
      
      />

      <button className="buttonSearch">
      <FiSearch size={25} color='#FFF'>

      </FiSearch>
      </button>
      </div>

      <main className='main'>
        <h2>
          CEP: 
        </h2>

        <span>Rua:</span>
        <span>Complemento:</span>
        <span>Bairro:</span>
        <span>Estado:</span>

      </main>
    
    </div>
  );
}

export default App;
