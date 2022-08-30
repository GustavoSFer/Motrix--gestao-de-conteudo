import React, { useContext, useEffect } from 'react';
import MyContext from '../MyContext';
import CardBlog from '../Components/CardBlog';
import Header from '../Components/Header';
import { RequestApi } from '../Services/RequestApi';

function Principal() {
  const { blogs, loading, setBlogs } = useContext(MyContext);

  const api = async () => {
    setBlogs(await RequestApi('/blog'));
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      {loading && <p>Carregando ...</p>}
      <header>
        <Header>
          <div className="col-5 col-sm-5 m-2">
            <div className="d-flex justify-content-center">
              <div className="">
                <label htmlFor="txt-pesquisa">
                  <input type="text" className="w-100" id="txt-pesquisa" />
                </label>
              </div>
              <div className="">
                <button type="button">Peq</button>
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
