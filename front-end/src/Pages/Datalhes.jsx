import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RequestOneBlog } from '../Services/RequestApi';
import Header from '../Components/Header';
import formatData from '../Utils';
import ListUpdate from '../Components/ListUpdate';

function Detalhes() {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);
  const [dataCriacao, setDataCriacao] = useState('');

  const api = async () => {
    const result = await RequestOneBlog(`/blog/${id}`);
    setBlog(result[0]);
    setDataCriacao(formatData(result[0].dataCriacao));
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <Header>
        <h1 className="col-5 col-sm-5 m-2">{blog.titulo}</h1>
        <h4 className="col-12 col-sm-3 m-2 mt-3">
          {dataCriacao}
        </h4>
      </Header>
      <p className="mt-4">Detalhes</p>
      <div className="container mt-4">
        {
          blog.titulo
          && blog.UpdateBlogs.map((item) => <ListUpdate item={item} key={item.id} />)
        }
      </div>
    </div>
  );
}

export default Detalhes;
