import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Header from '../Components/Header';
import { RequestOneBlog, RequestUpdateBlog } from '../Services/RequestApi';

function Editar() {
  const { id } = useParams();
  const history = useNavigate();

  const [blog, setBlog] = useState([]);
  const [txtCorpo, setTxtCorpo] = useState('');

  const api = async () => {
    const result = await RequestOneBlog(`/blog/${id}`);
    setBlog(result[0]);
    const tamanhoUpadateBlog = result[0].UpdateBlogs.length;
    setTxtCorpo(result[0].UpdateBlogs[tamanhoUpadateBlog - 1].corpo);
  };

  const handleClick = async () => {
    await RequestUpdateBlog('/updateBlog', { corpo: txtCorpo, blogId: id });
    history('/');
  };

  useEffect(() => {
    api();
  }, []);

  // CSS - Style
  const textArea = {
    width: '70%',
    margin: 'auto',
  };
  const heightextArea = {
    height: '150px',
  };

  return (
    <div>
      <Header>
        <h1 className="col-5 col-sm-5 m-2">
          {blog.titulo}
        </h1>
        <div className="col-12 col-sm-3 mt-3">
          <Button click={() => history('/')}>Cancelar</Button>
        </div>
      </Header>
      <h5 className="mt-4">Editar informações</h5>
      <div className="form-floating mt-4" style={textArea}>
        <textarea
          className="form-control"
          value={txtCorpo}
          style={heightextArea}
          onChange={(e) => setTxtCorpo(e.target.value)}
        />
        <div className="mt-3 text-end">
          <Button click={handleClick}>Salvar</Button>
        </div>
      </div>
    </div>
  );
}

export default Editar;
