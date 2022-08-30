import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../MyContext';
import CardBlog from '../Components/CardBlog';
import Header from '../Components/Header';
import { RequestApi } from '../Services/RequestApi';
import Input from '../Components/Input';
import lupa from '../imagens/lupa.png';
import Button from '../Components/Button';

function Principal() {
  const { blogs, loading, setBlogs } = useContext(MyContext);
  const [pesquisa, setPesquisa] = useState('');

  const api = async () => {
    setBlogs(await RequestApi('/blog'));
  };

  useEffect(() => {
    api();
  }, []);

  const img = {
    minHeight: '30px',
    maxHeight: '30px',
    padding: '5px',
  };

  return (
    <div>
      {loading && <p>Carregando ...</p>}
      <header>
        <Header>
          <div className="col-12 col-sm-5 m-2">
            <div className="d-flex justify-content-center">
              <div className="">
                <Input
                  type="text"
                  name="Pesquisar"
                  value={pesquisa}
                  handleChange={(e) => setPesquisa(e.target.value)}
                  sty="w-100"
                />
              </div>
              <div className="ms-2">
                <Button>
                  <img src={lupa} alt="pesquisar" style={img} />
                </Button>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-3 m-2">
            <select>
              <option value="1">Filtro</option>
              <option value="2">Mais recentes</option>
              <option value="2">Mais antigas</option>
            </select>
          </div>
        </Header>
      </header>

      <main className="border border-success container">
        <div className="row row-cols-2 g-lg-3 d-flex justify-content-center">
          {
            blogs && blogs.map((blog) => <CardBlog item={blog} key={blog.id} />)
          }
        </div>
      </main>

    </div>
  );
}

export default Principal;
