import React from 'react';
import Header from '../Components/Header';

function Principal() {
  return (
    <main>
      <Header>
        <div>
          <input type="text" />
          <button type="button">Pesquisar</button>
        </div>
        <div>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </Header>
    </main>
  );
}

export default Principal;
