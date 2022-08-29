import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardBlog({ item }) {
  // Css - style
  const width = {
    width: '18em',
  };
  const fontSize = {
    fontSize: '12px',
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
        <Link to={`/detalhes/${item.id}`} className="text-decoration-none">
          <h5 className="card-title text-dark">{item.titulo}</h5>
          <p className="card-text text-muted">
            {`${item.UpdateBlogs[updateBlogs - 1].corpo.slice(0, 115)}...`}
          </p>
        </Link>
        <div className="d-flex justify-content-around mt-4">
          <Link to={`editar/${item.id}`} className="text-decoration-none text-primary">
            Editar
          </Link>
          <button
            type="button"
            onClick={handleRemove}
            className="text-decoration-none btn btn-link p-0"
          >
            Excluir
          </button>
        </div>
        <div className="d-flex justify-content-around mt-4" style={fontSize}>
          <div>
            <p className="text-black-50 lh-1 m-0">postado</p>
            <time className="text-dark fst-italic">
              {formatData(item.dataCriacao)}
            </time>
          </div>
          <div>
            <p className="text-black-50 lh-1 m-0">Atualizado</p>
            <time className="text-dark fst-italic">
              {formatData(item.UpdateBlogs[updateBlogs - 1].dataAtualizacao)}
            </time>
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
