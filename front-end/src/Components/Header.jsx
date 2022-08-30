import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ children }) {
  // Css - style
  const width = {
    // height: '100px',
  };
  return (
    <header className="row bg-dark text-white p-3" style={width}>
      <Link to="/" className="text-decoration-none col-5 col-sm-3 m-2 d-none d-sm-block">
        <h1 className="text-white">logo</h1>
      </Link>
      { children }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
