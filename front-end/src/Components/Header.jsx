import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../imagens/logo.png';

function Header({ children }) {
  const logoimg = {
    width: '100px',
  };

  return (
    <header className="row bg-dark text-white p-3">
      <Link to="/" className="text-decoration-none col-5 col-sm-3 m-2 d-none d-sm-block">
        <img src={logo} alt="logo da empresa" style={logoimg} />
      </Link>
      { children }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
