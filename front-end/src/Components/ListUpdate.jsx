import React from 'react';
import PropTypes from 'prop-types';
import formatData from '../Utils';

function ListUpdate({ item }) {
  return (
    <div className="mt-2">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {item.corpo}
          <span className="badge bg-primary rounded-pill">
            {formatData(item.dataAtualizacao)}
          </span>
        </li>
      </ul>
    </div>
  );
}

ListUpdate.propTypes = {
  item: PropTypes.objectOf.isRequired,
};

export default ListUpdate;
