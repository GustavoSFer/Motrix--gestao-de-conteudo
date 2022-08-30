import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../MyContext';
import CardBlog from '../Components/CardBlog';
import Header from '../Components/Header';
import { RequestApi, RequestPostBlog } from '../Services/RequestApi';
import Input from '../Components/Input';
import lupa from '../imagens/lupa.png';
import Button from '../Components/Button';

function Principal() {
  const {
    blogs, loading, setLoading, setBlogs, pesquisa, setPesquisa,
    pesquisarTitulo, limparPesquisa,
  } = useContext(MyContext);
  const [txtTitulo, setTitulo] = useState('');
  const [txtCorpo, setCorpo] = useState('');

  const api = async () => {
    setLoading(true);
    setBlogs(await RequestApi('/blog'));
    setLoading(false);
  };

  const handleClick = async () => {
    await RequestPostBlog('/blog', { titulo: txtTitulo, corpo: txtCorpo });
    api();
    setCorpo('');
    setTitulo('');
  };

  useEffect(() => {
    api();
  }, []);

  const img = {
    minHeight: '30px',
    maxHeight: '30px',
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
                  name="Pesquisar por título"
                  value={pesquisa}
                  handleChange={(e) => setPesquisa(e.target.value)}
                  sty="w-100"
                />
              </div>
              <div className="ms-2">
                <Button click={() => pesquisarTitulo(pesquisa)}>
                  <img src={lupa} alt="pesquisar" style={img} />
                </Button>
              </div>
              <div className="ms-2">
                <Button click={() => limparPesquisa(pesquisa)} sty="p-2">
                  Limpar
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
        <div className="m-3 border border-primary p-2 border-opacity-25">
          <p>Campo para realizar novo cadastro.</p>
          <Input
            type="text"
            name="Título"
            value={txtTitulo}
            sty="text-center"
            handleChange={(e) => {
              if (e.target.value.length <= 40) {
                setTitulo(e.target.value);
              }
            }}
          />
          <Input
            type="text"
            name="texto"
            value={txtCorpo}
            sty="text-center"
            handleChange={(e) => setCorpo(e.target.value)}
          />
          <div className="mt-3 text-end">
            <Button click={handleClick}>Salvar</Button>
          </div>
        </div>
        <div className="row row-cols-2 g-lg-3 d-flex justify-content-center mt-5">
          {
            blogs && blogs.map((blog) => <CardBlog item={blog} key={blog.id} />)
          }
        </div>
      </main>

    </div>
  );
}

export default Principal;
