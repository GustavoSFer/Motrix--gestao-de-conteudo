import React, { Routes, Route } from 'react-router-dom';
import Detalhes from '../Pages/Datalhes';
import Editar from '../Pages/Editar';
import Principal from '../Pages/Principal';

function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Principal />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
      <Route path="/editar/:id" element={<Editar />} />
    </Routes>
  );
}

export default Rotas;
