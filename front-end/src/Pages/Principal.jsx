import React from 'react';
import CardBlog from '../Components/CardBlog';
import Header from '../Components/Header';

function Principal() {
  return (
    <div>

      <header>
        <Header>
          <div className="mt-4">
            <input type="text" />
            <button type="button">Pesquisar</button>
          </div>
          <div>
            <select className="mt-4">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </Header>
      </header>

      <main className="border border-success container text-center">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
          <CardBlog />
        </div>
      </main>

    </div>
  );
}

export default Principal;
