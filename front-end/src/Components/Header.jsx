import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  // Css - style
  const width = {
    height: '100px',
  };
  return (
    <header className="d-flex justify-content-around bg-dark text-white" style={width}>
      <h1 className="mt-3">logo</h1>
      { children }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
