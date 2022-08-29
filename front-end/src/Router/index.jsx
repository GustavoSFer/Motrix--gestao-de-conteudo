import React, { Routes, Route } from 'react-router-dom';
import Principal from '../Pages/Principal';

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
    </Routes>
  );
}

export default Rotas;
