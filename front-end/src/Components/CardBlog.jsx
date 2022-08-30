import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

import formatData from '../Utils';

function CardBlog({ item }) {
  const [clickRemove, setClikRemove] = useState(true);
  const updateBlogs = item.UpdateBlogs.length;

  const handleRemove = () => {
    console.log('remove clicado');
    setClikRemove(!clickRemove);
  };

  const desativar = () => {
    console.log('desativar clicado');
    setClikRemove(!clickRemove);
  };

  const excluir = () => {
    console.log('deleta clicado');
    setClikRemove(!clickRemove);
  };

  // Css - style
  const width = {
    width: '18em',
  };
  const fontSize = {
    fontSize: '12px',
  };
  const remove = {
    width: '18em',
    height: '17em',
    zIndex: '1',
  };

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

      <div
        className={`border border-primary rounded
        position-absolute top-0 end-0
        bg-dark text-white ${clickRemove && 'd-none'}`}
        style={remove}
      >
        <div className="text-end">
          <Button click={() => handleRemove()}>X</Button>
        </div>
        <h4 className="mt-5">{item.titulo}</h4>
        <p className="mt-3">Escolha a opção que deseja:</p>
        <Button click={desativar} sty="m-1">Desativar</Button>
        <Button click={excluir}>Excluir</Button>
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
