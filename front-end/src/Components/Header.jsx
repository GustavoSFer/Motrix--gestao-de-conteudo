import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header className="d-flex justify-content-around">
      <h1>logo</h1>
      { children }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
