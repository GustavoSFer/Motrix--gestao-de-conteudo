import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardBlog({ item }) {
  // Css - style
  const width = {
    width: '18em',
  };

  const formatData = (data) => {
    const result = data.split('T');
    const separaData = result[0].split('-');
    return `${separaData[2]}/${separaData[1]}/${separaData[0]}`;
  };

  const handleRemove = () => {
    console.log('remove clicado');
  };

  const updateBlogs = item.UpdateBlogs.length;
  return (
    <div className="card m-2" style={width}>
      <div className="card-body">
        <Link to={`/detalhes/${item.id}`}>
          <h5 className="card-title">{item.titulo}</h5>
          <p className="card-text">
            {`${item.UpdateBlogs[updateBlogs - 1].corpo.slice(0, 50)}...`}
          </p>
        </Link>
        <div className="d-flex justify-content-around">
          <Link to={`editar/${item.id}`}>Editar</Link>
          <button type="button" onClick={handleRemove}>Excluir</button>
        </div>
        <div className="d-flex justify-content-around">
          <div>
            <p>postado:</p>
            <time>{formatData(item.dataCriacao)}</time>
          </div>
          <div>
            <p>Atualizado:</p>
            <time>{formatData(item.UpdateBlogs[updateBlogs - 1].dataAtualizacao)}</time>
          </div>
        </div>
      </div>
    </div>
  );
}

CardBlog.propTypes = {
  item: PropTypes.shape({
    UpdateBlogs: PropTypes.arrayOf(PropTypes.objectOf),
    dataCriacao: PropTypes.string,
    id: PropTypes.number,
    titulo: PropTypes.string,
  }).isRequired,
};

export default CardBlog;
